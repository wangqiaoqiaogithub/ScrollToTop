import {ScrollToTop} from './js/scrollToTop.js';
let scrollTotop = require('./js/scrollToTop.js');
require('./css/common.css');
console.log(scrollTotop+1);
var stp = new ScrollToTop('#stcontainer',{
    speed: 10,//点击时滚动条向上回去时过渡的速度
    scrolldistance: 100,//垂直滚动条的距离
    juagenature: true,
    beforenaturename: "beforename",//滚动前的自定义属性
    beforeclassname: "bclass",//滚动前的自定义类名(以class属性的方式解析)
    afternaturename: "aftername",//滚动后的自定义属性
    afterclassname: "aclass"//滚动前的自定义类名(以class属性的方式解析)
})
console.log(stp)