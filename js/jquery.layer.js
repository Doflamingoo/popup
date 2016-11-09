(function($){
    $.fn.layer=function(options){
        /*默认参数*/
        $.fn.layer.defaults={
            layerWrap:".layer-wrap",
            layerBtn:".layer-btn",
            layerClose:".layer-close",
            action:"fade",
            delayTime:300,
            maskHide:true,
            mask:".layer-mask"
        };
        return this.each(function() {
            /*参数转换*/
            var opts = $.extend({},$.fn.layer.defaults,options);
            var self = $(this);
            var layerWrap = $(opts.layerWrap, self);
            var layerBtn = $(opts.layerBtn,self);
            var mask = $(opts.mask,self);
            var layerClose = $(opts.layerClose,self);
            var maskHide = ( maskHide=="false"||opts.maskHide==false)?false:true;
            var action = opts.action;
            var time = parseInt(opts.delayTime);
            var wid = layerWrap.width();
            var hei = layerWrap.height();
            layerWrap.css({
                "position":"fixed",
                "marginLeft": -wid/2 + "px",
                "marginTop": -hei/2 + "px",
                "left":50+"%",
                "top":50+"%"
            });
            /*点击按钮弹出层显示*/
            layerBtn.click(function(){
                switch(action){
                    case "fade":
                        layerWrap.fadeIn(time);
                        if(maskHide){
                            mask.hide();
                        }else{
                            mask.show();
                        }
                        break;
                    case "slideDown":
                        layerWrap.slideDown(time);
                        if(maskHide){
                            mask.hide();
                        }else{
                            mask.show();
                        }
                        break;
                    case "show":
                        layerWrap.show(time);
                        if(maskHide){
                            mask.hide();
                        }else{
                            mask.show();
                        }
                        break;
                }
               /* var layerMask = "<div class='layer-mask'></div>";
                $("body").append(layerMask);*/
            });
            /*点击空白区域消失*/
            mask.click(function(){
                layerWrap.hide();
                $(this).hide();
            });
            /*点击关闭按钮事件*/
            layerClose.click(function(){
                switch(action){
                    case "fade":
                        layerWrap.fadeOut(time);
                        mask.hide();
                        break;
                    case "slideDown":
                        layerWrap.slideUp(time);
                        mask.hide();
                        break;
                    case "show":
                        layerWrap.hide(time);
                        mask.hide();
                        break;
                }
            })
            /*键盘事件按esc退出*/
            $(document).keyup(function(){
                switch(event.keyCode){
                    case 27:
                        layerWrap.hide();
                        mask.hide();
                }
            })
            var layerMask = "<div class='layer-mask'></div>";
            $("body").append(layerMask);
        });
    };
})(jQuery);