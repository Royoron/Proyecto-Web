// ══════════════════════════════════════════════════════════════════
//  DATOS DE LA APLICACIÓN — Estructura basada en el modelo relacional
//  StyleUp · Proyecto de Aula · Base de Datos · UPC 2026
//
//  Estas variables simulan las tablas de la BD hasta que se conecte
//  el backend. Cada objeto respeta los campos definidos en el
//  diccionario de datos del documento del proyecto.
// ══════════════════════════════════════════════════════════════════


// ── TABLA: ESTADO_BARBERO ─────────────────────────────────────────
// Catálogo de estados posibles para los horarios de los barberos
const estadosBarbero = [
  { id_estado: "EST001", estado: "Disponible" },
  { id_estado: "EST002", estado: "Ocupado"    },
  { id_estado: "EST003", estado: "Descanso"   }
];


// ── TABLA: ESPECIALIDADES ─────────────────────────────────────────
// Tipos de servicios que ofrece la barbería
const especialidades = [
  { id_especialidad: "ESP001", especialidad: "Corte Clásico",    tiempo_estimado: 30 },
  { id_especialidad: "ESP002", especialidad: "Arreglo de Barba", tiempo_estimado: 20 },
  { id_especialidad: "ESP003", especialidad: "Tinte & Color",    tiempo_estimado: 60 },
  { id_especialidad: "ESP004", especialidad: "Paquete Completo", tiempo_estimado: 75 }
];


// ── TABLA: BARBEROS ───────────────────────────────────────────────
// Información de los barberos que prestan servicios
const barberos = [
  {
    cedula_barbero:  "1001",
    nombre:          "Carlos",
    apellido:        "Mendez",
    id_especialidad: "ESP001",   // FK → ESPECIALIDADES
    correo:          "carlos@styleup.com",
    telefono:        "3001000001",
    contrasena:      "••••••••"
  },
  {
    cedula_barbero:  "1002",
    nombre:          "Andrés",
    apellido:        "Torres",
    id_especialidad: "ESP002",
    correo:          "andres@styleup.com",
    telefono:        "3001000002",
    contrasena:      "••••••••"
  },
  {
    cedula_barbero:  "1003",
    nombre:          "Luis",
    apellido:        "Romero",
    id_especialidad: "ESP003",
    correo:          "luis@styleup.com",
    telefono:        "3001000003",
    contrasena:      "••••••••"
  },
  {
    cedula_barbero:  "1004",
    nombre:          "Miguel",
    apellido:        "Peña",
    id_especialidad: "ESP004",
    correo:          "miguel@styleup.com",
    telefono:        "3001000004",
    contrasena:      "••••••••"
  }
];


// ── TABLA: HORARIO_BARBERO ────────────────────────────────────────
// Disponibilidad de cada barbero por fecha
// cedula_barbero FK → BARBEROS | id_estado FK → ESTADO_BARBERO
const horarioBarbero = [
  { cedula_barbero: "1001", id_estado: "EST001", hora_inicio: "08:00", hora_fin: "12:00", fecha: "2026-04-07" },
  { cedula_barbero: "1001", id_estado: "EST002", hora_inicio: "12:00", hora_fin: "13:00", fecha: "2026-04-07" },
  { cedula_barbero: "1001", id_estado: "EST001", hora_inicio: "13:00", hora_fin: "19:00", fecha: "2026-04-07" },
  { cedula_barbero: "1002", id_estado: "EST001", hora_inicio: "08:00", hora_fin: "17:00", fecha: "2026-04-07" },
  { cedula_barbero: "1003", id_estado: "EST003", hora_inicio: "08:00", hora_fin: "10:00", fecha: "2026-04-07" },
  { cedula_barbero: "1003", id_estado: "EST001", hora_inicio: "10:00", hora_fin: "19:00", fecha: "2026-04-07" },
  { cedula_barbero: "1004", id_estado: "EST001", hora_inicio: "09:00", hora_fin: "17:00", fecha: "2026-04-07" }
];


