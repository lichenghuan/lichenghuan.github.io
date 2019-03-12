---
layout:     post
title:      "图片上传前压缩"
subtitle:   "\"顺便提下图片裁剪\""
date:       2019-03-07 12:00:00
author:     "huan"
header-img: "img/ArticleBg/post-bg-js-version.jpg"
catalog: true
tags:
    - JavaScript

---



> 前言：在做商城，有时候会涉及上传身份证照片的业务，目前新手机拍摄的照片普遍大于5M，所以需要前端对图片进行一些处理



<div style='width:100%;height:800px'>
     <iframe src="https://codepen.io/lichenghuan/full/wOgLZP" frameborder="0" align="left"  height="800" scrolling="yes" style='width:100%'>
            <p>你的浏览器不支持iframe标签</p>
        </iframe>
</div>



### 首先提一下细节问题：

##### 1.如何让 input 标签只允许上传图片格式    

​    **第一种办法：使用accept="image/*"**

```html
<input type="file" name="file" class="element" accept="image/*">   
```

​    但是！ 这段代码在Chrome和Safari等Webkit浏览器下却出现了响应滞慢的问题，可能要等 6~10s 才能弹出文件选择对话框

​    解决办法如下：

```html
<input type="file" accept="image/gif,image/jpeg,image/jpg,image/png">
```

​    **第二种办法：js获取file的时候判断**

```javascript
if (document.querySelector('#file').files[0].type.indexOf("image") == -1) {
       //判断上传的文件的类型type中是否含有image字符串
}
```

##### 2.第二次上传同一张图片的时候是不会触发 change 事件

解决办法：清空input的value值 

```javascript
document.querySelector('#file').value='';
```



### 3.请求传给后台的问题

1.传给后台用 base64 或者 blob 都行，base64和blob可以互转（但是base64和blob都需要进行压缩，不然请求的时候会因为请求源太大报错413，用post请求） 

2.使用`ajax` 传blob文件给后台的时候 需要使用 **表单对象**， base64 直接当字符串传就可以了 ，ajax 传表单对象的时候 异步对象需要添加两个参数    `contentType: false`  `processData: false` **不是传表单对象的时候需要去掉这两个属性** 。

```javascript
var formData = new FormData();
formData.append('imageFile', Blob, Date.now() + '.jpg');  
//'imageFile'相当于对象的key，blob相当于value，最后面以时间戳命名并改为jpg格式
formData.append('params1', '123');  //其他参数
formData.append('params2', '456');  //其他参数

$.ajax({
    type: "POST",
    url: 'XXXXXX',
    data: formData,    		//表单数据
    contentType: false,     //传表单对象的时候,需要添加该属性,否则去掉
    processData: false,     //传表单对象的时候,需要添加该属性,否则去掉
    dataType: "json",
    success: function (data) {
        console.log(data)
    }
});
```



### 4.裁剪功能

裁剪的话使用cropper.js   它里面有方法输出 base64 或 blob 

