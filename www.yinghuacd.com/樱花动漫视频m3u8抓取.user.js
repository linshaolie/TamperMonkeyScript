// ==UserScript==
// @name         樱花动漫视频m3u8抓取
// @namespace    https://github.com/linshaolie
// @version      0.1
// @description  try to take over the world!
// @author       charlie.lin
// @match        http://m.yinghuacd.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function get() {
        var iframe = window.document.getElementsByTagName('iframe')[0]
        if (!iframe) {
            return;
        }
        var url = decodeURIComponent(iframe.src.split('=')[1].split('&')[0].split('$')[0]);
        if (!url) {
            return
        }
        var m3u8 = url;
        var obj = {"url":"none","password":"请直接播放","video":m3u8,"user":"charlie"};
        var curIdx = /([0-9]+\.html)/.exec(location.pathname)[0].replace('.html', '')
        var filename = curIdx + '.json';
        const blob = new Blob([JSON.stringify(obj)], { type: 'text/plain' });
        const downloadLink = document.createElement('a');
        downloadLink.href = URL.createObjectURL(blob);
        downloadLink.download = filename;
        // 点击下载链接，开始下载文件
        downloadLink.click();
        location.href = location.href.replace(curIdx + '.html', (parseInt(curIdx) + 1) + '.html')
    }


    get()
})();