// ── TABLA: CLIENTES (usuario en sesión) ───────────────────────────
// En un sistema real este objeto vendría del login / sesión del servidor
const clienteActual = {
  cedula_cliente: "2001",
  nombre:         "Roger",
  apellido:       "Reales",
  correo:         "roger@styleup.com",
  telefono:       "3009876543",
  contrasena:     "••••••••",
  fecha_registro: "2026-01-15"
};


// ── TABLA: CITAS ──────────────────────────────────────────────────
// Citas activas (pendientes / confirmadas) del cliente en sesión
// cedula_cliente FK → CLIENTES | cedula_barbero FK → BARBEROS
// id_especialidad FK → ESPECIALIDADES
const citas = [
  {
    id_cita:         "CIT001",
    cedula_cliente:  "2001",
    cedula_barbero:  "1001",
    id_especialidad: "ESP001",
    fecha:           "2026-03-28",
    hora:            "09:00",
    estado:          "Confirmada"
  },
  {
    id_cita:         "CIT002",
    cedula_cliente:  "2001",
    cedula_barbero:  "1002",
    id_especialidad: "ESP002",
    fecha:           "2026-04-02",
    hora:            "11:00",
    estado:          "Pendiente"
  },
  {
    id_cita:         "CIT003",
    cedula_cliente:  "2001",
    cedula_barbero:  "1004",
    id_especialidad: "ESP004",
    fecha:           "2026-04-10",
    hora:            "10:00",
    estado:          "Pendiente"
  }
];


// ── TABLA: HISTORIAL_CITAS ────────────────────────────────────────
// Registro histórico de citas ya realizadas por el cliente
// id_cita FK → CITAS | cedula_cliente FK → CLIENTES
const historialCitas = [
  {
    id_cita:         "HIS001",
    cedula_cliente:  "2001",
    cedula_barbero:  "1001",
    id_especialidad: "ESP001",
    fecha:           "2026-01-10",
    estado:          "Completada"
  },
  {
    id_cita:         "HIS002",
    cedula_cliente:  "2001",
    cedula_barbero:  "1002",
    id_especialidad: "ESP002",
    fecha:           "2026-01-25",
    estado:          "Completada"
  },
  {
    id_cita:         "HIS003",
    cedula_cliente:  "2001",
    cedula_barbero:  "1003",
    id_especialidad: "ESP003",
    fecha:           "2026-02-14",
    estado:          "Cancelada"
  },
  {
    id_cita:         "HIS004",
    cedula_cliente:  "2001",
    cedula_barbero:  "1004",
    id_especialidad: "ESP004",
    fecha:           "2026-03-01",
    estado:          "Completada"
  },
  {
    id_cita:         "HIS005",
    cedula_cliente:  "2001",
    cedula_barbero:  "1001",
    id_especialidad: "ESP001",
    fecha:           "2026-03-15",
    estado:          "Completada"
  }
];


// ── Datos de la plataforma (index.html / footer) ──────────────────
const barberia = {
  nombre:   "StyleUp",
  ciudad:   "Valledupar, Cesar",
  telefono: "+57 300 000 0000",
  email:    "info@styleup.com",
  horario: [
    { dias: "Lun – Vie", horas: "08:00 – 19:00" },
    { dias: "Sábado",    horas: "08:00 – 17:00" },
    { dias: "Domingo",   horas: "Cerrado"        }
  ]
};

// Títulos del panel del sidebar
const titulos = {
  inicio:    'Panel de <span style="color:var(--dorado);font-style:italic;">inicio</span>',
  reservar:  'Nueva <span style="color:var(--dorado);font-style:italic;">reserva</span>',
  miscitas:  'Mis <span style="color:var(--dorado);font-style:italic;">citas</span>',
  historial: '<span style="color:var(--dorado);font-style:italic;">Historial</span> de citas',
  perfil:    'Mi <span style="color:var(--dorado);font-style:italic;">perfil</span>'
};

// Horas disponibles para agendar citas
const horasDisponibles = [
  "09:00", "10:00", "11:00",
  "12:00", "14:00", "15:00", "16:00"
];


// ══════════════════════════════════════════════════════════════════
//  FUNCIONES DE APOYO — Simulan JOINs entre tablas
// ══════════════════════════════════════════════════════════════════

