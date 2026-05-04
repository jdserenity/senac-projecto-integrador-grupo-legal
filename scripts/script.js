'use strict'

const pauseButton = document.getElementsByClassName("pause-button")[0]
const heroVideo = document.getElementsByTagName("video")[0]

heroVideo.playbackRate = 0.75;

pauseButton.addEventListener("click", () => {
  if (heroVideo.paused) {heroVideo.play(); pauseButton.src = "../assets/pause-button-128.png"; return} 
  heroVideo.pause(); pauseButton.src = "../assets/play-button-128.png";
})

// Função para menu mobile
const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");
const links = menu.querySelectorAll("a");

menuBtn.addEventListener("click", () => {
  menu.classList.remove("hidden");
  overlay.classList.remove("hidden");
  document.body.classList.add("locked");
});

// Fecha ao clicar em qualquer opção
links.forEach(link => {
  link.addEventListener("click", () => {
    fecharMenu();
  });
});

// (Opcional) fecha clicando fora
overlay.addEventListener("click", fecharMenu);

function fecharMenu() {
  menu.classList.add("hidden");
  overlay.classList.add("hidden");
  document.body.classList.remove("locked");
}