vue中使用 vue-cropper [github地址](http://xyxiao.cn/vue-cropper/) 	  [裁剪例子](http://xyxiao.cn/vue-cropper/example/)

 

### 下面直接上图片压缩功能的代码

(具体请看注释)

```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title></title>
    <meta name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
    <style type="text/css">
        html,
        body {
            height: 100%;
            background: #1e1f26;
            color: #fff;
        }

        * {
            margin: 0;
            padding: 0;
        }


        .transCenter {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }

        #preview {
            width: 300px;
            height: 300px;
            background: rgb(189, 188, 188);
            background-repeat: no-repeat;
            background-size: 100% 100%;
            overflow: hidden;
        }

        .fileBox {
            position: absolute;
            right: 10px;
            bottom: 10px;
            width: 100px;
            height: 30px;
            border: 1px solid rgb(61, 4, 56);
            background: #a808bc;
            border-radius: 6px;
            font-size: 14px;
            color: #fff;
            text-align: center;
            line-height: 30px;
            user-select: none;
            cursor: pointer;
        }

        #file {
            width: 100%;
            height: 100%;
            opacity: 0;
            position: absolute;
            left: 0;
            top: 0;
            cursor: pointer;
            z-index: 888;
        }

        .tips {
            font-size: 16px;
            color: #a808bc;
        }

        .img {
            width: 500px;
        }
    </style>
</head>

<body>
    <div>
        <div>前者为原图，后者为压缩过后的图片</div>
        <div class="p1"></div>
        <div class="p2"></div>
    </div>
    <div class="fileBox">
        <span>点击上传图片</span>
        <input type="file" accept="image/*" id="file" value="" />
    </div>
    <div class="BigBox">
        <div>
            <img src="" alt="" class="img img1">
            <!-- 原图 -->
            <img src="" alt="" class="img img2">
            <!-- 压缩后的图 -->
        </div>
    </div>
</body>

</html>

<script type="text/javascript">

    var eleFile = document.querySelector('#file');      //图片上传按钮
    var p1 = document.querySelector('.p1');
    var p2 = document.querySelector('.p2');
    var img1 = document.querySelector('.img1');
    var img2 = document.querySelector('.img2');

    /**
     * @description: 1.拿到base64字符串
     * @return: 
     */
    eleFile.addEventListener('change', function () {
        var file = this.files[0];

        // 确认选择的文件是图片                
        if (file.type.indexOf("image") == 0) {
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function (e) {
                // 图片base64化
                var newUrl = this.result;
                p1.innerHTML = '原图约' + getImgSize(newUrl) + 'KB';
                img1.src = newUrl;
                dealImage(newUrl, 0.1, finaly)  //压缩
                eleFile.value = '';  //重置，file 可以上传同一张进行压缩或裁剪
            };
        }
    });


    /**
     * @description: 2.base64压缩方法
     * @param {base64}  base64字符串
     * @param {quality}  压缩系数 在 0-1之间
     * @param {callback}  回调函数
     * @return: 
     */
    function dealImage(base64, quality, callback) {
        var newImage = new Image();
        newImage.src = base64;
        newImage.setAttribute("crossOrigin", 'Anonymous');	//url为外域时需要
        var imgWidth, imgHeight;
        newImage.onload = function () {
            imgWidth = this.width;
            imgHeight = this.height;
            var canvas = document.createElement("canvas");
            var ctx = canvas.getContext("2d");

            //质量压缩，非宽高压缩，如果要压缩宽高，可以修改这里的值
            canvas.width = imgWidth;
            canvas.height = imgHeight;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(this, 0, 0, canvas.width, canvas.height);

            var base64 = canvas.toDataURL("image/jpeg", quality);
            //canvas.toDataURL 压缩语句；
            //第一个参数 默认为 image/png；在指定图片格式为 image/jpeg 或 image/webp的情况下，可以从 0 到 1 的区间内选择图片的质量。如果超出取值范围，将会使用默认值 0.92。其他参数会被忽略。

            // 如果压缩后的图片质量还是很大，可以再压缩一次或几次，又或者quality初始值根据情况自定
            // if (base64.length / 1024 > 300) {
            //     quality = 0.2;
            //     base64 = canvas.toDataURL("image/jpeg", quality);
            // }
            callback(base64);//必须通过回调函数返回，否则无法及时拿到该值
        }
    }

    /**
     * @description: 3.拿到最终压缩好的base64
     * @param {base64Str}  拿到压缩后的base64字符串
     * @return: 
     */
    function finaly(base64Str) {
        p2.innerHTML = '压缩后约' + getImgSize(base64Str) + 'KB';
        img2.src = base64Str;  //这个是压缩过的base64，可以传给后台，如果后台不想要base64，可以转成 二进制文件 即blob

        // 1.传表单
        var Blob = base64ToBlob(base64Str);  //转换成blob
        // 这个不能直接传给后台，需要把Blob对象封装成FormData对象，就像表单上传文件一样去处理。
        var formData = new FormData();
        formData.append('imageFile', Blob, Date.now() + '.jpg');  //'imageFile'相当于对象的key，blob相当于value，最后面以时间戳命名并改为jpg格式
        formData.append('params1', '123');  //其他参数
        formData.append('params2', '456');  //其他参数
        ////我这里没有引入jq！自己引入了
        // $.ajax({
        //     type: "POST",
        //     url: 'XXXXXX',
        //     data: formData,     //传表单数据
        //     contentType: false,     //传表单对象的时候,需要添加该属性,否则去掉
        //     processData: false,     //传表单对象的时候,需要添加该属性,否则去掉
        //     dataType: "json",
        //     success: function (data) {
        //         console.log(data)
        //     }
        // });


        // 2.传base64，当普通字符串传就ok
        var imgData = {
            'imageFile': base64Str,
            'params1': '123',
            'params2': '456'
        }
        ////我这里没有引入jq！自己引入了
        // $.ajax({
        //     type: "POST",
        //     url: 'XXXXXX',
        //     data: imgData,          //传对象
        //     dataType: "json",
        //     success: function (data) {
        //         console.log(data)
        //     }
        // });
    }


    /**
     * @description: 获取base64图片大小，返回KB数字
     * @param {base64url}  base64字符串
     * @return: base64大小 单位为KB
     */
    function getImgSize(base64url) {
        // 由字节转换为KB
        var strLength = base64url.length;
        var fileLength = parseInt(strLength - (strLength / 8) * 2);
        var size = (fileLength / 1024).toFixed(2);
        return parseInt(size);
    }


    /**
     * @description: base64 转 blob
     * @param {base64Str}  base64字符串
     * @return: blob二进制文件
     */
    function base64ToBlob(base64Str) {
        var bytes = window.atob(base64Str.split(',')[1]);
        var array = [];
        for (var i = 0; i < bytes.length; i++) {
            array.push(bytes.charCodeAt(i));
        }
        var blob = new Blob([new Uint8Array(array)], { type: 'image/jpeg' });
        return blob;
    }

</script>
```

