'use strict'

// CARREGA MENU
async function loadMenu() {
  const response = await fetch('./components/menu.html');
  const data = await response.text();
  document.getElementById('menu-container').innerHTML = data;

  // AGORA O HTML EXISTE
  startMenu();
}

loadMenu();

//CARREGA FOOTER

async function loadComponent(elementId, file) {
  const response = await fetch(file);
  const html = await response.text();

  document.getElementById(elementId).innerHTML = html;
}

loadComponent('footer-container', './components/footer.html');


// FUNÇÃO DO MENU
function startMenu() {

  const hamburger = document.getElementById('hamburger');

  const mobileMenu = document.getElementById('mobileMenu');

  hamburger.addEventListener('click', () => {

    hamburger.classList.toggle('active');

    mobileMenu.classList.toggle('active');

    // BLOQUEIA SCROLL
    if (mobileMenu.classList.contains('active')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

  });

  // FECHA MENU AO CLICAR
  document.querySelectorAll('.mobile-menu a').forEach(link => {

    link.addEventListener('click', () => {

      mobileMenu.classList.remove('active');

      hamburger.classList.remove('active');

      document.body.style.overflow = 'auto';

    });

  });

}