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

// Navegación entre paneles
function mostrarPanel(id) {
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('activo'));
  document.querySelectorAll('.nav-item-dash').forEach(n => n.classList.remove('activo'));
  document.getElementById('panel-' + id).classList.add('activo');
  document.querySelectorAll('.nav-item-dash').forEach(n => {
    if (n.getAttribute('onclick') && n.getAttribute('onclick').includes("'" + id + "'"))
      n.classList.add('activo');
  });
  document.getElementById('tituloPagina').innerHTML = titulos[id] || id;
  cerrarSidebar();
}

function cargarImagen(event) {
  const archivo = event.target.files[0];
  const error = document.getElementById('errorImagen');
  const tiposPermitidos = ['image/jpeg', 'image/png', 'image/webp'];

  // Validar tipo de archivo
  if (!archivo || !tiposPermitidos.includes(archivo.type)) {
    error.style.display = 'block';
    event.target.value = ''; // limpiar el input
    return;
  }

  error.style.display = 'none';

  // Mostrar vista previa de la imagen
  const lector = new FileReader();
  lector.onload = function(e) {
    document.getElementById('previewImg').src = e.target.result;
    document.getElementById('nombreArchivo').textContent = archivo.name;
    document.getElementById('zonaPlaceholder').style.display = 'none';
    document.getElementById('zonaPreview').style.display = 'block';
  };
  lector.readAsDataURL(archivo);
}

function eliminarImagen(event) {
  event.stopPropagation(); 
  document.getElementById('inputImagen').value = '';
  document.getElementById('previewImg').src = '';
  document.getElementById('nombreArchivo').textContent = '';
  document.getElementById('zonaPlaceholder').style.display = 'block';
  document.getElementById('zonaPreview').style.display = 'none';
  document.getElementById('errorImagen').style.display = 'none';
}
