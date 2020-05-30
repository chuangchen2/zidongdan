// ==UserScript==
// @name         独轮车
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://www.douyu.com/*
// @grant        none
// ==/UserScript==

(function() {
     'use strict';


    let control = document.createElement('div');
    let css2 = 'background: #ffffff;overflow: hidden;z-index: 999;position: fixed;padding:5px;text-align:center;width: 110px;height: 80px;box-sizing: content-box;border: 1px solid #ff921a;border-radius: 5px;right: 10px;top: 72%;';

    init();

    function init(){
        control.id = 'control';
        control.style.cssText = css2;
        control.innerHTML = '<input type=“text” style="width: 100px" placeholder="想刷的弹幕" id="danmu"><input type="text" style="width: 100px" placeholder="间隔时间（ms）" id = danmuTime><button id="danmuLaunch" style="display: inline-block; background: #f70; color: #FFFFFF; width:50px; height: 25px; margin: 1px;">出动</button>'
        document.body.appendChild(control);
        //let danmu = document.getElementById('danmu');
        let btm = document.getElementById('danmuLaunch');
        btm.onclick = function(){
            if(btm.innerText === '出动'){
                run();
            }
            else{
                stop();
            }
        }
    }


    let interval;

    function run(){
        let danmu = document.getElementById('danmu');
        let area = document.getElementsByClassName('ChatSend-txt')[0];
        let sent = document.getElementsByClassName('ChatSend-button')[0];
        document.getElementById('danmuLaunch').innerText = '中止';
        interval = setInterval(function(){
            area.value = danmu.value;
            sent.click();
        },document.getElementById('danmuTime').value);
    }

    function stop(){
        document.getElementById('danmuLaunch').innerText = '出动';
        clearInterval(interval);
    }
})();