// Devuelve nombre completo de un barbero por cedula_barbero (FK)
function getNombreBarbero(cedula) {
  const b = barberos.find(b => b.cedula_barbero === cedula);
  return b ? `${b.nombre} ${b.apellido}` : "—";
}

// Devuelve el nombre de una especialidad por id_especialidad (FK)
function getNombreEspecialidad(id) {
  const e = especialidades.find(e => e.id_especialidad === id);
  return e ? e.especialidad : "—";
}

// Devuelve el estado de un horario por id_estado (FK)
function getNombreEstado(idEstado) {
  const e = estadosBarbero.find(e => e.id_estado === idEstado);
  return e ? e.estado : "—";
}

// Formatea "2026-03-28" → "28 Mar 2026"
function formatearFecha(fechaISO) {
  if (!fechaISO) return "—";
  const meses = ["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"];
  const [anio, mes, dia] = fechaISO.split("-");
  return `${dia} ${meses[parseInt(mes) - 1]} ${anio}`;
}

// Clase CSS del badge según estado de la cita
function claseBadge(estado) {
  const mapa = {
    "Confirmada": "badge-confirmada",
    "Pendiente":  "badge-pendiente",
    "Completada": "badge-completada",
    "Cancelada":  "badge-cancelada"
  };
  return mapa[estado] || "badge-pendiente";
}


// ══════════════════════════════════════════════════════════════════
//  RENDERIZADO DINÁMICO AL CARGAR EL DOM
// ══════════════════════════════════════════════════════════════════

document.addEventListener("DOMContentLoaded", () => {
  renderizarUsuario();
  renderizarFecha();
  renderizarSelectBarberos();
  renderizarSelectEspecialidades();
  renderizarSelectHoras();
  renderizarTablaCitasProximas();
  renderizarTablaMisCitas();
  renderizarTablaHistorial();
  renderizarPerfil();
});

// — Avatar e info del clienteActual en sidebar y topbar
function renderizarUsuario() {
  const inicial = clienteActual.nombre.charAt(0).toUpperCase();
  ["avatarSidebar", "avatarTopbar", "avatarPerfil"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = inicial;
  });
  const setTxt = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  setTxt("nombreSidebar", `${clienteActual.nombre} ${clienteActual.apellido}`);
  setTxt("emailSidebar",  clienteActual.correo);
}

// — Fecha actual en el topbar
function renderizarFecha() {
  const el = document.getElementById("fechaTopbar");
  if (!el) return;
  el.textContent = new Date().toLocaleDateString("es-CO", {
    weekday: "long", year: "numeric", month: "long", day: "numeric"
  });
}

// — Select de barberos: JOIN BARBEROS + ESPECIALIDADES
function renderizarSelectBarberos() {
  const sel = document.getElementById("selBarbero");
  if (!sel) return;
  sel.innerHTML = '<option value="">Seleccionar barbero</option>';
  barberos.forEach(b => {
    const opt = document.createElement("option");
    opt.value = b.cedula_barbero;
    opt.textContent = `${b.nombre} ${b.apellido} – ${getNombreEspecialidad(b.id_especialidad)}`;
    sel.appendChild(opt);
  });
}

// — Select de especialidades desde tabla ESPECIALIDADES
function renderizarSelectEspecialidades() {
  const sel = document.getElementById("selEspecialidad");
  if (!sel) return;
  sel.innerHTML = '<option value="">Seleccionar servicio</option>';
  especialidades.forEach(e => {
    const opt = document.createElement("option");
    opt.value = e.id_especialidad;
    opt.textContent = `${e.especialidad} – ${e.tiempo_estimado} min`;
    sel.appendChild(opt);
  });
}

// — Select de horas disponibles
function renderizarSelectHoras() {
  const sel = document.getElementById("selHora");
  if (!sel) return;
  sel.innerHTML = '<option value="">Seleccionar hora</option>';
  horasDisponibles.forEach(h => {
    const opt = document.createElement("option");
    opt.value = h;
    opt.textContent = h;
    sel.appendChild(opt);
  });
}

