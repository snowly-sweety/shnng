var changeS = document.querySelectorAll("ul.change");
var firstImgs = document.querySelectorAll("img.first-img");
var contentLines = document.querySelectorAll("div.content-line");

//center
function showFun (){
	for (var i = 0; i < changeS.length; i++) {
		//自执行函数
		(function(i){
			changeS[i].onmouseenter = function(){
				contentLines[i].style.background = "#CFDB00";
				firstImgs[i].style.opacity = "0";
			}
			changeS[i].onmouseleave = function(){
				contentLines[i].style.background = "rgb(176, 176, 176)";
				firstImgs[i].style.opacity = "1";
			}
		})(i)
	}
}
showFun();