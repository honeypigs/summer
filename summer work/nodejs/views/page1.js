	(function($) {
		var defaults = {
				'container':'#container',//容器
				'sections':'.section',//子容器
				'easing':'ease',//滑动方式ease-out,ease-in,liner
				'duration':1000,//运动时间
				'pagination':true,//分页显示
				'loop':false,//循环
				'keyboard':true,//键盘控制
				'direction':'vertical',//滑动方向，vertical,horizontal
				'onpageSwitch':function(pagenum){}
			};
			var win = $(window),
			container,sections;

			var opts = {},
			canScroll = true;
			
			var iIndex = 0;
			
			var arrElement = [];
			
			var SP = $.fn.switchPage = function(options){
				opts = $.extend({},defaults,options||{});

				container = $(opts.container);
				sections = container.find(opts.sections);

				sections.each(function(){
					arrElement.push($(this));
				});
				return this.each(function(){
					if(opts.direction == "horizontal"){
						initLayout();
					}

					if(opts.pagination){
						initPagination();
					}

					if(opts.keyboard){
						keyDown();
					}
				});
			}

		//
		SP.moveUp = function(){
			if (iIndex) {
				iIndex--;
			}else if(opts.loop){
				iIndex = arrElement.length - 1;
			}
			scrollPage(arrElement[iIndex]);
		}

		//	
		SP.moveDown = function(){
			if (iIndex < (arrElement.length - 1)) {
				iIndex++;
			}else if(opts.loop){
				iIndex = 0;
			}
			scrollPage(arrElement[iIndex]);
		}


		//私有方法
		function scrollPage(element){
			var dest = element.position();
			if(typeof dest === 'undefined'){ 
				return; 
			}
			initEffects(dest,element);
		}

		//重写滚轮事件
		$(document).on("mousewheel DOMMouseScroll",MouseWheelHandler);
		function MouseWheelHandler(e){
			e.preventDefault();
			var value = e.originalEvent.wheelDelta || -e.originalEvent.detail;
			var delta = Math.max(-1,Math.min(1,value));
			if (canScroll) {
				if (delta < 0) {
					SP.moveDown();
				} else {
					SP.moveUp();
				}
			}
			return false;
		}

		//横向布局初始化
		function initLayout(){
			var length = sections.length,
			width = (length*100)+"%",
			cellWidth = (100/length).toFixed(2)+"%";
			container.width(width).addClass("left");
			sections.width(cellWidth).addClass("left");
		}

		//初始化分页
		function initPagination(){
			var length = sections.length;
			var pageHtml = '<ul id="pages"><li class="active"></li>';
			for(var i=1;i<length;i++){
				pageHtml += '<li></li>';
			}
			pageHtml += '</ul>';
			$("body").append(pageHtml);
		}

		//分页事件
		function paginationHandler(){
			var pages = $("#pages li");
			pages.eq(iIndex).addClass("active").siblings().removeClass("active");
		}

		//是否支持css属性
		function isSuportCss(property){
			var body = $("body")[0];
			for (var i = 0; i < property.length; i++) {
				if (property[i] in body.style){
					return true;
				}
			}
			return false;
		}

		//渲染效果
	function initEffects(dest,element){
		var transform = ["-webkit-transform","-ms-transform","-moz-transform","transform"],
			transition = ["-webkit-transition","-ms-transition","-moz-transition","transition"];

		canScroll = false;
		if(isSuportCss(transform) && isSuportCss(transition)){
			var traslate = "";
			if(opts.direction == "horizontal"){
				traslate = "-"+dest.left+"px, 0px, 0px";
			}else{
				traslate = "0px, -"+dest.top+"px, 0px";
			}
			container.css({
				"transition":"all "+opts.duration+"ms "+opts.easing,
				"transform":"translate3d("+traslate+")"
			});
			container.on("webkitTransitionEnd msTransitionend mozTransitionend transitionend",function(){
				canScroll = true;
			});
		}else{
			var cssObj = (opts.direction == "horizontal")?{left: -dest.left}:{top: -dest.top};
			container.animate(cssObj, opts.duration, function(){
				canScroll = true;
			});
		}
		element.addClass("active").siblings().removeClass("active");
		if(opts.pagination){
			paginationHandler();
		}
	}

		//窗口resize
		var resizeId;
		win.resize(function(){
			clearTimeout(resizeId);
			resizeId = setTimeout(function(){
				reBuild();
			},500);
		});

		function reBuild(){
			var currentHeight = win.height(),
			currentWidth = win.width();

			var element = arrElement[iIndex];
			if(opts.direction == "horizontal"){
				var offsetLeft = element.offset().left;
				if(Math.abs(offsetLeft)>currentWidth/2 && iIndex <(arrElement.length-1)){
					iIndex ++;
				}
			}else{
				var offsetTop = element.offset().top;
				if(Math.abs(offsetTop)>currentHeight/2 && iIndex <(arrElement.length-1)){
					iIndex ++;
				}
			}
			if(iIndex){
				paginationHandler();
				var cuerrentElement = arrElement[iIndex],
				dest = cuerrentElement.position();
				initEffects(dest,cuerrentElement);
			}
		}

		//绑定键盘
		function keyDown(){
			var keydownId;
			win.keydown(function(e){
				clearTimeout(keydownId);
				keydownId = setTimeout(function(){
					var keyCode = e.keyCode;
					if(keyCode == 37||keyCode == 38){
						SP.moveUp();
					}else if(keyCode == 39||keyCode == 40){
						SP.moveDown();
					}
				},150);
			});
		}
	})(jQuery);