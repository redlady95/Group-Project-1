// Get the video
var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}



//Start of the script for the buttons in players pages
var i = 0;
$("button").on("click",function() {
  if (!i) {
    document.getElementById("more").style.
      display = "inline";
    document.getElementById("dots").style.
      display = "none";
    document.getElementById("read").innerHTML = "Read less";
    i = 1;
  }
  else {
    document.getElementById("more").style.
      display = "none";
    document.getElementById("dots").style.
      display = "inline";
    document.getElementById("read").innerHTML = "Read more";
    i = 0;
  }
})