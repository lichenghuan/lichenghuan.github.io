

---
layout:     post
title:      "元素进入可视区域"
subtitle:   " \"grace JavaScript\""
date:       2019-11-19 15:00:00
author:     "huan"
header-img: "img/ArticleBg/post-bg-js-version.jpg"
catalog: true
tags:

    - JavaScript
---





例如：活动页，有多个tab楼层，滑动到某个楼层最底部，自动当前楼层下一页数据。





```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>元素进入可视区域</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        .box {
            background: rgb(0, 163, 238);
            height: 9000px;
        }

        .div1 {
            height: 2000px;
            width: 200px;
            background: rgb(31, 126, 133);
        }

        .move {
            width: 100px;
            height: 100px;
            background: #000;
        }
    </style>
</head>

<body>

    <div class="box">

        <div class="div1"></div>

        <div class="move"></div>
    </div>



</body>

</html>

<script>

    // 判断一个或多个元素进入页面可视区域，触发其点击事件

    function inViewport(prm) {

        var params = {
            className: prm.className || '',
            deviaTop: parseFloat(prm.deviaTop) || 0,               // 元素从页面顶部出现，离顶部偏差 deviaTop    后触发
            deviaBottom: parseFloat(prm.deviaBottom) || 0,         // 元素从页面底部出现，离底部偏差 deviaBottom 后触发
            callback: prm.callback || null,                        // 元素出现在可视区域时的回调
        };

        var mdownArr = document.getElementsByClassName(params.className);
        if (mdownArr && mdownArr.length !== 0) {
            for (var x = 0; x < mdownArr.length; x++) {
                var ele = mdownArr[x];                              // 当前元素
                var eleHeight = ele.clientHeight;                   // 当前元素高度
                var winHeight = window.innerHeight;                 // 当前页面高度
                var eletopDist = ele.getBoundingClientRect().top;   // 元素到页面顶部的距离
                var ArriveRect = eletopDist - winHeight;

                var deviaBottom = -params.deviaBottom;
                var deviaTop = -(winHeight + eleHeight) + params.deviaTop;
                if (ArriveRect < deviaBottom && ArriveRect > deviaTop) {
                    // 当前元素进入页面可视区域
                    if (params.callback && typeof params.callback == 'function') {
                        params.callback(ele)
                    }
                }
            }
        }
    }

    window.onscroll = function () {

        inViewport({
            className: 'move',
            callback: function (ele) {
                console.log(ele)
                console.log(99999)
                ele.click();
            }
        });
    }




</script>
```

