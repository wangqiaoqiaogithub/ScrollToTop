(function(){
    var root = (typeof self == 'object' && self.self == self && self) ||
        (typeof global == 'object' && global.global == global && global) ||
        this || {};
        
    var util = {
        extend: function(target){
            for(var i =1,len = arguments.length; i < len; i++){
                for(var prop in arguments[i]){
                    if(arguments[i].hasOwnProperty(prop)){
                        target[prop] = arguments[i][prop]
                    }
                }
            }
            return target
        },
        addEvent:function(element,type,fn){
            if(document.addEventListener){
                element.addEventListener(type,fn,false)
                return fn;
            }else if(document.attchEvent){
                var bound = function(){
                    return fn.apply(element, arguments);
                }
                element.attachEvent('on'+ type, arguments)
                return bound
            }
        },
        removeEvent:function(element,type,fn){
            if(document.removeEventListener){
                element.removeEventListener(type,fn,false)
                return fn;
            }else if(document.detachEvent){
                var bound = function(){
                    return fn.apply(element, arguments);
                }
                element.detachEvent('on'+ type, arguments)
                return bound
            }
        },
        addAttr:function(element,juagenature,nature,elementname){
            let naturename = "data-class";
            //用juagenature形参来制定naturename变量
            juagenature = juagenature === true ? element.setAttribute(naturename,elementname) === element.setAttribute("class",elementname) : naturename="";
            return element.setAttribute(naturename,elementname)
        }
    }
    function scrollTop(topevent,speed) {
        this.topevent = topevent;
        this.speed = speed;
    }
    ScrollToTop.defaultOptins = {
        speed: this.speed,
        scrolldistance: this.scrolldistance,
        juagenature: this.juagenature,
        beforeclassname: this.beforeclassname,
        afterclassname: this.afterclassname
    }
    function ScrollToTop(element,options){
        scrollTop.call(arguments);
        this.element = typeof element === "string" ? document.querySelector(element) : element;
        this.options = util.extend({}, this.constructor.defaultOptins, options);
        this.init();//创建共有方法来提供默认选项
    }
    var proto = ScrollToTop.prototype = new scrollTop();
    proto.constructor = ScrollToTop;
    proto.textJournal = "欢迎使用scrollToTop.js";    
    proto.init = function(){
        this.bindscrollevent();
        console.log(""+"%c"+proto.textJournal+"","background:#398bfc;color:#fff;font-size:19px;")
    }
    proto.bindscrollevent = function(e){
        e = e || window.event;
        let top = this.element;//获取向上拉的选择器
        let speed = this.options.speed;
        let sdistance = this.options.scrolldistance;
        let jnature = this.options.juagenature;
        let bclassname = this.options.beforeclassname;
        let aclassname = this.options.afterclassname;
        console.log(jnature)
        var juagescroll = function(){
            let otop = document.documentElement.scrollTop || document.body.scrollTop;
            console.log(sdistance)
            if(otop >= sdistance){
                util.addAttr(top,jnature,'data-class',bclassname)
            }else{
                util.addAttr(top,jnature,'data-class',aclassname)
            }
        }
        if(jnature === false){
            //如果该属性为false则删除滚动事件
            util.removeEvent(window,scroll,juagescroll)
        }else {
            util.addEvent(window,"scroll",juagescroll)
        }
        util.addEvent(top,"click",function(){
            var timer = setInterval(function(){
                let otop = document.documentElement.scrollTop || document.body.scrollTop;
                let isspeed = Math.floor(-otop/6);
                document.documentElement.scrollTop = document.body.scrollTop = otop+isspeed;
                if(otop == 0){
                    clearInterval(timer);
                }
            },speed)//speed表示为滑动的速度(定时器的帧数)
            console.log(speed)
        })
    }
    if (typeof exports != 'undefined' && !exports.nodeType) {
        if (typeof module != 'undefined' && !module.nodeType && module.exports) {
            exports = module.exports = ScrollToTop;
        }
        exports.ScrollToTop = ScrollToTop;
    } else {
        root.ScrollToTop = ScrollToTop;
    }
}())
