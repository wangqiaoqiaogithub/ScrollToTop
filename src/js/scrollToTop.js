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
        addAttr:function(element,juagenature,nature,elementname){
            let naturename = "data-"+nature;
            //用juagenature形参来制定naturename变量
            juagenature = juagenature === true ? element.setAttribute(naturename,elementname) === element.setAttribute("class",elementname) : naturename=nature;
            // naturename === "class";
            return element.setAttribute(naturename,elementname)
        },
        removeAttr:function(element,juagenature,nature,elementname){
            let naturename = "data-"+nature;
            //用juagenature形参来制定naturename变量 
            juagenature = juagenature === true ?  element.removeAttribute(naturename,elementname) === element.removeAttribute("class",elementname) : naturename=nature;
            //naturename === "class";
            return element.removeAttribute(naturename,elementname)
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
        beforenaturename: this.beforenaturename,
        beforclassname: this.beforeclassname,
        afternaturename: this.afternaturename,
        afterclassname: this.afterclassname
    }
    function ScrollToTop(element,options){
        scrollTop.call(arguments);
        this.element = typeof element === "string" ? document.querySelector(element) : element;
        this.options = util.extend({}, this.constructor.defaultOptins, options);
        this.speed = this.options.speed;
        this.scrolldistance = this.options.scrolldistance;
        this.juagenature = this.options.juagenature;
        this.beforenaturename = this.options.beforenaturename;
        this.beforeclassname = this.options.beforeclassname;
        this.afternaturename = this.options.afternaturename;
        this.afterclassname = this.options.afterclassname;
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
        let speed = this.speed;
        let sdistance = this.scrolldistance;
        let jnature = this.juagenature;
        let bnaturename = this.beforenaturename;
        let bclassname = this.beforeclassname;
        let anaturename = this.afternaturename;
        let aclassname = this.afterclassname;
        console.log(jnature)
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
        util.addEvent(window,"scroll",function(){
            let otop = document.documentElement.scrollTop || document.body.scrollTop;
            console.log(sdistance)
            if(otop >= sdistance){
                util.removeAttr(top,jnature,anaturename,aclassname)
                util.addAttr(top,jnature,bnaturename,bclassname)
            }else{
                util.removeAttr(top,jnature,bnaturename,bclassname)
                util.addAttr(top,jnature,anaturename,aclassname)
            }
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