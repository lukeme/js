// ==UserScript==
// @name         自动翻页插件
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  通过ctrl+shift+up/down的方式上下翻页，支持url中最后数字累加/递减方式的翻页，如123.html变为124.html,book/123变为book/124
// @author       You
// @match        *://*/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=greasyfork.org
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.onkeydown = function (event) {
        let keyCode = event.keyCode == 40 ? 'down': (event.keyCode == 38 ? 'up' : '');
        console.log(keyCode);
        if(event.ctrlKey && event.shiftKey && keyCode){
            console.log('下一页');
            let x = location.href.match(/[^\d](\d+)(\.html|$)/)
            if(x[1]){
                let pno = Number(x[1])+ (keyCode=='down'? 1 : -1);
                let t = location.href;
                t = t.replace(/([^\d])(\d+)(\.html|$)/, "$1"+pno+"$3");
                console.log("new page no:"+ pno)
                console.log("new page url:"+ t)
                location.href = t;

            }
        }
    };
    let url = location.href;
    console.log(location.href);
})();
