/*在线演示公共底部*/
$(function() {
  var buf = [];
  //buf.push('<script async src="http://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>');
  //buf.push('<ins class="adsbygoogle" style="display:inline-block;width:728px;height:90px" data-ad-client="ca-pub-0608155192548477" data-ad-slot="8305246055"></ins>');
 // buf.push('<script>(adsbygoogle = window.adsbygoogle || []).push({});</script>');
  /*百度统计*/
  buf.push('<script>var _hmt = _hmt || [];(function() {var hm = document.createElement("script");hm.src = "//hm.baidu.com/hm.js?3088a94e3b69516f6df1098fc49847c9";var s = document.getElementsByTagName("script")[0];s.parentNode.insertBefore(hm, s);})();</script>');
  /*百度分享*/
  buf.push('<script>window._bd_share_config={"common":{"bdSnsKey":{},"bdText":"","bdMini":"2","bdMiniList":false,"bdPic":"","bdStyle":"0","bdSize":"16"},"slide":{"type":"slide","bdImg":"1","bdPos":"right","bdTop":"100"}};with(document)0[(getElementsByTagName("head")[0]||body).appendChild(createElement("script")).src="http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion="+~(-new Date()/36e5)];</script>');
  $('.footer-banner').html(buf.join(''));
  /*头部导航*/
  $('body').append('');
  /*iframe自适应*/
  /*$("#iframe-hoster").load(function() {
    var mainheight = $(this).contents().find("body").height() + 5;
    $(this).height(mainheight);
  });*/
});
