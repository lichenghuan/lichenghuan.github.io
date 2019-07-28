---
layout:     post
title:      "观察者模式（发布/订阅者模式）"
subtitle:   " \"EventEmitter\""
date:       2019-07-28 15:00:00
author:     "huan"
header-img: "img/post-bg-2015.jpg"
catalog: true
tags:
    - JavaScript
---


**node.js 的 EventEmitter事件通信 即 “观察者模式”。简单来说，观察者模式最主要就是解决类或对象之间的耦合，解耦两个依赖的对象，使其依赖于观察者的消息机制。虽然不清楚彼此的细节，但不影响它们之间的通信**。 



**理解**

- 如果要说web前端里面只有一种设计模式需要学习，那应该就是发布订阅者模式了。
- 简单理解就是，大家用过onClick函数绑定点击事件吧，当你写好绑定点击事件的函数时，这就叫注册或者订阅了点击事件。
- 当你真的点击你绑定的比如button或者div时，这时叫发布或者触发事件，这就是这个设计模式的运用。
- 它的作用比如说redux、vuex是为了解决模块之间通信的，实际上解决的是主体对象和观察者之间的耦合。

 

**说说 EventEmitter 和 jQuery 的自定义事件：**

- jQuery 也有自己的 EventEmitter： on、off、trigger 等  
  例如：` $('#div').on('click', function () { }) `
  DOM绑定事件几乎就是观察者模式最好的使用场景	
- 也有别人实现的常用的 EventEmitter  (node.js常用)模块等



自己实现简易事件的订阅/发布模式 

```javascript
const event = {
    eventList: [],  // 存储所有事件的监听器
    // 事件订阅
    on: function (key, callback) {
        if (typeof (callback) !== 'function') {
            throw new Error('请添加回调函数');
        }
        if (!this.eventList[key]) {
            this.eventList[key] = [];
        }
        this.eventList[key].push(callback);
    },
    // 派发事件，通知订阅者
    emit: function (key, ...args) {
        if (!this.eventList[key]) {
            throw new Error('该事件未订阅');
        }
        this.eventList[key].forEach(cb => {
            cb.apply(this, args)
        });
    }
    //
}
event.on('click', function (params) { console.log(params) })
event.emit('click', [6, 6, 6, 6]);
//Emitter事件分发一般包括on、off、emit、once方法；
```





牛客网题目：

[编写一个Emitter事件分发类，有on、off、trigger、once方法。](https://www.nowcoder.com/questionTerminal/80c725bb5e6a4746aa566fdf9a07069e?orderByHotValue=1&page=1&onlyReference=false) （里面有答案）
亦可参考以下代码

```javascript
var EventEmitter = function () {
    this.events = {};
    //保存事务，存储结构为{'eventName1':[{listener:function触发的函数, time:触发的次数}], 'eventName2':[],}  
};
/*获取所有的事务*/
EventEmitter.prototype.getEvents = function () {
    return this.events || (this.events = {});
}
/*获取某个实践的所有触发函数*/
EventEmitter.prototype.getListeners = function (evt) {
    var events = this.getEvents();
    return events[evt] || (events[evt] = []);
};
/** 
    注册实践触发函数 
    evet:事件名称 
    listener:事件监听函数 
    time:可选，选择可以触发的次数，-1表示无数次，默认为-1 
**/
EventEmitter.prototype.on = function (evt, listener, time) {
    time = typeof (time) == 'number' ? time : -1;
    time = time >= -1 ? time : -1;
    var listeners = this.getListeners(evt);
    var listenerWrapper = {
        listener: listener,
        time: time,
    };
    listeners.push(listenerWrapper);
    return this;
};
EventEmitter.prototype.once = function (evt, listener) {
    return this.on(evt, listener, 0);
};
/*移除事件的所有监听函数*/
EventEmitter.prototype.off = function (evt) {
    var events = this.getEvents();
    events[evt] = [];
};
/*触发事件 */
EventEmitter.prototype.trigger = function (evt, ...args) {
    var listeners = this.getListeners(evt);
    for (var i = 0; i < listeners.length; i++) {
        var listener = listeners[i];
        if (listener.time != -1) {
            listener.time--;
        }
        if (listener.time == 0) {
            this.removeListener(evt, listener.listener); //可以同步或异步执行  
        }
        listener.listener.apply(this, args || []);
    }
};
//使用-----------------------------------------------
var ev = new EventEmitter();
ev.on('move', function (param) { console.log(param) })
setTimeout(() => {
    ev.trigger('move', 666)
}, 2000);
```



[其他部分设计模式](https://juejin.im/post/5d1af3fce51d45773f2e8f9d?tdsourcetag=s_pctim_aiomsg#heading-17)