'use strict'

const pauseButton = document.getElementsByClassName("pause-button")[0]
const heroVideo = document.getElementsByTagName("video")[0]

heroVideo.playbackRate = 0.75;

pauseButton.addEventListener("click", () => {
  if (heroVideo.paused) {heroVideo.play(); pauseButton.src = "../assets/pause-button-128.png"; return} 
  heroVideo.pause(); pauseButton.src = "../assets/play-button-128.png";
})
