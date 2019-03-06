---
layout:     post
title:      "移动H5前端调试面板"
subtitle:   ""
date:       2019-03-06 12:00:00
author:     "huan"
header-img: "img/post-bg-2015.jpg"
catalog: true
tags:
    - 移动端H5

---



> 在做移动H5开发的时候，一般都是在电脑的谷歌浏览器手机模式下进行开发，借助着谷歌浏览器的调试面板，可以轻松的玩耍。但是页面一到了**安卓**、**IOS**或**微信端**中就会出现各种兼容性，手机端也没有调试面板，如何是好，不慌，下面就来介绍两款类似谷歌浏览器调试面板的插件。
>



### 1.[vConsole](https://github.com/Tencent/vConsole/blob/dev/doc/tutorial_CN.md)

##### npm安装

- 首先安装插件：   	`npm install vconsole -D`

	 在main.js引入： 	`import Vconsole from 'vconsole'; `   

  ​	       		                `const vConsole = new Vconsole(); `

- 即可愉快玩耍

##### CDN引入

```html
<script src="https://cdn.bootcss.com/vConsole/3.3.0/vconsole.min.js"></script>
<script>var vConsole = new VConsole();</script>
```

[vConsole各版本CDN地址](https://www.bootcdn.cn/vConsole/)

##### 如何使用

页面右下角会出现一个vConsole绿色按钮，即表示成功引入，点击该按钮，会弹出与谷歌浏览器的调试面板类似的弹窗，且用法一致。

![3.gif](https://i.loli.net/2019/03/05/5c7e9a75e0644.gif)

### 2.[Eruda](https://github.com/liriliri/eruda/blob/master/doc/README_CN.md)

##### npm安装

- 首先安装插件：		`npm install eruda -D`

- 在页面中加载脚本： 

  ```html
  <script src="node_modules/eruda/eruda.min.js"></script>
  <script>eruda.init();</script>
  ```

##### CDN引入

```html
<script src="//cdn.bootcss.com/eruda/1.5.2/eruda.min.js"></script>
<script>eruda.init();</script>
```

js文件对于移动端来说略重（gzip后大概100kb）。建议通过url参数来控制是否加载调试器，比如： 

```js
;(function () {
    var src = 'node_modules/eruda/eruda.min.js';
    if (!/eruda=true/.test(window.location) && localStorage.getItem('active-eruda') != 'true') return;
    document.write('<scr' + 'ipt src="' + src + '"></scr' + 'ipt>');
    document.write('<scr' + 'ipt>eruda.init();</scr' + 'ipt>');
})();
```

##### 如何使用

个人感觉风格比较好看，而且功能也比vConsole多一点，具体使用请看官网。

![2.gif](https://i.loli.net/2019/03/05/5c7e9a14a44f7.gif)