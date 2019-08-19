import {ScrollToTop} from './js/scrollToTop.js';
let scrollTotop = require('./js/scrollToTop.js');
require('./css/common.css');
console.log(scrollTotop+1);
var stp = new ScrollToTop('#stcontainer',{
    speed: 10,//点击时滚动条向上回去时过渡的速度
    scrolldistance: 100,//垂直滚动条的距离
    juagenature: false,//值为true的时候自定义属性开头带有data-值该值为false为(不能使用食用添加类名或自定义属性选项)
    beforenaturename: "class",//滚动前的自定义属性
    beforeclassname: "bclass",//滚动前的自定义类名(以class属性的方式解析)
    afternaturename: "class",//滚动后的自定义属性
    afterclassname: "aclass"//滚动前的自定义类名(以class属性的方式解析)
})
console.log(stp)