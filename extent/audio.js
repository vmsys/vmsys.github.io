var snd1="audio/aryx.ogg"
var snd2="audio/crash.ogg
var x=Math.round(Math.random()*1)
if (x==0) x=snd1
else if (x==1) x=snd2
else if (x==2) x=snd3
else if (x==3) x=snd4
else if (x==4) x=snd5
else if (x==5) x=snd6
else if (x==6) x=snd7
else if (x==7) x=snd8
else if (x==8) x=snd9
else x=snd10
var audio = document.createElement("audio");
if (audio != null && audio.canPlayType && audio.canPlayType("audio/mp3"))
{
  audio.src = "audio/aryx.ogg";
  audio.loop = "loop";
  audio.controls = "controls";
  audio.play();
}


