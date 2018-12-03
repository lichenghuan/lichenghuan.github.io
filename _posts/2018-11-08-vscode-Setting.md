---
layout:     post
title:      "vscode 配置"
subtitle:   " \"自定义的配置，看个人习惯\""
date:       2018-11-08 12:00:00
author:     "huan"
header-img: "img/ArticleBg/16988.jpg"
catalog: true
tags:
    - vscode
---

#### 用户代码片段：

作用：自定义的代码快捷片段。

文件->首选项-> '用户代码片段'    会出现一个输入框，可以编辑html、js、css等片段。

![](https://i.loli.net/2018/12/03/5c04a5623bfc8.gif)

放上我常用的几个代码快捷片段，放到html、js、css其中之一的json文件好像都可以的。

```json
{
    /*
	// Place your snippets for HTML here. Each snippet is defined under a snippet name and has a prefix, body and 
	// description. The prefix is what is used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
	// $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. Placeholders with the 
	// same ids are connected.
	// Example:
	"Print to console": {
		"prefix": "log",
		"body": [
			"console.log('$1');",
			"$2"
		],
		"description": "Log output to console"
	}
*/
    "a标签": {
        "prefix": "aaa",
        "body": [
            "<a href=\"javascript:;\">$1</a>"
        ],
        "description": "我自己定义的a标签"
    },
    "理想视口标签": {
        "prefix": "meta:vp",
        "body": [
            "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0,maximum-scale=1,minimum-scale=1,user-scalable=no\">"
        ],
        "description": "理想视口的标准写法"
    },
    "自定义的html5页面代码": {
        "prefix": "html:5",
        "body": [
            " <!DOCTYPE html> <html lang=\"en\"> <head> <meta charset=\"UTF-8\"> <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0,maximum-scale=1,minimum-scale=1,user-scalable=no\"> <title>$TM_FILENAME</title> $1 </head> <body> $2 </body> </html>"
        ],
        "description": "自定义的html5页面代码"
    },
    "divHTML": {
        "prefix": "mydiv",
        "body": [
            "<!DOCTYPE html> <html lang=\"en\"><head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0,maximum-scale=1,minimum-scale=1,user-scalable=no\"> <title>Document</title> <style> .mydiv { position:absolute; top:50%; left:50%; transform: translate(-50%, -50%);  width: 200px; height: 200px; background-color: skyblue; } </style> </head> <body> <div class='mydiv'></div> </body> </html>"
        ],
        "description": "多了一个div"
    },
    "log数据": {
        "prefix": "cl",
        "body": [
            "console.log($1)"
        ],
        "description": "输出"
    },
    "log json数据": {
        "prefix": "ct",
        "body": [
            "console.table($1)"
        ],
        "description": "输出表格形式数据"
    },
}
```



#### 键盘快捷方式：

作用：自定义键盘快捷方式。

文件->首选项->   '键盘快捷方式'    

在搜索框搜索  或者 点击搜索框下面的 “高级自定义请打开和编辑keybindings.json”  中的keybindings.json 。

![](https://i.loli.net/2018/12/03/5c04c406d57e2.png)

贴上自用的keybindings.json

```json
//自定义
[{
    "key": "ctrl+b",
    "command": "extension.openInSpecifyBrowser"
},
{
    "key": "shift+alt+b",
    "command": "-extension.openInSpecifyBrowser"
},
{
    "key": "ctrl+q",
    "command": "workbench.action.toggleSidebarVisibility"
},
{
    "key": "ctrl+b",
    "command": "-workbench.action.toggleSidebarVisibility"
}]
```



#### 设置settings.json:

作用：自定义一些 自动保存、字体大小、tab的空格数等等。

文件->首选项->  '设置'   

![](https://i.loli.net/2018/12/03/5c04a4593c06b.png)

打开settings.json:      文件->首选项->  '设置' ->输入框右边下面的省略号按钮-> 打开settings.json

![](https://i.loli.net/2018/12/03/5c04ca3362607.gif)

贴上修改过的settings.json

```json
{
    "workbench.iconTheme": "vscode-great-icons",
    "editor.renderControlCharacters": true,
    "window.zoomLevel": 0,
    "workbench.sideBar.location": "left",
    "editor.minimap.enabled": false,
    "open-in-browser.default": "chrome",
    "workbench.activityBar.visible": true,
    "editor.snippetSuggestions": "top",
    "editor.tabCompletion": true,
    "workbench.startupEditor": "newUntitledFile",
    "emmet.triggerExpansionOnTab": true,
    "files.associations": {
        "*.tpl": "html"
    },
    "fileheader.Author": "焕",
    "fileheader.LastModifiedBy": "焕",
    "vetur.format.defaultFormatter.js": "vscode-typescript",
    "vetur.format.defaultFormatter.css": "prettier",
    "vetur.format.defaultFormatter.html": "js-beautify-html",
}
```



#### 常用插件：

![](https://i.loli.net/2018/12/03/5c04c732416ae.png)

可在settings中**修改**已安装插件的功能

![](https://i.loli.net/2018/12/03/5c04cbdda2c34.png)



#### vscode设置同步到GitHub（包括插件等自定义配置）

其实每次配置编辑器也是挺烦且耗时的事情，所以在这里推荐一款vscode插件 -- Settings Sync。

[官网传送门](https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync)

![](https://i.loli.net/2018/12/03/5c04ccc5d0e23.png)

**步骤如下：**

1. 下载Settings Sync	

2. 重启后按快捷键 alt+shift+u (假设你第一次用)
   它会弹出一个窗口对应的是github上面的创建个人gist的页面,如果未登录请先登录github。然后创建一个token，步骤如下图，记住最后生成的token。【注：这个token忘记了没关系，可以在下面步骤的创建页面，点击Regenerate token按钮（创建后进去才有这个按钮）重新生成token。】
   ![](https://i.loli.net/2018/12/03/5c04d24c5145a.gif)

3. sync选项

   Shift + Ctrl + P 或者 F1 会打开一个输入框，键入 sync，如果你上传或者下载sync的时候出错，可以选择重置选项。

   ![](https://i.loli.net/2018/12/03/5c04d5172191a.png)

4. 我们选择 ‘上传设置‘ 选项，它会自动在浏览器打开你的github页面，说实话，刚才生成的token我没记，更新一下token，如下图![](https://i.loli.net/2018/12/03/5c04d6977fc9a.gif)拿到token，返回编辑器会有一个输入框，粘贴即可，回车！![](https://i.loli.net/2018/12/03/5c04d7a8c8459.png)很显然，提示返回成功了。失败的话重置下，再按照上面上传步骤试下。上图的GitHub Gist**很重要！很重要！很重要！** GitHub Token记住更好，下载配置的时候只需要 GitHub Token和GitHub Gist即可同步配置。

5. 以上就是**上传配置**，接下来就是同步到另一台设备的vscode**下载操作**。
   打开第3步的**sync选项**，选择**下载设置**，会出现一个输入窗，让你输入GitHub token（不记得就按照第4刷新下token），回车；又弹出另一个输入框，输入Gist id（就是GitHub Gist），回车就OK了，右下角会弹提示。

6. 在这里记一下自己的GitHub Gist（Gist id）   `954d9bffccadba629b8a7dbda8f2387c`  上面的token我更新过了，你们拿我的Gist id也没用。



