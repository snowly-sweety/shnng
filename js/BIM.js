
var centerOne = document.querySelectorAll(".center-one");
var header = document.querySelector(".header");
var center = document.querySelector(".center");
var changeTop = centerOne[0].offsetHeight;
var maxChange = 0;
var index = 0;
var timer = null;
var isStop = true;

center.style.marginTop = header.offsetHeight + "px";


// 向下滑动
function downFn(){
	index ++;
	timer = setInterval(function(){
		maxChange += 20;
		if (maxChange >= changeTop * index) {
			maxChange == changeTop * index;
			clearInterval(timer);
			isStop = true;
		};
		document.body.scrollTop = maxChange;
		document.documentElement.scrollTop = maxChange;
	},10);
}

// 向上滑动
function upFn(){
	index --;
	timer = setInterval(function(){
		maxChange -= 20;
		if (maxChange <= changeTop * index) {
			maxChange = changeTop * index;
			clearInterval(timer);
			isStop = true;
		};
		document.body.scrollTop = maxChange;
		document.documentElement.scrollTop = maxChange;
	},10);
}

// 回调函数
function callBackFn(down){
	// 判断向哪个方向滚动
	if (down == true) {
		// 向后滚动，判断当前是否滚动已经停止，isStop=true是停止状态
		if (isStop == true) {
			isStop = false;
			clearInterval(timer);
			setTimeout(function(){
				downFn();
			},500);
		};
	}else{
		if (isStop == true) {
			isStop = false;
			clearInterval(timer);
			setTimeout(function(){
				upFn();
			},500);
		};
	};
}


addScrollFun(document.body,function(down){
	callBackFn(down);
});

addScrollFun(document.documentElement,function(down){
	callBackFn(down);
});




