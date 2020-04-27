window.onload = function(){
	var video = document.getElementsByTagName("video")[0];
	var x1 = document.getElementById("x");
	var qqq = document.getElementsByClassName("qqq")[0];
	var sp = document.getElementsByClassName("sp")[0];
	
	qqq.onclick =function(){
	video.play();
	sp.style.display = "block"
	}
	
	x.onclick = function () {
	video.pause();
	sp.style.display = "none"
	};
	
	
	//切换图片
	var img = ["img/zhotu.png","img/zhotu2.png","img/zhotu3.png"];
	var you1 = document.querySelector(".you1");
	var imgTu = document.querySelector(".imgTu");
	
	
	var	img1 = 0;
	
	you1.onclick = function(){
		img1++;
		if(img1 > 2){
			img1 = 0;
		}
		imgTu.src = img[img1];	
	}
		
	
	//切换图片2
	var imgG = ["img/zhotu4.png","img/zhotu5.png","img/zhotu.png"];
	var you2 = document.querySelector(".you2");
	var imgTu2 = document.querySelector(".imgTu1");
	
	console.log(imgG,you2,imgTu2)
	
	var	img2 = 0;
	
	you2.onclick = function(){
		img2++;
		if(img2 > 2){
			img2 = 0;
		}
		imgTu2.src = imgG[img2];	
	}
	
	
	//返回顶部
	var fanhui = document.querySelector(".fanhui");
	
	
	fanhui.onclick = function(){
		caoo();
	}
	

	function caoo(){
		time = setInterval(function() {
			var Y = window.scrollY;
			var x = Y - 150;
			console.log(Y)
			
			if( Y <= 0){
				clearInterval(time);
			}else{
				window.scrollTo(0,x)
			}
		
	}, 30);
 }
	



	var cao= document.getElementsByClassName("cao");
	var mm = document.getElementsByClassName("mm");
	var e = document.getElementsByClassName("e");
	var index = 0;
	
	var time = setInterval(aa,3000);
	
	function aa(){
		index++;
		if(index >=4){
			index = 0
		}
		qings();
	}
	
	for(let i=0;i<e.length;i++){
		e[i].onmouseover = function(){
			clearInterval(time);
		}
		
		e[i].onmouseout = function(){
			time = setInterval(aa,3000);
		}
	}
		
	
	for(let i=0;i<mm.length;i++){
		mm[i].onclick = function(){
			index = i;
			qings()
		}
		mm[i].onmouseover = function(){
			clearInterval(time);
		}
		
		mm[i].onmouseout = function(){
			time = setInterval(aa,3000);
		}
	}
	
	function qings(){
		for(let y = 0;y<mm.length;y++){
		mm[y].classList.remove("hong");
		cao[y].style.display = "none";
	}
	cao[index].style.display = "block";
	mm[index].classList.add("hong");
}
	
}
	





$(function(){
				// 第一块效果
				$(".main1").hover(function(){
					$(".main3").css({"background-position":"-440px","opacity":"1"})
					$(".main2").css({"background-position":"-445px","opacity":"1"})
					$(".main1").css({"background-position":"0px","opacity":"1"})
				},function(){
					$(".main1").css({"background-position":"-445px","opacity":"1"})
					
				})
				
				$(".main2").hover(function(){
					$(".main2").css({"background-position":"0px"})
					$(".main1").css({"background-position":"-443px"})
					$(".main3").css({"background-position":"-440px"})
				},function(){
					$(".main2").css({"background-position":"-445px"})
				})
				
				$(".main3").hover(function(){
					$(".main1").css({"background-position":"-443px"})
					$(".main2").css({"background-position":"-445px"})
					$(".main3").css({"background-position":"0px"})
				})
				
				$(".mai_n>div").mouseleave(function(){
					$(this).css({"background-position":"0px"})
				})
				
				setTimeout(function(){
					$(".cc").css({'left':'287px','opacity':'1'});
				},1000)
			
			// 第二块
				$(".msg2").mouseenter(function(){
					$(".msg1").css({"background-position":"0px"})
					$(".msg2").css({"background-position":"-500px"})
					$(".msg3").css({"background-position":"0px"})
					$(".msg4").css({"background-position":"0px"})
				})
				
				$(".msg1").mouseenter(function(){
					$(".msg1").css({"background-position":"-500px"})
					$(".msg2").css({"background-position":"0px"})
					$(".msg3").css({"background-position":"0px"})
					$(".msg4").css({"background-position":"0px"})
				})
				
				$(".msg3").mouseenter(function(){
					$(".msg1").css({"background-position":"0px"})
					$(".msg2").css({"background-position":"0px"})
					$(".msg3").css({"background-position":"-500px"})
					$(".msg4").css({"background-position":"0px"})
				})
				
				$(".msg4").mouseenter(function(){
					$(".msg1").css({"background-position":"0px"})
					$(".msg2").css({"background-position":"0px"})
					$(".msg3").css({"background-position":"0px"})
					$(".msg4").css({"background-position":"-500px"})
				})
			
	      // 第三块
				// $(".mm").mouseenter(function(){
				// 	$(".box2").css({"opacity":"1"})
				// 	$(".box3").css({"opacity":"0"})
				// 	$(".box4").css({"opacity":"0"})
				// 	$(".box5").css({"opacity":"0"})
				// })
				// $(".mmm").mouseenter(function(){
				// 	$(".box2").css({"opacity":"0"})
				// 	$(".box3").css({"opacity":"1"})
				// 	$(".box4").css({"opacity":"0"})
				// 	$(".box5").css({"opacity":"0"})
				// })
				// $(".mmmm").mouseenter(function(){
				// 	$(".box2").css({"opacity":"0"})
				// 	$(".box3").css({"opacity":"0"})
				// 	$(".box4").css({"opacity":"1"})
				// 	$(".box5").css({"opacity":"0"})
				// })
				// $(".mmmmm").mouseenter(function(){
				// 	$(".box2").css({"opacity":"0"})
				// 	$(".box3").css({"opacity":"0"})
				// 	$(".box4").css({"opacity":"0"})
				// 	$(".box5").css({"opacity":"1"})
				// })
				
			// $('.box1>ul>li').mouseenter(function(){
			// 	  $('.box1>ul>li').removeClass('hong');
			// 	 $(this).addClass('hong');
			// });			
		})	