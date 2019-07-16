## ScrollToTop.js
>这是一个点击向上滚动的原生插件
## 介绍
* 是一个原生无任何依赖项具有封装性的模块化插件
* 效果演示：
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
var videoscreen = new ScrollToTop('#myscrollTop',{
  speed: 10;//决定了向上滚动是的过渡速度
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
