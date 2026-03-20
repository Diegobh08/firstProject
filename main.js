// ============================================================
// Datos de la aplicacion (colecciones y objetos)
// ============================================================

// Array con los elementos de la barra de navegacion
const navItems = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'tabla', label: 'Planes' },
  { id: 'galeria', label: 'Multimedia' },
  { id: 'contacto', label: 'Contacto' }
];

// Array con los servicios que se ofrecen
const servicios = [
  'Landing pages',
  'Formularios interactivos',
  'Soporte basico',
  'Diseno responsive',
  'Integracion de APIs'
];

// Map: asocia el nombre del plan con sus detalles
const planesMap = new Map([
  ['Basico',  { incluye: 'Pagina informativa, formulario simple', precio: '$49'  }],
  ['Pro',     { incluye: 'Landing, tabla, integraciones',         precio: '$99'  }],
  ['Premium', { incluye: 'SEO, analítica, soporte 30 dias',      precio: '$149' }]
]);

// Set: tecnologias utilizadas (los duplicados se eliminan automaticamente)
const tecnologias = new Set(['HTML', 'CSS', 'JavaScript', 'HTML', 'Git', 'CSS']);

// Array de provincias para el formulario
const provincias = ['Provincia 1', 'Provincia 2', 'Provincia 3'];

// Array de paises para el formulario
const paises = ['Colombia', 'Brasil', 'Peru'];

// Set: registra las secciones que el usuario ha visitado
const seccionesVisitadas = new Set();

// ============================================================
// Generadores de contenido por seccion
// ============================================================

// Genera la seccion de inicio con servicios y tecnologias
function generarInicio() {
  const seccion = document.createElement('section');
  seccion.id = 'inicio';

  const h1 = document.createElement('h1');
  h1.textContent = 'Servicios de desarrollo web';
  seccion.appendChild(h1);

  // Bucle for para construir la lista de servicios desde el array
  const ul = document.createElement('ul');
  for (let i = 0; i < servicios.length; i++) {
    const li = document.createElement('li');
    li.textContent = servicios[i];
    ul.appendChild(li);
  }
  seccion.appendChild(ul);

  // Mostrar las tecnologias del Set usando for...of
  const h2Tec = document.createElement('h2');
  h2Tec.textContent = 'Tecnologías utilizadas';
  seccion.appendChild(h2Tec);

  const tecDiv = document.createElement('div');
  tecDiv.className = 'tecnologias';
  for (const tec of tecnologias) {
    const span = document.createElement('span');
    span.className = 'tag';
    span.textContent = tec;
    tecDiv.appendChild(span);
  }
  seccion.appendChild(tecDiv);

  // Imagen representativa de la seccion
  const figure = document.createElement('figure');
  const img = document.createElement('img');
  img.src = 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=60';
  img.alt = 'Equipo de trabajo con laptop';
  img.width = 420;
  img.height = 280;
  img.loading = 'lazy';
  const figcaption = document.createElement('figcaption');
  figcaption.textContent = 'Trabajo remoto y soluciones a medida.';
  figure.appendChild(img);
  figure.appendChild(figcaption);
  seccion.appendChild(figure);

  return seccion;
}

// Genera la seccion de tabla de planes a partir del Map
function generarTabla() {
  const seccion = document.createElement('section');
  seccion.id = 'tabla';

  const h2 = document.createElement('h2');
  h2.textContent = 'Tabla de planes';
  seccion.appendChild(h2);

  const tabla = document.createElement('table');
  const caption = document.createElement('caption');
  caption.textContent = 'Comparación de planes';
  tabla.appendChild(caption);

  // Encabezado de la tabla usando forEach sobre un array
  const thead = document.createElement('thead');
  const trHead = document.createElement('tr');
  ['Plan', 'Incluye', 'Precio'].forEach(function(col) {
    const th = document.createElement('th');
    th.scope = 'col';
    th.textContent = col;
    trHead.appendChild(th);
  });
  thead.appendChild(trHead);
  tabla.appendChild(thead);

  // Cuerpo de la tabla recorriendo el Map con forEach
  const tbody = document.createElement('tbody');
  planesMap.forEach(function(detalles, plan) {
    const tr = document.createElement('tr');

    const thPlan = document.createElement('th');
    thPlan.scope = 'row';
    thPlan.textContent = plan;
    tr.appendChild(thPlan);

    const tdIncluye = document.createElement('td');
    tdIncluye.textContent = detalles.incluye;
    tr.appendChild(tdIncluye);

    const tdPrecio = document.createElement('td');
    tdPrecio.textContent = detalles.precio;
    tr.appendChild(tdPrecio);

    tbody.appendChild(tr);
  });
  tabla.appendChild(tbody);
  seccion.appendChild(tabla);

  return seccion;
}

