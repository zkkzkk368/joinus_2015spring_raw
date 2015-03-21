//2015.03.金雨婷 mouseover相应板块变色
$(document).ready(function(){
    $("#btn1").mouseenter(function(){
      $("#bigdiv").css({"background-image":"url(image/mouseenter设创.jpg)"});
    });
    $("#btn2").mouseenter(function(){
      $("#bigdiv").css({"background-image":"url(image/mouseenter技术.jpg)"});
    });
    $("#btn3").mouseenter(function(){
      $("#bigdiv").css({"background-image":"url(image/mouseenter沙伐旅.jpg)"});
    });
    $("#btn4").mouseenter(function(){
      $("#bigdiv").css({"background-image":"url(image/mouseenter人资.jpg)"});
    });
    $("#btn5").mouseenter(function(){
      $("#bigdiv").css({"background-image":"url(image/mouseenter推测.jpg)"});
    });
    $("#btn6").mouseenter(function(){
       $("#bigdiv").css({"background-image":"url(image/mouseenter百度.jpg)"});
     });
    $(".btn").mouseleave(function(){
      $("#bigdiv").css({"background-image":"url(image/background.jpg)"});
    });
   
 });
