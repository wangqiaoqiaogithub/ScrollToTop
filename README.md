## ScrollToTop.js
>这是一个点击向上滚动的原生插件
## 介绍
* 是一个原生无任何依赖项具有封装性的模块化插件
* 效果演示：[ScrollToTop DEMO](https://wangqiaoqiaogithub.github.io/ScrollToTop/dist/index.html)
## 下载
```
git clone git@github.com:wangqiaoqiaogithub/ScrollToTop.git
```
## 使用
 ```html
<script src="path/scrollToTop.js"></script>
```
或者
```js
var audio = new ScrollToTop('#myAudio');
```
## 示例
HTML文件：
```html
<div id="myscrollTop"></div>
```
JavaScript文件：
```js
var stp = new ScrollToTop('#stcontainer'//向上滚动的id属性容器,{
    speed: 10,//点击时滚动条向上回去时过渡的速度
    scrolldistance: 100,//垂直滚动条的距离
    juagenature: true,//值为true的时候自定义属性为data-class值该值为false为(data-class属性会自动解析为)
    beforeclassname: "bclass",//滚动前的自定义类名(以class属性的方式解析)
    afterclassname: "aclass"//滚动前的自定义类名(以class属性的方式解析)
})
```
## 环境
安装node依赖包：
```
npm install
```
webpack开发环境启动：
```js
npm run dev
```
webpack打包命令：
```js
npm run build
```
