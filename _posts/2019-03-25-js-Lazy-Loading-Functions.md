---
layout:     post
title:      "惰性加载函数"
subtitle:   "\"Lazy Loading Functions\""  
date:       2019-03-25 12:30:00
author:     "huan"
header-img: "img/ArticleBg/post-bg-js-version.jpg"
catalog: true
tags:
    - JavaScript
---



### 惰性加载函数

> 惰性加载函数是指函数里的内容只在首次执行函数时加载执行。
>常用于一些嗅探函数。



一个普通的浏览器嗅探技术，每次都要调用addEvent进行判断，执行if语句。

```javascript
// 浏览器嗅探技术：指的就是检测浏览器是否支持
var addEvent = function(elem, type, handler) {
    if (window.addEventListener) {
        return elem.addEventListener(type, handler, false);
    }
    if (window.attachEvent) {
        return elem.attachEvent('on' + type, handler);
    }
};
//这个函数的缺点是每次都会执行if语句
```

另一个加载技术，通过立即执行函数，加载的时候立即执行addEvent()，并且根据浏览器的不同返回一个新的匿名函数。

```javascript
var addEvent = (function() {
    if (window.addEventListener) {
        return function(elem, type, handler) {
            elem.addEventListener(type, handler, false) //webkit、os
        }
    }
    if (window.attachEvent) {
        return function(elem, type, handler) {
            elem.attachEvent('on' + type, handler) //IE浏览器
        };
    }
})()
```

**使用惰性加载函数**，相当于重新封装一次addEvent，第一次使用addEvent函数时就重写，这个跟前面的很像，只不过是在函数内部重写addEvent。

```javascript
var addEvent = function(elem, type, handler) {
    if (window.addEventListener) {
    	//重写addEvent，之后不会再执行if else
        addEvent = function(elem, type, handler) {
            console.log('chrome addEvent');
            elem.addEventListener(type, handler, false)
        }
    } else if (window.attachEvent) {
    	//重写addEvent，之后不会再执行if else
        addEvent = function(elem, type, handler) {
            console.log('ie addEvent');
            elem.attachEvent('on' + type, handler)
        }
    }
    addEvent(elem, type, handler)
}
var div = document.getElementById('div1');
addEvent(div, 'click', function() {
    alert(1);
})
addEvent(div, 'click', function() {
    alert(2)
})
```

**惰性加载函数应用场景总结（以下两个条件同时满足）：**

1.应用频繁，如果只用一次，是体现不出它优点的，用的次数越多，越能体现这种模式的优势所在。

2.固定不变，一次判定，在固定的应用环境中不会发生改变。