
					// 传参数：滑动的对象，回调函数
function addScrollFun(obj,handle){
	// 通过查找字符串的方式判断当前是不是火狐浏览器
	var FF = navigator.userAgent.indexOf("Firefox");
	//判断：当 FF ！= -1 时，是firefox浏览器
	if (FF != -1) {
		// 火狐浏览器只支持监听方式
		obj.addEventListener("DOMMouseScroll",scrollFun,false);
	} else{
		obj.onmousewheel = scrollFun;
	}

	function scrollFun(event){
		var ev = event || window.event;
		var down;
	    //阻止浏览器的默认行为
	    if(ev.preventDefault){
	    	// on方法的事件阻止方法
			ev.preventDefault();
		} else{
			//监听的事件阻止方法
			return false;
		}
		// 兼容（向后滚动）
		if (FF != -1) {
			down = ev.detail > 0;
		} else{
			down = ev.wheelDelta < 0;
		}
		// 回调函数
		handle(down);
	}
}