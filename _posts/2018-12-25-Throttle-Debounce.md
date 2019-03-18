---
layout:     post
title:      "JS函数防抖与函数节流"
subtitle:   "debounce and throttle"
date:       2018-12-25 12:30:00
author:     "huan"
header-img: "img/ArticleBg/post-bg-js-version.jpg"
catalog: true
tags:
    - JavaScript
---



### 目的：
> **函数防抖（debounce）与函数节流（throttle）**都是为了限制函数的执行频次，以优化函数触发频率过高导致的响应速度跟不上触发频率，出现延迟，假死或卡顿的现象。



[防抖和节流体验对比地址](http://demo.nimius.net/debounce_throttle/)

![](https://ws3.sinaimg.cn/large/005BYqpgly1fyizmvt84ng31gz0gsjx1.jpg)



### 函数防抖

**频繁触发,当有足够空闲的时间才执行一次代码 （事件内的N个动作会变忽略，只有事件后`由程序触发`的动作才是有效。）**

使用场景：

- 实时搜索（keyup）
- 拖拽（mousemove）



```javascript
//简易版函数防抖
var timer = false;
div.onmousemove = function () {
    clearTimeout(timer); // 清除未执行的代码，重置回初始化状态
    timer = setTimeout(function () {
        console.log("函数防抖");
    }, 100);
}
```



```javascript
//封装后的防抖函数
function debounce(fn, wait) {
    var timeout;//需要一个外部变量，为增强封装，所以使用闭包
    return function () {
        var _this = this;
        var _arguments = arguments;//arguments中存着e
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            fn.apply(_this, _arguments); //改变this指向
        }, wait);
    }
}

//使用,fn为你需要执行的方法
div.onmousemove = debounce(fn, 200);
```



### 函数节流

**频繁触发,但只在特定的时间内才执行一次代码**

使用场景：

- 窗口调整（resize）
- 页面滚动（scroll）
- 抢购疯狂点击（mousedown）



```javascript
//简易版函数节流
var flag = true;
div.onmousemove = function () {
    if (!flag) return; // 判断是否已空闲，如果在执行中，则直接return
    flag = false;
    setTimeout(function () {
        console.log("函数节流");
        flag = true;   //重置
    }, 300);
};
```



```javascript
//封装后的节流函数
function throttle(fn, wait) {
    var timeout;  //需要一个外部变量，为增强封装，所以使用闭包
    return function () {
        var _this = this;
        var _arguments = arguments;  //arguments中存着e
        if (!timeout) {
            timeout = setTimeout(function () {
                timeout = null;
                fn.apply(_this, _arguments);  //改变this指向
            }, wait);
        };
    }
}

//使用,fn为你需要执行的方法
div.onmousemove = throttle(fn, 600);
```



### 在线演示

<div style='width:100%;height:780px'>
     <iframe src="https://codepen.io/lichenghuan/pen/VqWjdv?editors=0010" frameborder="0" align="left"  height="780" scrolling="yes" style='width:100%'>
            <p>你的浏览器不支持iframe标签</p>
        </iframe>
</div>