// — Tabla panel inicio: JOIN CITAS + BARBEROS + ESPECIALIDADES
function renderizarTablaCitasProximas() {
  const tbody = document.getElementById("tbodyCitasProximas");
  if (!tbody) return;
  tbody.innerHTML = "";
  citas.forEach(c => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${getNombreEspecialidad(c.id_especialidad)}</td>
      <td>${getNombreBarbero(c.cedula_barbero)}</td>
      <td>${formatearFecha(c.fecha)} · ${c.hora}</td>
      <td><span class="badge-estado ${claseBadge(c.estado)}">${c.estado}</span></td>
    `;
    tbody.appendChild(tr);
  });
}

// — Tabla mis citas completa con botón cancelar
function renderizarTablaMisCitas() {
  const tbody = document.getElementById("tbodyMisCitas");
  if (!tbody) return;
  tbody.innerHTML = "";
  citas.forEach((c, i) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${getNombreEspecialidad(c.id_especialidad)}</td>
      <td>${getNombreBarbero(c.cedula_barbero)}</td>
      <td>${formatearFecha(c.fecha)}</td>
      <td>${c.hora}</td>
      <td><span class="badge-estado ${claseBadge(c.estado)}">${c.estado}</span></td>
      <td><button class="btn-nav" style="font-size:.7rem;padding:.25rem .6rem;" onclick="cancelarCita(${i})">Cancelar</button></td>
    `;
    tbody.appendChild(tr);
  });
}

