---
layout:     post
title:      "使用puppeteer爬取招聘信息数据"
subtitle:   ""
date:       2019-07-15 15:00:00
author:     "huan"
header-img: "img/ArticleBg/post-bg-js-version.jpg"
catalog: true
tags:
    - JavaScript
---

先放成品： [点这里](https://lichenghuan.top/jsonData/chart.html)

## 前言

**你可以在浏览器中手动执行的绝大多数操作都可以使用 Puppeteer 来完成！** 下面是一些示例：

- 生成页面 PDF。
- **抓取 SPA（单页应用）并生成预渲染内容（即“SSR”（服务器端渲染））。**
- 自动提交表单，进行 UI 测试，键盘输入等。
- 创建一个时时更新的自动化测试环境。 使用最新的 JavaScript 和浏览器功能直接在最新版本的Chrome中执行测试。
- 捕获网站的 [timeline trace](https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/reference)，用来帮助分析性能问题。
- 测试浏览器扩展。



## 开始使用

### 安装

在项目中使用 Puppeteer：

```bash
npm i puppeteer
# or "yarn add puppeteer"
```

Note: 当你安装 Puppeteer 时，它会下载最新版本的Chromium（~170MB Mac，~282MB Linux，~280MB Win），以保证可以使用 API。 如果想要跳过下载，请阅读[环境变量](https://github.com/GoogleChrome/puppeteer/blob/v1.10.0/docs/api.md#environment-variables)。

### puppeteer-core

自 1.7.0 版本以来，我们都会发布一个 [`puppeteer-core`](https://www.npmjs.com/package/puppeteer-core) 包，这个包默认不会下载 Chromium。

```bash
npm i puppeteer-core
# or "yarn add puppeteer-core"
```

`puppeteer-core` 是一个的轻量级的 Puppeteer 版本，用于启动现有浏览器安装或连接到远程安装。

具体见 [puppeteer vs puppeteer-core](https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#puppeteer-vs-puppeteer-core).

更多玩法： **[Puppeteer中文文档](https://zhaoqize.github.io/puppeteer-api-zh_CN/)**



### 接下来到正题  使用Puppeteer爬取页面数据大致可分四步：

1. 启动一个浏览器
2. 开启一个新页面
3. 前往那个页面
4. 页面进行操作(类似DOM操作)

创建一个js文件，命名为boss.js，添加以下代码

```javascript
const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path"); //系统路径模块

// 等待1000毫秒
const sleep = time =>
    new Promise(resolve => {
        setTimeout(resolve, time);
    });

const URL = `https://www.zhipin.com/job_detail/`;

const Position = [
    { name: 'web', title: 'web前端' },
    { name: 'java', title: 'JAVA' },
    { name: 'php', title: 'PHP' },
    { name: 'python', title: 'Python' },
    { name: 'node', title: 'Node' },
    { name: 'cs', title: '测试' },
    { name: 'golang', title: 'Golang' },
    { name: 'sf', title: '算法' },
    { name: 'cp', title: '产品' },
    { name: 'ui', title: 'UI设计' },
    { name: 'android', title: '安卓' },
    { name: 'ios', title: 'IOS' },
    { name: 'ImpleEngineer', title: '实施工程师' },
    { name: 'maintenance', title: '运维工程师' }
];

(async () => {
    console.log("Start");
    // 1.启动一个浏览器--------------------------------------------------------
    const brower = await puppeteer.launch({
        args: ["--no-sandbox"],
        dumpio: false,
        headless: false, //false 打开浏览器，默认true
        devtools: true //打开浏览器开发工具
    });

    // 2.开启一个新页面--------------------------------------------------------
    const page = await brower.newPage();

    //设置窗口
    page.setViewport({
        width: 1024,
        height: 820,
        isMobile: false
    });

    // 3.前往那个页面--------------------------------------------------------
    await page.goto(URL, {
        waitUntil: "networkidle2" // 网络空闲说明已加载完毕
    });

    //4.页面进行操作(类似DOM操作)--------------------------------------------------------

    // await page.click('.search-form-con>.city-sel');
    // await page.waitFor(1000);
    // await page.hover('.city-box>.dorpdown-province>[ka=sel-province-27]');
    // await page.waitFor(1000);
    // await page.click('.dorpdown-city>.show>[ka=hot-city-101280600]'); //深圳

    for (let idx = 0; idx < Position.length; idx++) {

        // //清空输入框的值
        await page.$eval(".ipt-search", input => input.value = '');
        await page.type(".ipt-search", Position[idx].title, { delay: 100 });// 输入变慢，像一个用户
        await page.click(".btn-search");
        await page.waitFor(600); //等待600毫秒

        var arr = [];
        var x = 1;
        for (; ;) {
            result = await page.evaluate(() => {
                // 注意 在这里面做的操作都是在无头浏览器中执行的，例如以下的  console.log('running') ，它会在浏览器控制台中打印
                console.log('running...');
                var $ = window.$;
                var jsonArr = [];
                var flag = false;
                $(".job-list ul li").each((i, item) => {
                    var salaryRed = $(item).find("span.red").text();
                    if (!/天/ig.test(salaryRed)) {   //去掉包含 ‘天’ 的实习生岗位
                        var companyInfo = $(item).find(".company-text>p").html();
                        companyInfo = companyInfo.split('<em class="vline"></em>');
                        var primaryInfo = $(item).find(".info-primary>p").html();
                        primaryInfo = primaryInfo.split('<em class="vline"></em>');
                        jsonArr.push({
                            index: i,
                            position: $(item).find(".job-title").text(),
                            salary: salaryRed,
                            company: $(item).find(".company-text .name a").text(),
                            primaryInfo: primaryInfo,
                            companyInfo: companyInfo
                        });
                    }
                });
                if ($(".job-list .page .next.disabled").length > 0) { flag = true; }
                return { jsonArr: jsonArr, flag: flag };
            });
            if (result.flag) break;
            await page.click(".job-list .page .next");
            await page.waitFor(1000);
            arr = arr.concat(result.jsonArr);
            x++;
        }

        console.log(`共${x}页数据`);
        //指定创建目录及文件名称，__dirname为执行当前js文件的目录
        let file = path.join(__dirname, `./jsonData/${Position[idx].name}.json`);
        //写入文件
        fs.writeFile(file, JSON.stringify(arr), function (err) {
            if (err) { return console.log(err); }
            console.log("文件创建成功，地址：" + file);
        });
    }

    // 5.关闭浏览器--------------------------------------------------------
    await brower.close();
    console.log('End');
})();
```

执行命令： `node boss.js`