// Genera la seccion multimedia con iframe y enlace
function generarGaleria() {
  const seccion = document.createElement('section');
  seccion.id = 'galeria';

  const h2 = document.createElement('h2');
  h2.textContent = 'Multimedia';
  seccion.appendChild(h2);

  const iframe = document.createElement('iframe');
  iframe.width = '835';
  iframe.height = '470';
  iframe.src = 'https://www.youtube.com/embed/ksYfa0ix9S4';
  iframe.title = 'Qué es el Servicio de Desarrollo Web?';
  iframe.frameBorder = '0';
  iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
  iframe.referrerPolicy = 'strict-origin-when-cross-origin';
  iframe.allowFullscreen = true;
  seccion.appendChild(iframe);

  // Enlace adicional al video relacionado
  const enlace = document.createElement('a');
  enlace.href = 'https://www.youtube.com/watch?v=9on_3vtGM68';
  enlace.textContent = 'Accede aquí para ver otro similar';
  enlace.target = '_blank';
  enlace.rel = 'noopener noreferrer';
  seccion.appendChild(enlace);

  return seccion;
}

// Genera el formulario de contacto con campos creados dinamicamente
function generarContacto() {
  const seccion = document.createElement('section');
  seccion.id = 'contacto';

  const h1 = document.createElement('h1');
  h1.textContent = 'Formulario de Contacto';
  seccion.appendChild(h1);

  const caja = document.createElement('div');
  caja.className = 'cajaformulario';

  const form = document.createElement('form');
  form.action = '#';
  form.method = 'post';

  // Array de configuracion para los campos de nombre
  const camposNombre = [
    { name: 'nombre',    id: 'nombre',    label: 'Nombre',          type: 'text' },
    { name: 'apellido1', id: 'apellido1', label: 'Primer apellido', type: 'text' },
    { name: 'apellido2', id: 'apellido2', label: 'Segundo apellido',type: 'text' }
  ];

  // Array de configuracion para los campos de direccion
  const camposDireccion = [
    { name: 'direccion', id: 'direccion', label: 'Calle, número, piso, puerta', type: 'text' },
    { name: 'cp',        id: 'cp',        label: 'Código postal',               type: 'text' },
    { name: 'municipio', id: 'municipio', label: 'Municipio',                   type: 'text' }
  ];

  // Funcion auxiliar para crear un grupo de campos con titulo
  function crearCampos(título, campos) {
    const h2 = document.createElement('h2');
    h2.textContent = título + ' *';
    form.appendChild(h2);

    // Bucle for...of para iterar sobre la configuracion de campos
    for (const campo of campos) {
      const input = document.createElement('input');
      input.type = campo.type;
      input.name = campo.name;
      input.id = campo.id;
      form.appendChild(input);

      const label = document.createElement('label');
      label.htmlFor = campo.id;
      label.textContent = campo.label;
      form.appendChild(label);
    }
  }

  crearCampos('Nombre y apellidos', camposNombre);
  crearCampos('Dirección', camposDireccion);

  // Select de provincia: opciones generadas con bucle while
  const h2Prov = document.createElement('h2');
  h2Prov.textContent = 'Provincia *';  form.appendChild(h2Prov);

  const selectProvincia = document.createElement('select');
  selectProvincia.name = 'provincia';
  selectProvincia.id = 'provincia';
  const optDefProv = document.createElement('option');
  optDefProv.value = '';
  optDefProv.textContent = '-- Selecciona --';
  selectProvincia.appendChild(optDefProv);

  // Bucle while para agregar las opciones de provincia
  let i = 0;
  while (i < provincias.length) {
    const opt = document.createElement('option');
    opt.value = provincias[i].toLowerCase().replace(/\s+/g, '-');
    opt.textContent = provincias[i];
    selectProvincia.appendChild(opt);
    i++;
  }
  form.appendChild(selectProvincia);

  const labelProv = document.createElement('label');
  labelProv.htmlFor = 'provincia';
  labelProv.textContent = 'Provincia';
  form.appendChild(labelProv);

  // Select de pais: opciones generadas con for...of
  const h2Pais = document.createElement('h2');
  h2Pais.textContent = 'País *';
  form.appendChild(h2Pais);

  const selectPais = document.createElement('select');
  selectPais.name = 'pais';
  selectPais.id = 'pais';
  const optDefPais = document.createElement('option');
  optDefPais.value = '';
  optDefPais.textContent = '-- Selecciona --';
  selectPais.appendChild(optDefPais);

  for (const pais of paises) {
    const opt = document.createElement('option');
    opt.value = pais.toLowerCase();
    opt.textContent = pais;
    selectPais.appendChild(opt);
  }
  form.appendChild(selectPais);

  const labelPais = document.createElement('label');
  labelPais.htmlFor = 'pais';
  labelPais.textContent = 'País';
  form.appendChild(labelPais);

  // Campo de email
  const h2Email = document.createElement('h2');
  h2Email.textContent = 'Email *';
  form.appendChild(h2Email);
  const inputEmail = document.createElement('input');
  inputEmail.type = 'email';
  inputEmail.name = 'email';
  inputEmail.id = 'email';
  inputEmail.placeholder = 'Ingresa tu correo';
  form.appendChild(inputEmail);

  // Campos de telefono generados con for y un array
  const h2Tel = document.createElement('h2');
  h2Tel.textContent = 'Teléfono *';
  form.appendChild(h2Tel);

  const telefonos = [
    { name: 'fijo',  id: 'fijo',  label: 'Fijo',  type: 'tel' },
    { name: 'movil', id: 'movil', label: 'Móvil', type: 'tel' }
  ];
  for (const tel of telefonos) {
    const input = document.createElement('input');
    input.type = tel.type;
    input.name = tel.name;
    input.id = tel.id;
    form.appendChild(input);

    const label = document.createElement('label');
    label.htmlFor = tel.id;
    label.textContent = tel.label;
    form.appendChild(label);
  }

  form.appendChild(document.createElement('br'));

  const button = document.createElement('button');
  button.type = 'submit';
  button.textContent = 'Enviar';
  form.appendChild(button);

  // Manejador de envio del formulario con validacion
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (validarFormulario(form)) {
      alert('Formulario enviado correctamente');
    }
  });

  caja.appendChild(form);
  seccion.appendChild(caja);

  return seccion;
}

