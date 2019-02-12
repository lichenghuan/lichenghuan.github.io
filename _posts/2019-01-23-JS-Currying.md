---
layout:     post
title:      "javascript函数柯里化"
subtitle:   " \"Currying\""
date:       2019-01-23 15:00:00
author:     "huan"
header-img: "img/post-bg-2015.jpg"
catalog: true
tags:
    - JavaScript
---



> 在计算机科学中，柯里化（Currying）是把接受多个参数的函数变换成接受一个单一参数(最初函数的第一个参数)的函数，并且返回接受余下的参数且返回结果的新函数的技术。



```javascript
// 1. 最简单的柯里化
// sum函数接受三个参数，并返回求和结果
var sum = function(a,b,c) {
    return a+b+c;
}
sum(1,2,3);

// 简单柯里化的sum函数
var sum_curry = function(a){
    return function(b,c){
        return a+b+c;
    }
}

// 使用ES6的箭头函数实现
let sum_currying= x => y => z => x+y+z;
```

