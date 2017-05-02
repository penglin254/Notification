# 关于浏览器的桌面通知
HTML5 Web Notification用于浏览器的桌面通知提醒，浏览器最小化的时候依然可见。

## demo

## 兼容性
当前只有 Chrome 19+ Safari 6+支持，<a href="http://caniuse.com/#feat=notifications">点击查看Notification API 支持情况</a>

## 使用
使用前提：允许网站弹出通知

```
Notify.showNotice(标题，内容，图片路径) //弹出消息通知，参数不传则显示默认的标题图片和内容 
Notify.clickNotice() //单击消息通知 
Notify.autoClose(时间参数) //自动关闭消息通知，不传则默认传递1000ms 
Notify.clearNotice() //清除单条通知
Notify.clearAllNotice() //清除所有通知
```

## 关于 1.0.0
后续应该会更新移动端的显示情况

## 关于 notify.js
1.有问题请提交github issue上。<br>
2.有什么好的建议或者改进可以联系作者。

### 联系方式
wechat : 139193411<br>
qq : [139193411](http://wpa.qq.com/msgrd?v=3&uin=139193411&site=qq&menu=yes)