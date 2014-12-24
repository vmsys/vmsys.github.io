var timer;
$(function(){
    $(window).scroll(function(){
      clearInterval(timer);
      var topScroll=getScroll();
      var topDiv="300px";
      var top=topScroll+parseInt(topDiv);
      timer=setInterval(function(){
        //$(".test").css("top", top+"px");
        $(".scrolldiv").animate({"top":top},100);
        },500)
      })
    })
function getScroll(){
  var bodyTop = 0;  
  if (typeof window.pageYOffset != 'undefined') {  
    bodyTop = window.pageYOffset;  
  } else if (typeof document.compatMode != 'undefined' && document.compatMode != 'BackCompat') {  
    bodyTop = document.documentElement.scrollTop;  
  }  
  else if (typeof document.body != 'undefined') {  
    bodyTop = document.body.scrollTop;  
  }  
  return bodyTop
}
