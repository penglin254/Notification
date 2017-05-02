/**
 * Copyright © 2016 CheYouYuan. All rights reserved.
 * Author: Lin
 * Email: 139193411@qq.com
 */

;(function (window) {
    'use strict';

    function Notify() {
    };

    window.Notify = Notify;
    var options = {
        noticeList: [],//通知存储数组
        notification: null, //通知对象
        title: '默认标题',
        body: '默认内容',
        icon: 'img/logo.png',
        content: "通知...",
        time: 1000
    };//设置参数;


    Notify.showNotice = function (title, body, icon) {
        if (!("Notification" in window)) {
            alert("抱歉，您的浏览器不支持桌面通知");
        }
        else if (Notification.permission === "granted" || Notification.permission !== 'denied') {
            options.notification = new Notification(title ? title : options.title, {
                body: body ? body : options.body,
                icon: icon ? icon : options.icon
            });
            options.noticeList.push(options.notification);
        }
    };


    //单击通知
    Notify.clickNotice = function () {
        options.notification.onclick = function () {
            alert(options.notification.body);
        };
    };

    //清除通知
    Notify.clearNotice = function () {
        options.notification.close();
    };

    //清除所有通知
    Notify.clearAllNotice = function () {
        for (var i = 0; i < options.noticeList.length; i++) {
            options.noticeList[i].close();
        }
    };

    //自动关闭
    Notify.autoClose = function (time) {
        time == null ? setTimeout(options.notification.close.bind(options.notification), options.time) : setTimeout(options.notification.close.bind(options.notification), time);
    };

})(window);