var aArrays = document.querySelectorAll(".nav a");
var footerA = document.querySelectorAll(".footer a");
//console.log(aArrays);

//导航栏效果
//点击状态为真
function navFun (){
	var bool = false;
	for (var i = 0; i < aArrays.length; i++) {
		var index = i;
		aArrays[index].onmouseenter = function(){
			if ((this.className == "nav-a") & (bool == false)) {
				bool = true;
				return ;
			}else {	
				this.className = "nav-a";
				bool = false;
			}
		}
		aArrays[index].onmouseleave = function(){
			if (bool == true) {
				bool = false;
				return;
			} else{
				this.className = "";
			}
		}
	}
}

//导航栏点击事件
function clickFun () {
	for (var i = 0; i < aArrays.length; i++) {
		(function(i){
			aArrays[i].onclick = function (){
				for (var j = 0; j < aArrays.length; j++) {
					aArrays[j].className = "";
				}
				this.className = "nav-a";
				
			}
		})(i)
	}
}

//footer
function linkFun(){
	for (var i = 0; i < footerA.length; i++) {
		(function(i){
			footerA[i].onmouseenter = function(){
				var childs = footerA[i].children;
				childs[0].style.display = "none";
				childs[1].style.display = "block";
			}
			footerA[i].onmouseleave = function(){
				var childs = footerA[i].children;
				childs[0].style.display = "block";
				childs[1].style.display = "none";
			}
		})(i)
	}
}

//调用函数
function activeFun(){
	navFun();
	clickFun();
	linkFun();
}
activeFun();