---
layout:     post
title:      "clipboard.js应用到博客中"
subtitle:   " \"博客代码块快速复制功能\""
date:       2019-01-13 22:00:00
author:     "huan"
header-img: "img/ArticleBg/post-bg-js-version.jpg"
catalog: true
tags:
    - 随手
---

> 使用第三方插件clipboardjs 配置代码块的快速复制功能，插件传送门： [官网](https://clipboardjs.com/)     [github](https://github.com/zenorocha/clipboard.js)。

实际项目中可以用这个插件的配置复制功能，浏览器兼容性好且插件体积小；其官网和github上面都有例子，这里就不赘述了。

**1.首先需引入[clipboard.min.js](https://raw.githubusercontent.com/zenorocha/clipboard.js/master/dist/clipboard.min.js)**

**2.然后给代码块和复制按钮添加一些样式**

```css
.highlight {  /* 代码块高亮区 */
    position: relative;
}
.btn-copy {   /* 复制按钮样式 */
    display: inline-block;
    cursor: pointer;
    background-color: #eee;
    background-image: linear-gradient(#fcfcfc, #eee);
    border: 1px solid #d5d5d5;
    border-radius: 3px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-appearance: none;
    font-size: 13px;
    font-weight: 700;
    line-height: 20px;
    color: #333;
    -webkit-transition: opacity .3s ease-in-out;
    -o-transition: opacity .3s ease-in-out;
    transition: opacity .3s ease-in-out;
    padding: 2px 6px;
    position: absolute;
    right: 5px;
    top: 5px;
    opacity: 0;
}
.btn-copy span {
    margin-left: 5px;
}
.btn-copy .copyLove {
    color: red;
}
.highlight:hover .btn-copy {  /* 复制按钮出现 */
    opacity: 1;
}
```

**3.最后**

```javascript
!function (e, t, a) {
    var initCopyCode = function () {
        var copyHtml = '';
        copyHtml += '<button class="btn-copy" data-clipboard-snippet="">';
        copyHtml += '<i class="copyLove">❤</i><span>复制</span>';
        copyHtml += '</button>';
        
        $(".highlight code pre").before(copyHtml);  
        console.log($(".highlight code pre"))
       /* 这里需要引入jquery哈，找到代码块高亮区里面需要复制的那部分，一般都在pre标签中，可打开浏览器控制台审查元素是否获取对了 */
        
        new ClipboardJS('.btn-copy', {  //创建clipboardJS实例，然后就这么简单
            target: function (trigger) {
                alert('复制成功！！！');
                return trigger.nextElementSibling;
            }
        });
        
    }
    initCopyCode();
}(window, document);
```

