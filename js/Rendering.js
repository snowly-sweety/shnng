//
//var picImgs = $(".pic-wrap>img");
//var liArrays = $(".round-list li");
////调整浏览器窗口时动态的设置高度
//$(".pic-wrap").height($(picImgs)[0].clientHeight);
//window.onresize = function (){
//	$(".pic-wrap").height($(picImgs)[0].clientHeight);
//}
//console.log(picImgs[2].offsetHeight)

(function($){
	//命名空间
	$.fn.slide = function(config) {
		var defaults = {
			isAuto : true,//是否自动轮播
			hasNext : true,//是否有下一个按钮
			hasPrev : true,//是否有上一个按钮
			activeIndex : 0,//当前展示图片索引，默认0
			speed : 300,//动画速度
			time : 3000//间隔时间
		};
					//extend：合并参数；
		var config = $.extend(defaults,config);
		var that = $(this);
		var oWidth = that.width();
		var activeIndex = config.activeIndex;
		var picBox = that.find(".focus_bd");
		var btnBox;
		var picLists;
		var btnLists;
		var timer;
		
		//判断
		if (!picBox.find("li") || picBox.find("li").length < 2) {
			return;
		}
		
		//添加按钮节点
		var render = function(){
			btnBox = that.find(".focus_btn");
			//保存图片的数量
			var len = picBox.find("li").length;
			var tpl = "";
			//生成按钮
			for (var i = 1; i < len + 1; i++) {
				tpl += "<li>" + i + "</li>";
			}
			btnBox.html(tpl);
			btnLists = that.find(".focus_btn>li");
			btnLists.eq(activeIndex).addClass("on");
			
			var _width = oWidth * len;
			picBox.width(_width)
			picLists = picBox.find("li");
			picLists.width(oWidth);
			
			//添加按钮
			if (config.hasPrev) {				//转义字符
				that.append("<a href='javascript:;' class='btn_prev'>&lt;</a>");
			}
			if (config.hasNext) {
				that.append("<a href='javascript:;' class='btn_next'>&gt;</a>");
			}
			
			//滑动函数
			var move = function(index){
				//当前按钮
				btnLists.eq(index).addClass("on"	).siblings().removeClass("on");
				picBox.animate({
					left : -oWidth * index
				},config.speed);
				activeIndex = index;
			}
			
			//绑定事件
			btnLists.mouseenter(function(){
				var that = $(this);
				activeIndex = that.index();
				move(activeIndex);
			});
			
			//点击按钮
			if (config.hasPrev) {
				$(".btn_prev").click(function(){
					var toIndex = activeIndex - 1;
					toIndex = toIndex < 0 ? picLists.length - 1 : toIndex;
					move(toIndex);
				})
			}
			if (config.hasNext) {
				$(".btn_next").click(function(){
					var toIndex = activeIndex + 1;
					toIndex = toIndex > picLists.length - 1 ? 0 : toIndex;
					move(toIndex);
				})
			}
			
			//自动播放
			var startMove = function(){
				if (activeIndex >= picLists.length - 1) {
					activeIndex = 0;
				} else{
					activeIndex ++;
				}
			}
			
			//定时器
			var autoMove = function(){
				var timer = setInterval(startMove,config.time);
			}
			autoMove();
		}
		render();
	}
	
})(jQuery);
$(".focus_box").slide();