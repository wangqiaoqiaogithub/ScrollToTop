import {ScrollToTop} from './js/scrollToTop.js';
let scrollTotop = require('./js/scrollToTop.js');
require('./css/common.css');
console.log(scrollTotop+1);
var stp = new ScrollToTop('#scrolltop',{
    speed: 10//点击时滚动条向上回去时过渡的速度
})
console.log(stp)