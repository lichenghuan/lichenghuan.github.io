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

 **增**

```javascript
var str1='abcd';

str1+'efgh';   // abcdefgh
```

**删**

```javascript
var str1='abcdefgh';

str1.charAt(0);  // a       
str1.charAt(2);  // c
str1.charAt(str1.length-1);  //h

//substr()方法截取字符串，小括号内的参数有两个，第一个是截取起始位置，第二个是截取的长度
str1.substr(2,5);  // cdefg        substr(起始位置，截取长度)

//substring()方法截取字符串，参数也有两个，第一个是起始位置；第二个是结束为止，但该位并不包含在内
str1.substring(2,5); // cde        substring(起始位置，结束位置但不包括该位）

//slice()方法与substring()方法类似，得到的结果也类似
//但有一点不同的是slice接受负参，而substring如果有负参则直接将负参转化为0
//slice的负参中，-1表示最后一位，-2倒数第二位，以此类推
str1.slice(2,5)  //cde       slice(起始位置，结束位置但不包括该位）
str1.slice(1,-1)  //bcdefg       slice(起始位置，-1表示最后一位）

以上操作相当于删除匹配以外的，哈哈
```

**改**









**查**

```javascript
var str1='abcdefgh';

//search()顾名思义，就是查找，它接受一个参数，该参数是你需要查找的字符，如果被查找的字符串中这个字符，则返回它在该字符串中的下标，如果没有则返回-1
str1.search('g'); // 6      
str1.search('g'); // -1      

//match()方法一般搭配正则表达式使用，支持全局匹配，参数是匹配的字符或正则，返回一个数组，如上例子中，我想要匹配字符串中g这个字符，可以写一个正则/g/g来
var str2='edsixldknxngnlxkds';


```





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