// Validacion basica del formulario usando if
function validarFormulario(form) {
  const nombre = form.querySelector('#nombre').value.trim();
  if (nombre === '') {
    alert('Por favor, introduce tu nombre');
    return false;
  }

  const email = form.querySelector('#email').value.trim();
  if (email === '') {
    alert('Por favor, introduce tu email');
    return false;
  }

  // Si todo es correcto, retornamos true
  return true;
}

// ============================================================
// Map de secciones: asocia cada ID con su funcion generadora
// ============================================================
const seccionesGeneradoras = new Map([
  ['inicio',   generarInicio],
  ['tabla',    generarTabla],
  ['galeria',  generarGaleria],
  ['contacto', generarContacto]
]);

// ============================================================
// Navegacion tipo SPA (Single Page Application)
// ============================================================

// Variable que almacena la seccion actualmente visible
let seccionActual = 'inicio';

// Muestra la seccion indicada limpiando el contenido anterior
function mostrarSeccion(idSeccion) {
  const contenido = document.getElementById('contenido-principal');

  // Registrar en el Set que esta seccion ha sido visitada
  seccionesVisitadas.add(idSeccion);

  // Switch para emitir un mensaje de consola segun la seccion
  switch (idSeccion) {
    case 'inicio':
      console.log('Mostrando seccion de inicio');
      break;
    case 'tabla':
      console.log('Mostrando tabla de planes');
      break;
    case 'galeria':
      console.log('Mostrando galeria multimedia');
      break;
    case 'contacto':
      console.log('Mostrando formulario de contacto');
      break;
    default:
      console.log('Seccion desconocida: ' + idSeccion);
      return;
  }

  // Limpiar el contenido actual del main
  contenido.innerHTML = '';

  // Obtener el generador desde el Map y construir la seccion
  if (seccionesGeneradoras.has(idSeccion)) {
    const generador = seccionesGeneradoras.get(idSeccion);
    const nuevaSeccion = generador();
    contenido.appendChild(nuevaSeccion);
  }

  // Actualizar el enlace activo en la navegacion
  actualizarNavActiva(idSeccion);
  seccionActual = idSeccion;
}

// Marca el enlace de la seccion actual como activo en la navegacion
function actualizarNavActiva(idActivo) {
  const enlaces = document.querySelectorAll('#nav-principal a');
  for (const enlace of enlaces) {
    if (enlace.dataset.seccion === idActivo) {
      enlace.classList.add('activo');
    } else {
      enlace.classList.remove('activo');
    }
  }
}

// ============================================================
// Inicializacion de la aplicacion
// ============================================================

function inicializar() {
  // Generar los enlaces de navegacion desde el array navItems
  const nav = document.getElementById('nav-principal');
  for (const item of navItems) {
    const a = document.createElement('a');
    a.href = '#';
    a.textContent = item.label;
    a.dataset.seccion = item.id;

    // Al hacer clic, mostrar la seccion correspondiente sin recargar la pagina
    a.addEventListener('click', function(e) {
      e.preventDefault();
      mostrarSeccion(item.id);
    });

    nav.appendChild(a);
  }

  // Generar el pie de pagina
  const footer = document.getElementById('pie-pagina');
  const p = document.createElement('p');
  p.textContent = 'Contacto: info@ejemplo.com';
  footer.appendChild(p);

  // Mostrar la seccion de inicio al arrancar
  mostrarSeccion('inicio');
}

// Arrancar la aplicacion cuando el DOM este listo
document.addEventListener('DOMContentLoaded', inicializar);
