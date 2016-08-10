
var aArrays = document.querySelectorAll(".content-list a");
var imgSecond = document.querySelectorAll(".img-second");
var imgThird = document.querySelectorAll(".img-third");

function showFun(){
	for (var i = 0; i < aArrays.length; i++) {
		(function(i){
			aArrays[i].onmouseover = function(){
				imgSecond[i].style.display = "none";
				imgThird[i].style.display = "block";
			}
			aArrays[i].onmouseout = function(){
				imgSecond[i].style.display = "block";
				imgThird[i].style.display = "none";
			}
		})(i)
	}
}
showFun();