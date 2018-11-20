---
layout:     post
title:      "字符串、数组与对象的'增删改查'"
subtitle:   ""
date:       2018-11-20 10:05:00
author:     "huan"
header-img: "img/post-bg-2015.jpg"
catalog: true
tags:
    - js
---



> 不管是字符串、数组还是对象，其最终目的不过是"增删改查”。

tips：以下操作可打开浏览器控制台进行测验



### 字符串：

 





### 数组：



**增**

```javascript
var a = [1,2,3,4,5];   

//push 增加到最后 并返回新数组长度；
a.push(6);	//[1, 2, 3, 4, 5, 6]  
a.push('xx');	//[1, 2, 3, 4, 5, 6, "xx"] 返回长度7  
a.push('yy');	//[1, 2, 3, 4, 5, 6, "xx", "yy"] 返回长度8   

var b = [1,2,3,4,5];   
//unshift增加到最前  并返回新数组长度；
b.unshift();//[1, 2, 3, 4, 5]  
b.unshift("cc");//["cc", 1, 2, 3, 4, 5] 返回长度6  
b.unshift("aaa");//["aaa", "cc", 1, 2, 3, 4, 5] 返回长度7   

```



**删**

```javascript
var a = [1,2,3,4,5];  
//POP 删除最后一项
a.pop();//a：[1, 2, 3, 4]  
a.pop();//a：[1, 2, 3]  
a.pop();//a：[1, 2]   
```





### 对象：