// — Tabla historial desde HISTORIAL_CITAS con JOINs
function renderizarTablaHistorial() {
  const tbody = document.getElementById("tbodyHistorial");
  if (!tbody) return;
  tbody.innerHTML = "";
  historialCitas.forEach(c => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${getNombreEspecialidad(c.id_especialidad)}</td>
      <td>${getNombreBarbero(c.cedula_barbero)}</td>
      <td>${formatearFecha(c.fecha)}</td>
      <td><span class="badge-estado ${claseBadge(c.estado)}">${c.estado}</span></td>
    `;
    tbody.appendChild(tr);
  });
}

// — Perfil: campos de tabla CLIENTES
function renderizarPerfil() {
  const setTxt = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  const setVal = (id, val) => { const el = document.getElementById(id); if (el) el.value = val; };

  setTxt("nombrePerfil",  `${clienteActual.nombre} ${clienteActual.apellido}`);
  setTxt("emailPerfil",   clienteActual.correo);
  setTxt("miembroPerfil", formatearFecha(clienteActual.fecha_registro));
  // Visitas totales = conteo de registros en HISTORIAL_CITAS del cliente
  setTxt("visitasPerfil", historialCitas.filter(h => h.cedula_cliente === clienteActual.cedula_cliente).length);

  setVal("inputNombre",   `${clienteActual.nombre} ${clienteActual.apellido}`);
  setVal("inputEmail",    clienteActual.correo);
  setVal("inputTelefono", clienteActual.telefono);
  setVal("inputCedula",   clienteActual.cedula_cliente);
}


// ══════════════════════════════════════════════════════════════════
//  INTERACCIONES — Simulan operaciones DML (INSERT / UPDATE / DELETE)
// ══════════════════════════════════════════════════════════════════

// Simula DELETE en CITAS
function cancelarCita(indice) {
  if (!confirm("¿Deseas cancelar esta cita?")) return;
  citas.splice(indice, 1);
  renderizarTablaCitasProximas();
  renderizarTablaMisCitas();
}

// Simula INSERT en CITAS
function confirmarCita() {
  const cedBarbero = document.getElementById("selBarbero").value;
  const idEsp      = document.getElementById("selEspecialidad").value;
  const fecha      = document.getElementById("selFecha").value;
  const hora       = document.getElementById("selHora").value;

  if (!cedBarbero || !idEsp || !fecha || !hora) {
    alert("Por favor completa todos los campos requeridos.");
    return;
  }

  // id_cita generado localmente (en BD lo haría una secuencia/autoincrement)
  const nuevoId = "CIT" + String(citas.length + historialCitas.length + 1).padStart(3, "0");

  const nuevaCita = {
    id_cita:         nuevoId,
    cedula_cliente:  clienteActual.cedula_cliente,   // FK → CLIENTES
    cedula_barbero:  cedBarbero,                      // FK → BARBEROS
    id_especialidad: idEsp,                           // FK → ESPECIALIDADES
    fecha:           fecha,
    hora:            hora,
    estado:          "Pendiente"
  };

  citas.push(nuevaCita);
  renderizarTablaCitasProximas();
  renderizarTablaMisCitas();

  document.getElementById("alertaReserva").style.display = "block";
  setTimeout(() => document.getElementById("alertaReserva").style.display = "none", 3000);

  ["selBarbero", "selEspecialidad", "selFecha", "selHora"].forEach(id => {
    document.getElementById(id).value = "";
  });
  eliminarImagen({ stopPropagation: () => {} });
}

// Simula UPDATE en CLIENTES
function guardarPerfil() {
  const partes = document.getElementById("inputNombre").value.trim().split(" ");
  clienteActual.nombre         = partes[0] || clienteActual.nombre;
  clienteActual.apellido       = partes.slice(1).join(" ") || clienteActual.apellido;
  clienteActual.correo         = document.getElementById("inputEmail").value;
  clienteActual.telefono       = document.getElementById("inputTelefono").value;
  clienteActual.cedula_cliente = document.getElementById("inputCedula").value;

  renderizarUsuario();
  renderizarPerfil();

  document.getElementById("alertaPerfil").style.display = "block";
  setTimeout(() => document.getElementById("alertaPerfil").style.display = "none", 3000);
}


// ══════════════════════════════════════════════════════════════════
//  NAVEGACIÓN Y UI
// ══════════════════════════════════════════════════════════════════

function mostrarPanel(id) {
  document.querySelectorAll(".panel").forEach(p => p.classList.remove("activo"));
  document.querySelectorAll(".nav-item-dash").forEach(n => n.classList.remove("activo"));
  document.getElementById("panel-" + id).classList.add("activo");
  document.querySelectorAll(".nav-item-dash").forEach(n => {
    if (n.getAttribute("onclick") && n.getAttribute("onclick").includes("'" + id + "'"))
      n.classList.add("activo");
  });
  document.getElementById("tituloPagina").innerHTML = titulos[id] || id;
  cerrarSidebar();
}

function abrirSidebar()  {
  document.getElementById("sidebar").classList.add("abierto");
  document.getElementById("overlay").classList.add("visible");
}
function cerrarSidebar() {
  document.getElementById("sidebar").classList.remove("abierto");
  document.getElementById("overlay").classList.remove("visible");
}
function cerrarSesion() { window.location.href = "index.html"; }

// ── Imagen de referencia ──────────────────────────────────────────
function cargarImagen(event) {
  const archivo = event.target.files[0];
  const error   = document.getElementById("errorImagen");
  const tiposPermitidos = ["image/jpeg", "image/png", "image/webp"];
  if (!archivo || !tiposPermitidos.includes(archivo.type)) {
    error.style.display = "block";
    event.target.value  = "";
    return;
  }
  error.style.display = "none";
  const lector = new FileReader();
  lector.onload = e => {
    document.getElementById("previewImg").src            = e.target.result;
    document.getElementById("nombreArchivo").textContent = archivo.name;
    document.getElementById("zonaPlaceholder").style.display = "none";
    document.getElementById("zonaPreview").style.display     = "block";
  };
  lector.readAsDataURL(archivo);
}

function eliminarImagen(event) {
  event.stopPropagation();
  document.getElementById("inputImagen").value          = "";
  document.getElementById("previewImg").src             = "";
  document.getElementById("nombreArchivo").textContent  = "";
  document.getElementById("zonaPlaceholder").style.display = "block";
  document.getElementById("zonaPreview").style.display     = "none";
  document.getElementById("errorImagen").style.display     = "none";
}

// ── Navbar con scroll (index.html) ───────────────────────────────
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navPrincipal");
  if (!navbar) return;
  navbar.classList.toggle("con-scroll", window.scrollY > 40);
});

// ── Scroll suave ─────────────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(enlace => {
  enlace.addEventListener("click", function(e) {
    const destino = document.querySelector(this.getAttribute("href"));
    if (destino) { e.preventDefault(); destino.scrollIntoView({ behavior: "smooth" }); }
  });
});