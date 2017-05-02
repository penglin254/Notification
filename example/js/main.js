/**
 * Copyright © 2016 CheYouYuan. All rights reserved.
 * Author: Lin
 * Email: 139193411@qq.com
 */

;$(function () {
    var imgObj = {
        init: function () {
            this.eventBind();
        },
        eventBind: function () {
            var that = this;
            $("div.file_img>input").change(function () {
                var reader = new FileReader();
                reader.onload = function (e) {
                    that.compress(this.result);
                };
                reader.readAsDataURL(this.files[0]);
            });
        },
        compress: function (res) {
            var img = new Image(),
                maxH = 300;

            img.onload = function () {
                var cvs = document.createElement('canvas'),
                    ctx = cvs.getContext('2d');

                if (img.height > maxH) {
                    img.width *= maxH / img.height;
                    img.height = maxH;
                }
                cvs.width = img.width;
                cvs.height = img.height;

                ctx.clearRect(0, 0, cvs.width, cvs.height);
                ctx.drawImage(img, 0, 0, img.width, img.height);
                var dataUrl = cvs.toDataURL('image/png', 1), dimg = $("<img>");
                // $(".img_wrap").attr("src", dataUrl);
                dimg.attr("src", dataUrl);
                $("div.file_img>img").remove();
                $("div.file_img").append(dimg);
                // $(".img_wrap").show();
                // 上传略
                // that.upload(dataUrl);
            };

            img.src = res;
        },

    };

    imgObj.init();

    $("span#txNotice").click(function () {
        Notify.showNotice($(".title_txt>input").val(), $(".content_txt>textarea").val(), $(".file_img>img").attr("src"));
        Notify.clickNotice();
        Notify.autoClose(3000);
    })

    $("span#qcNotice").click(function () {
        if (Notify.options != null) {
            Notify.clearNotice();
        }
    })

    $("span#qcaNotice").click(function () {
        Notify.clearAllNotice();
    })

});