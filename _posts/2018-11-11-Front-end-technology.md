---
layout:     post
title:      "2018前端值得关注的技术"
subtitle:   " \"学不动啦\""	
date:       2018-11-11 21:33:00
author:     "huan"
header-img: "img/ArticleBg/v2.jpg"
catalog: true
tags:
    - 前端
---

## 1.前言

2017悄然过去，2018已经来到。人在进步，技术在发展。2018年前端有哪些领域，技术值得关注，哪些技术会兴起，哪些技术会没落。下面就我个人的判断进行一个预测判断，希望能对大家起到一个参考作用！下面提及的技术，只是建议大家关注，也不是建议大家全部的都要学，而是建议大家按需学，自己觉得哪些需要学，对哪些有兴趣就学哪些！如果大家有什么工具，框架，库觉得可以推荐的，欢迎在评论区提点，让大家相互进步，学习！



## 2.PWA

PWA(Progressive Web Apps)由谷歌提出，用前沿的技术开发，让网页使用如同App般的体验的一系列方案。明确的一点就是：PWA就是一个网页, 可以通过前沿的技术开发出一个网页应用。

自从谷歌提出PWA后，就持续的获得了业界的关注，热度可见一斑。就在今年，谷歌也宣布： [**PWA将获得与安卓原生应用同等的待遇与权限**](https://www.infoq.cn/guide?targetUrl=https%3A%2F%2Fwww.infoq.cn%2Fnews%2F2017%2F02%2FPWA-Chrome) 。这就意味着以后的网页基本和APP将越发将近，那么关注度将会进一步的上升。

资料参考：

[**PWA 入门: 写个非常简单的 PWA 页面**](https://zhuanlan.zhihu.com/p/25459319)

[**【转载】你的首个 Progressive Web App**](https://www.w3cplus.com/pwa/your-first-pwapp.html)

[**【转载】下一代Web应用模型：Progressive Web App**](https://www.w3cplus.com/pwa/nextgen-web-pwa.html)

## 3.typeScript

TypeScript由微软开发。它是JavaScript的一个超集，自由和开源的编程语言。在这个语言中，添加了可选的静态类型和基于类的面向对象编程。由下图说明typeScript和JavaScript的关系！

![img](https://pic2.zhimg.com/80/v2-37d423c0a00246ec1b655b30cb340b0d_hd.jpg)



angular已经开始使用typeScript进行开发，react和vue也进一步加深对typeScript的支持。不难发现，typeScript的火热程度！

资料参考：

[**TypeScript官方文档**](https://www.tslang.cn/docs/home.html)

[**TypeScript 资源集**](https://segmentfault.com/a/1190000010130073)

[**从 JavaScript 到 TypeScript 1 - 什么是 TypeScript**](https://tasaid.com/Blog/20171011231943.html?sgs=sf) （看了第一篇，别落下这个系列的几篇文章）

## 4.parcel能给webpack带来多大的威胁

[**webpack**](https://github.com/webpack/webpack) 大家都知道是JavaScript模块打包工具，简单的来说就是把各个模块就行分析，编译，打包等，使产出的文件可以在浏览器中运行。

![img](https://pic2.zhimg.com/80/v2-0c81ffdf453c3eb02b193b980036d3e1_hd.jpg)

（图片来源于菜鸟教程- [**Webpack入门教程**](http://www.runoob.com/w3cnote/webpack-tutorial.html) ）

webpack的工作虽然是模块打包工具，但也能代替类似gulp等自动构建工具的部分功能！经过2017的发展，webpack的火热程度也是有目共睹。

但是，但是。在2017末就出现了一个黑马： [**parcel**](https://github.com/parcel-bundler/parcel) 。parcel出乎了大多数人的意料，也算是2017的最大惊喜之一。说到parcel的最大优势，貌似就是webpack的最大劣势：配置和性能！parcel号称零配置，多核打包，并且使用文件缓存，在时间上比webpack快了将近10倍！

![img](https://pic4.zhimg.com/80/v2-b1e48f1896b577c2ba103b69ecd33147_hd.jpg)

（图片来源于neal的文章- [**宣布 Parcel：一个快速，零配置的 Web 应用打包工具**](https://segmentfault.com/a/1190000012332187) ）

从star上面而言，Parcel的关注度似乎超过了当时了webpack，热度仍在持续。

webpack难用之处，我觉得就是配置繁琐，且文档不完善，看着也懵逼。至于打包时间方面，只能说没有对比就没有伤害吧。如果Parcel能做好这几点，说不准能从webpack里面分到不少肉。

[**宣布 Parcel：一个快速，零配置的 Web 应用打包工具**](https://segmentfault.com/a/1190000012332187)

[**Parcel Vs Webpack**](http://www.imweb.io/topic/5a4451c3a192c3b460fce366)

## 5.WebAssembly

由谷歌, 微软, Mozilla，苹果等公司合作的一个面向Web的通用二进制和文本格式的项目。

引用腾讯IVWEB团队的说法：WebAssembly是一种新的字节码格式。它的缩写是".wasm"，.wasm 为文件名后缀，是一种新的底层安全的二进制语法。。它被定义为“精简、加载时间短的格式和执行模型”，并且被设计为Web 多编程语言目标文件格式。这意味着浏览器端的性能会得到极大提升，它也使得我们能够实现一个底层构建模块的集合，例如，强类型和块级作用域。

WebAssembly刚出来的时候，甚至有开发者猜想，以后会不会是WebAssembly代替JavaScript。在这里，我的感觉就是JavaScript不会被WebAssembly代替，等待没落，而是和WebAssembly共存的关系！2017年，chrome，火狐，IE，Safari四个浏览器统一通过了WebAssembly的方案，这是很少见的情况，我所了解的是第一次出现这样的统一情况，可见四个浏览器厂商对WebAssembly的重视。至于2018年，WebAssembly会有如何的发展，这个难说，初步预测应该还是普及推广，但是还没有到普及开发使用的阶段。但是无论如果，这个都值得关注！

[**来谈谈 WebAssembly 是个啥？为何说它会影响每一个 Web 开发者？**](https://cloud.tencent.com/developer/article/1004696)

[**WebAssembly 实践：如何写代码**](https://segmentfault.com/a/1190000008402872)

## 6.react,angular,vue三驾马车

2017年，react发展的迅猛，vue更是扮演框架黑马的角色，而angular虽然关注度不如以前，但是不容忽视！在2017的调查报告里面可以看到，趋势基本上是react已经占据主流，不使用框架位居第二，angular1，angular2分列三四。

![img](https://pic3.zhimg.com/80/v2-74fd9fd32102d172d8b3774df6a434d2_hd.jpg)

中国的情况就是，react第一，vue第二

![img](https://pic4.zhimg.com/80/v2-607b535a4d310c72a58830b966b28397_hd.jpg)

vue在2017年很火，但在2018年vue的潜力不容小觑如下图（有1.2W人想使用vue）。虽然超过react的可能性不是很大，但是位置依然会提升

![img](https://pic4.zhimg.com/80/v2-4737f48ecf9dbe51dc34aef4574d37e7_hd.jpg)



参考资料

[**2017JavaScript调查报告**](https://stateofjs.com/2017/front-end/results/)

[**前端领域2017年有哪些变化，2018年又有怎样的期待？**](https://www.zhihu.com/question/264551320/answer/282896101)

[**2017 前端大事件和趋势回顾，2018 何去何从？**](https://blog.csdn.net/VhWfR2u02Q/article/details/78757005)

[**2017 JavaScript 现状报告：询问了23000名开发者，他们给出了这样的答案**](https://36kr.com/p/5109616.html?from=related)

[**2018 年最值得关注的 JavaScript 趋势**](https://36kr.com/p/5110763.html)

无论如何，框架这个我觉得没有最好，只有最适合。三驾马车也没有说一定要全部都要会！一下就是，如果js基础好，学习框架会比较容易上手。如果极端得不学js，直接上手框架，会很吃力，很容易懵。

## 7.人工智能和大数据

人工智能和大数据，不是一门技术，而是一个领域，最近两年都很火，也不止于前端。我也觉得是互联网下一波的红利。非常值得关注与学习！这也是一个流行的趋势，因此一些数据可视化的工具（echart，D3等）和人工智能的库都得以收到关注！

## 8.yarn VS npm

相信接触到前端工程化，模块化的开发者都不可避免的使用npm进行功能包的安装依赖。尤其是在node.js的初期，npm就是工程化的一个标配。但是2017年，npm的地位显然是收到了yarn的威胁！今年的调查结果，yarn还超越了npm。yarn的优势在于：快，安全，和一些感人细节！如果照着情况下去，差距会逐渐变大！

![img](https://pic2.zhimg.com/80/v2-90843dea6770c4f5448648d970c7e315_hd.jpg)

参考资料

[**yarn, 不是又一个 npm 第三方客户端**](https://zhuanlan.zhihu.com/p/22892675)

[**Yarn vs npm: 你需要知道的一切**](http://web.jobbole.com/88459/)

## 9.css in js依然备受争议？

前端领域，一向是推荐结构层(html)，表现层(css)，行为层(javascript)分离。但是在react出来之后，这个准则就貌似被推翻了！因为react的组件结构，要求把html，css，javascript写在一起。很多开发者对css in js不适应甚至反对。那么在新的2018年，是否还是继续的争议下去？

参考资料

[**CSS in JS 简介**](http://www.ruanyifeng.com/blog/2017/04/css_in_js.html)

[**精读《请停止 css-in-js 的行为》**](https://zhuanlan.zhihu.com/p/26878157)

[**大家对CSS in JS怎么看？**](http://react-china.org/t/css-in-js/1487)

[**不要再在JavaScript中写 CSS了**](http://www.techweb.com.cn/network/system/2017-07-03/2550841.shtml)

## 10.flex和grid布局更加流行

以前前端页面布局的时候，inline-block，float，postion布局等。但是有了flex和grid，布局变得更加的简单。

首先flex基本已经被所有的浏览器支持的，其方便的特性也受到了很多开发者的热捧！

![img](https://pic4.zhimg.com/80/v2-d47ae190d8be20c3430a823648990c8b_hd.jpg)

（图片来源于阮一峰的网络日记-- [**Flex 布局教程：语法篇**](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html?utm_source=tuicool) ）

而grid，网格布局号称是下一代的布局方式，但是浏览器兼容方面就没有flex那么好。但是这个也是有必要了解的。毕竟已经被W3C纳入标准了。兼容性也是进一步增强。

![img](https://pic2.zhimg.com/80/v2-628b24d01c7d9e76079f023e16bc314d_hd.jpg)

参考资料

[**Flex 布局教程：语法篇**](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html?utm_source=tuicool)

[**Flex 布局教程：实例篇**](http://www.ruanyifeng.com/blog/2015/07/flex-examples.html)

[**CSS Grid布局：什么是网格布局**](https://www.w3cplus.com/css3/what-is-css-grid-layout.html) （看完这篇，建议连着看下面的几篇，都是大漠写的一个系列的文章，质量非常高）

[**CSS Grid VS Flexbox：实例对比**](https://www.jianshu.com/p/6262c3e48443)

## 11.rxjs

rxjs我有稍微了解一下，但是还没用上，可能是大家对这个也是比较陌生，但是我在这里提出来，是因为觉得rxjs还是值得推荐的。引用官网的说法：RxJS 是使用 Observables 的响应式编程的库，它使编写异步或基于回调的代码更容易。这个项目是 Reactive-Extensions/RxJS(RxJS 4) 的重写，具有更好的性能、更好的模块性、更好的可调试调用堆栈，同时保持大部分向后兼容，只有一些破坏性的变更(breaking changes)是为了减少外层的 API 。

参考资料

[**rxjs中文文档**](https://cn.rx.js.org/)

[**rxjs简单入门**](https://yq.aliyun.com/articles/65027)

[**通俗的方式理解RxJS**](https://segmentfault.com/a/1190000008464065)

## 12.其它方面

受限于篇幅，还有几个我也认为是可以关注的简单说下。如下

## [小程序](http://www.wxapp-union.com/)

首先微信小程序，自打微信小程序一出来，很多前端就吐槽。跟别人群聊的时候，很多人也提到：小程序一出来，我就认为是没前途的玩意。或者就是：灭绝APP不可能，小程序只是一个阉割版的APP，竞争厂商也不会开发小程序。还有就是：学习这个还不如关注了PWA，那个比这个更加有意义。谈到的话语大概就是这个意思，2017年，我也是比较介意开发小程序，以至于2017我压根就学过小程序。但是就在17年第四季度还是年末，微信先后宣布可以内嵌html5页面，也可以开发小游戏。让我看过了小程序又有了刚发布的热度。在18年，小程序发展如何，我是否会接触和学习开发小程序，走着瞧。但是无论都值得关注。

其次是支付宝的小程序，虽然感觉没什么新闻，但是毕竟是大厂的玩意。关注是值得关注的。至于学不学，开发不开发，另一回事！

## Electron

号称开发桌面应用的一大神器。也尝试了几个官方的实例，运行很流畅，只是因为暂时不开发桌面应用，所以没怎么关注，也没学习过。2018年依然关注，甚至会学习开发！

## WebVR 与 WebAR

看了所谓的相关实例，那些VR和AR的效果并不能引起我的兴趣，虽然那些实例，我也没了解过时怎么开发的。但是，对于这一块，关注还是值得的。毕竟这也算是WebVR和WebAR刚起步而已。

## 13.哪些技术会没落/下滑

## angular

前面还说到angular在前端框架里面还有很大的使用率。谷歌方面也是出到了5.x，居然在这里会出现？这里只是一个小小预测而已。2017讨论angular的情况已经是比较少了，在2018年里面angular的使用率觉得会继续下滑，但不会没落，并且在前端框架里面依然有很大的一个地位。18年，angular还是会和react和vue齐名的三大框架，只是使用者不如react和vue那样多。

## jquery

jquery在2018年也不会没落，只是使用率还是会进一步的减少。说到jquery，还真是一个时代的转变，在我刚接触前端的时候，jquery打天下。那个时候相对于其他的库和框架，jquery就是一个巨无霸，使用率遥遥领先。就连微软是在.net平台上支持了jquery。在刚工作的时候，潜规则就是：不会jquery，没人承认你是前端。可见当时的jquery的地位。也相信很多人对有jquery情怀。只是技术不讲情怀！

## es5以下版本语法

本段内容提及的es6代表es6以上的语法，包括es7,es8。es5代表es5以下的语法，包括es3

es6经过两年的发展，方便和实用性得到了众多开发者的欢迎。2017应该是es6语法的使用比率首次超es5，在2018年，es6语法使用比率会继续的升高。而es5等语法的使用比率会继续的下滑。即使就目前开发而言，还是要使用babel把es6的语法编译成es5。

![img](https://pic3.zhimg.com/80/v2-3761e08a2c08cfa310fc0cc5f196224a_hd.jpg)

![img](https://pic1.zhimg.com/80/v2-28e6b3355b399040a0bfd95c77627d98_hd.jpg)

![img](https://pic1.zhimg.com/80/v2-63d240bfbbb517d1862f7d986fa80ec0_hd.jpg)

## grunt

在gulp发布时，grunt的地址就已经很受影响了，现在又有打包工具代替了自动构建工具的部分工具，就显得自动构建工具的作用不如以前了，更别说市场有一个更好的构建工具了--gulp。

## sea.js

sea.js由国人开发，当时使用的时候还满心欢喜，终于有国人的东西登上舞台了。sea.js凭借简单，轻量等优势火极一时。但是有了es6的模块化之后，就连sea.js的作者玉伯也在微博发言：应该给 Sea.js 和 KISSY 也树一块墓碑了。



文章转载自：[极乐科技](https://zhuanlan.zhihu.com/p/32765281?app=zhihulite)