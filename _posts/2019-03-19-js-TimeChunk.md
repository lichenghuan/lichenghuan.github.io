---
layout:     post
title:      "分时函数"
subtitle:   "\"TimeChunk\""  
date:       2019-03-19 12:30:00
author:     "huan"
header-img: "img/ArticleBg/post-bg-js-version.jpg"
catalog: true
tags:
    - JavaScript
---



### 分时函数

> 与**函数节流与防抖**一样，分时函数也是用来解决函数频繁执行带来的性能问题。
>
> 不同的是，函数节流场景为被动调用，分时函数为主动调用。
>
> 分时函数是把函数一段一段执行。

例如在短时间内往页面中大量添加 DOM 节点往往导致浏览器卡顿甚至假死。

（分页可以解决一次性大量插入DOM的问题)

### 在线演示

<div style='width:100%;height:780px'>
     <iframe src="https://codepen.io/lichenghuan/full/YgjEPO" frameborder="0" align="left"  height="780" scrolling="yes" style='width:100%'>
            <p>你的浏览器不支持iframe标签</p>
        </iframe>
</div>




### 代码

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>分时函数</title>
  <style>
    html,
    body {
      background: #252526;
    }

    * {
      margin: 0;
      padding: 0;
    }

    .box {
      overflow: hidden;
    }

    .box>div {
      float: left;
      background: #f1f3f4;
      width: 40px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      margin: 10px;
      color: purple;
      box-sizing: border-box;
    }
  </style>
</head>

<body>
  <div class="box"></div>
</body>

</html>
<script>
  window.onload = function() {
    var allData = [];
    var n = 1000;
    for (let i = 1; i < n; i++) {
      allData.push(i); //模拟n条数据
    }
    ////1.普通方法，一次渲染完   不过一般不需要一次渲染完那么多数据，大多数场景分页就可以了。
    //     alldata.forEach(v => {
    //         var div = document.createElement('div');
    //         div.innerHTML = v;
    //         document.querySelector('.box').appendChild(div);
    //     })
    ////一次渲染完n条数据，在短时间内往页面中大量添加 DOM 节点往往就是浏览器的卡顿甚至假死。
    ////2.分时函数 => 时间 换取 空间
    //data 数据
    //count 每次渲染的条数
    //ms  每次渲染的时间间隔
    //callback  回调函数
    function timeChunk(data, count, ms, callback) {
      var timer = setInterval(() => {
        if (data.length == 0) {
          clearInterval(timer);
        } else {
          runRender();
        }
      }, ms);

      function runRender() {
        var arr = data.splice(0, Math.min(count, data.length));
        //splice将原数组切割，该方法会改变原始数组。
        callback(arr);
      }
    }
    //执行分时
    timeChunk(allData, 9, 100, function(data) {
      data.forEach(v => {
        var div = document.createElement("div");
        div.innerHTML = v;
        document.querySelector(".box").appendChild(div);
      });
    });
  };
</script>
```

