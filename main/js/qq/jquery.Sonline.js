/*
此插件基于Jquery
插件名：jquery.Sonline(在线客服插件)
开发者 似懂非懂
版本 1.0
Blog：www.haw86.com
下载: http://www.5icool.org/a/201304/873.html 酷站代码网
*/
(function($){
	$.fn.Sonline = function(options){
        var opts = $.extend({}, $.fn.Sonline.defualts, options); 
		$.fn.setList(opts); //调用列表设置
		if(opts.DefaultsOpen == false){
			$.fn.Sonline.close(opts.Position,0);
		}
		//展开
		$("#SonlineBox > .openTrigger").live("click",function(){$.fn.Sonline.open(opts.Position);});
		//关闭
		$("#SonlineBox > .contentBox > .closeTrigger").live("click",function(){$.fn.Sonline.close(opts.Position,"fast");});
		
		//Ie6兼容或滚动方式显示
		if ($.browser.msie && ($.browser.version == "6.0") && !$.support.style||opts.Effect==true) {$.fn.Sonline.scrollType();}
		else if(opts.Effect==false){$("#SonlineBox").css({position:"fixed"});}
	}
	//plugin defaults
	$.fn.Sonline.defualts ={
		Position:"left",//left或right
		Top:200,//顶部距离，默认200px
		Effect:true, //滚动或者固定两种方式，布尔值：true或
		DefaultsOpen:true, //默认展开：true,默认收缩：false
		Qqlist:"" //多个QQ用','隔开，QQ和客服名用'|'隔开
	}
	
	//展开
	$.fn.Sonline.open = function(positionType){
		var widthValue = $("#SonlineBox > .contentBox").width();
		if(positionType=="left"){$("#SonlineBox > .contentBox").animate({left: 0},"fast");}
		else if(positionType=="right"){$("#SonlineBox > .contentBox").animate({right: 0},"fast");}
		$("#SonlineBox").css({width:widthValue+4});
		$("#SonlineBox > .openTrigger").hide();
	}

	//关闭
	$.fn.Sonline.close = function(positionType,speed){
		$("#SonlineBox > .openTrigger").show();
		var widthValue =$("#SonlineBox > .openTrigger").width();
		var allWidth =(-($("#SonlineBox > .contentBox").width())-6);
		if(positionType=="left"){$("#SonlineBox > .contentBox").animate({left: allWidth},speed);}
		else if(positionType=="right"){$("#SonlineBox > .contentBox").animate({right: allWidth},speed);}
		$("#SonlineBox").animate({width:widthValue},speed);
		
	}

	//子插件：设置列表参数
	$.fn.setList = function(opts){
		$("body").append("<div class='SonlineBox' id='SonlineBox' style='top:-600px;'><div class='openTrigger' style='display:none' title='展开'></div><div class='contentBox'><div class='closeTrigger'><img src='/main/js/qq/closeBtnImg.gif' title='关闭' /></div><div class='titleBox'><span>客服中心</span></div><div class='listBox'></div></div></div>");
		if(opts.Qqlist==""){$("#SonlineBox > .contentBox > .listBox").append("<p style='padding:15px'>暂无在线客服。</p>")}
		else{var qqListHtml = $.fn.Sonline.splitStr(opts);$("#SonlineBox > .contentBox > .listBox").append(qqListHtml);	}
		if(opts.Position=="left"){$("#SonlineBox").css({left:0});}
		else if(opts.Position=="right"){$("#SonlineBox").css({right:0})}
		$("#SonlineBox").css({top:opts.Top});
		var allHeights=0;
		if($("#SonlineBox > .contentBox").height() < $("#SonlineBox > .openTrigger").height()){
			allHeights = $("#SonlineBox > .openTrigger").height()+4;
		} else{allHeights = $("#SonlineBox > .contentBox").height()+4;}
		$("#SonlineBox").height(allHeights+200);
		if(opts.Position=="left"){$("#SonlineBox > .openTrigger").css({left:0});}
		else if(opts.Position=="right"){$("#SonlineBox > .openTrigger").css({right:0});}
    
		$("#SonlineBox > .contentBox > .listBox").append("<!-- 代码开始 --> <div id="player"></div> <div class="DreambackMusicPlayer"> <div id="MusicPlayer"> <div id="PlayBtn" class="play" title="暂停"></div> <div id="PrevBtn" title="上一曲"></div> <div id="NextBtn" title="下一曲"></div> <div id="TimeBar"> <span id="CurTime">00:00</span>/<span id="TotalTime">00:00</span> </div> <div id="FullProgressBar"> <div id="LoadProgressBar" style="width:0;"></div> <div id="PlayProgressBar" style="width:0;"></div> <div id="CurrentPlay" style="top:-5px;left:-10px;"></div> </div> <div id="SoundBtn"></div> <div id="SoundBar"> <div id="CurSoundBar" style="width:25px;"></div> <div id="CurSound" style="top:-7px;left:15px;"></div> </div> <a href="" target="_blank" id="DownLoadBtn" title="下载"></a> </div> <div id="MusicList"> <ul> <li> <textarea>http://www.qinfu168.com/uploads/video/爱我别走.mp3</textarea> 爱我别走-张震岳</li> <li> <textarea>http://ting.baidu.com/data/music/file?link=http://zhangmenshiting.baidu.com/data2/music/1658207/15803401346727661.mp3?xcode=44001cdc1d2852c31d07286be822d843</textarea> road trip-darin</li> <li> <textarea>http://www.qinfu168.com/uploads/video/城市稻草人.mp3</textarea> 城市稻草人</li> <li> <textarea>http://www.qinfu168.com/uploads/video/大城小爱.mp3</textarea> 大城小爱-王力宏</li> <li> <textarea>http://www.qinfu168.com/uploads/video/开不了口.mp3</textarea> 开不了口-周杰伦</li> <li> <textarea>http://www.qinfu168.com/uploads/video/恋人未满.mp3</textarea> 恋人未满-S.H.E</li> <li> <textarea>http://www.qinfu168.com/uploads/video/他一定很爱你.mp3</textarea> 他一定很爱你-阿杜</li> <li> <textarea>http://www.qinfu168.com/uploads/video/最熟悉的陌生人.mp3</textarea> 最熟悉的陌生人-萧亚轩</li> <li> <textarea>http://www.qinfu168.com/uploads/video/最炫民族风.mp3</textarea> 最炫民族风-凤凰组合</li> <li> <textarea>http://www.qinfu168.com/uploads/video/爱我别走.mp3</textarea> 爱我别走-张震岳</li> <li> <textarea>http://www.qinfu168.com/uploads/video/半糖主义.mp3</textarea> 半糖主义-S.H.E</li> <li> <textarea>http://www.qinfu168.com/uploads/video/城市稻草人.mp3</textarea> 城市稻草人</li> <li> <textarea>http://www.qinfu168.com/uploads/video/大城小爱.mp3</textarea> 大城小爱-王力宏</li> <li> <textarea>http://www.qinfu168.com/uploads/video/开不了口.mp3</textarea> 开不了口-周杰伦</li> <li> <textarea>http://www.qinfu168.com/uploads/video/恋人未满.mp3</textarea> 恋人未满-S.H.E</li> <li> <textarea>http://www.qinfu168.com/uploads/video/他一定很爱你.mp3</textarea> 他一定很爱你-阿杜</li> <li> <textarea>http://www.qinfu168.com/uploads/video/最熟悉的陌生人.mp3</textarea> 最熟悉的陌生人-萧亚轩</li> <li> <textarea>http://www.qinfu168.com/uploads/video/最炫民族风.mp3</textarea> 最炫民族风-凤凰组合</li>        <li><textarea>http://qzone.haoduoge.com/music/12a79JPNX70b9d7d074344c968df3c03d0ef4.mp3 </textarea>陈绮贞-旅行的意义</li> </ul> <div id="ListScrollBar" style="top:0;left:479px;"></div> </div> </div> <script type="text/javascript" src="mplayer/js/MusicPlay.js"></script> <script type="text/javascript"> window.onload = function(){ MusicPlay.create('player','mplayer/MusicPlay.swf'); } </script> <!-- 代码结束 --> ");
	}
	
	//滑动式效果
	$.fn.Sonline.scrollType = function(){
		$("#SonlineBox").css({position:"absolute"});
		var topNum = parseInt($("#SonlineBox").css("top")+"");
		$(window).scroll(function(){
			var scrollTopNum = $(window).scrollTop();//获取网页被卷去的高
			$("#SonlineBox").stop(true,true).delay(0).animate({top:scrollTopNum+topNum},"slow");
		});
	}
	
	//分割QQ
	$.fn.Sonline.splitStr = function(opts){
		var strs= new Array(); //定义一数组
		var QqlistText = opts.Qqlist;
		strs=QqlistText.split(","); //字符分割
		var QqHtml=""
		for (var i=0;i<strs.length;i++){	
			var subStrs= new Array(); //定义一数组
			var subQqlist = strs[i];
			subStrs = subQqlist.split("|"); //字符分割
			QqHtml = QqHtml+"<div class='QQList'><span>"+subStrs[1]+"：</span><a target='_blank' href='http://wpa.qq.com/msgrd?v=3&uin="+subStrs[0]+"&site=qq&menu=yes'><img border='0' src='http://wpa.qq.com/pa?p=2:"+subStrs[0]+":41 &amp;r=0.22914223582483828' alt='点击这里'></a></div>"
		}
		return QqHtml;
	}
})(jQuery);    


 
