  var audio = document.createElement("audio");
  if (audio != null && audio.canPlayType && audio.canPlayType("audio/mp3"))
  {
    audio.src = "audio/aryx.ogg";
    audio.loop = "loop";
    audio.play();
  }
