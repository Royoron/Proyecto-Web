// Efecto de navbar al hacer scroll
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navPrincipal');
  if (window.scrollY > 40) {
    navbar.classList.add('con-scroll');
  } else {
    navbar.classList.remove('con-scroll');
  }
});

// Scroll suave al hacer clic en enlaces internos (#)
document.querySelectorAll('a[href^="#"]').forEach(enlace => {
  enlace.addEventListener('click', function(e) {
    const destino = document.querySelector(this.getAttribute('href'));
    if (destino) {
      e.preventDefault();
      destino.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
