// Obtiene el contenedor principal donde se renderiza toda la app
const app = document.getElementById("app");

// Elementos de navegación (menú)
const navigationItems = [
  { id: "inicio", label: "Inicio", title: "Ir al inicio" },
  { id: "tabla", label: "Tabla" },
  { id: "galeria", label: "Multimedia" },
  { id: "contacto", label: "Formulario" }
];

// Lista de servicios que se mostrarán en la sección inicio
const serviceItems = ["Landing pages", "Formularios", "Soporte basico"];
// Datos para la tabla de planes
const planRows = [
  { plan: "Basico", incluye: "Pagina informativa, formulario simple", precio: "$49" },
  { plan: "Pro", incluye: "Landing, tabla, integraciones", precio: "$99" },
  { plan: "Premium", incluye: "SEO, analitica, soporte 30 dias", precio: "$149" }
];

// Opciones de select
const provinceOptions = ["", "Provincia 1", "Provincia 2", "Provincia 3"];
const countryOptions = ["", "Colombia", "Brasil", "Peru"];

// Configuración dinámica de los campos del formulario
const formFieldGroups = [
  {
    title: "Nombre y apellidos *",
    fields: [
      { tag: "input", type: "text", name: "nombre", id: "nombre", label: "Nombre" },
      { tag: "input", type: "text", name: "apellido", id: "apellido-1", label: "Primer apellido" },
      { tag: "input", type: "text", name: "apellido", id: "apellido-2", label: "Segundo apellido" }
    ]
  },
  {
    title: "Direccion *",
    fields: [
      { tag: "input", type: "text", name: "direccion", id: "direccion-calle", label: "Calle, numero, piso, puerta" },
      { tag: "input", type: "text", name: "direccion", id: "direccion-postal", label: "Codigo postal" },
      { tag: "input", type: "text", name: "direccion", id: "direccion-municipio", label: "Municipio" },
      { tag: "select", name: "provincia", id: "provincia", label: "Provincia", options: provinceOptions },
      { tag: "select", name: "pais", id: "pais", label: "Pais", options: countryOptions }
    ]
  },
  {
    title: "Email *",
    fields: [
      { tag: "input", type: "email", name: "email", id: "email", label: null, placeholder: "Ingresa tu correo" }
    ]
  },
  {
    title: "Telefono *",
    fields: [
      { tag: "input", type: "text", name: "telefono", id: "telefono", label: "Fijo" },
      { tag: "input", type: "text", name: "movil", id: "movil", label: "Movil" }
    ]
  }
];

// Secciones válidas de la app
const sectionOrder = new Set(["inicio", "tabla", "galeria", "contacto"]);
const sectionTitles = new Map([
  ["inicio", "Servicios de desarrollo web"],
  ["tabla", "Tabla de planes"],
  ["galeria", "Multimedia"],
  ["contacto", "Formulario"]
]);


// Sección actual
let currentSection = "inicio";

// Función reutilizable para crear elementos HTML
function createElement(tag, className, text) {
  const element = document.createElement(tag);

  if (className) {
    element.className = className;
  }

  if (text) {
    element.textContent = text;
  }

  return element;
}


// Crea la estructura base (header, nav, main, footer)
function createLayout() {
  const header = document.createElement("header");
  header.id = "inicio";

  const nav = document.createElement("nav");
  nav.setAttribute("aria-label", "Navegacion principal");
  nav.className = "main-nav";

    // Crear botones del menú
  for (const item of navigationItems) {
    const link = document.createElement("button");
    link.type = "button";
    link.textContent = item.label;
    link.dataset.section = item.id;

    if (item.title) {
      link.title = item.title;
    }

    nav.appendChild(link);
  }

  const main = document.createElement("main");
  main.id = "content";

  const footer = document.createElement("footer");
  const footerText = document.createElement("p");
  footerText.textContent = "Contacto: info@ejemplo.com";
  footer.appendChild(footerText);

  header.appendChild(nav);
  app.append(header, main, footer);
}

// Sección de servicios (inicio)
function createServicesSection() {
  const section = document.createElement("section");
  section.id = "servicios";

  section.appendChild(createElement("h1", "", sectionTitles.get("inicio")));


    // Lista de servicios
  const list = document.createElement("ul");
  for (const item of serviceItems) {
    list.appendChild(createElement("li", "", item));
  }

  const figure = document.createElement("figure");
  const image = document.createElement("img");
  image.src = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=60";
  image.alt = "Equipo de trabajo con laptop";
  image.width = 420;
  image.height = 280;
  image.loading = "lazy";

  const caption = document.createElement("figcaption");
  caption.textContent = "Trabajo remoto y soluciones a medida.";

  figure.append(image, caption);
  section.append(list, figure);

  return section;
}


// Sección de tabla de planes
function createTableSection() {
  const section = document.createElement("section");
  section.id = "tabla";
  section.appendChild(createElement("h2", "", sectionTitles.get("tabla")));

  const table = document.createElement("table");
  const caption = document.createElement("caption");
  caption.textContent = "Comparacion de planes";


    // Encabezados
  const thead = document.createElement("thead");
  const headRow = document.createElement("tr");
  ["Plan", "Incluye", "Precio"].forEach((title) => {
    const th = document.createElement("th");
    th.scope = "col";
    th.textContent = title;
    headRow.appendChild(th);
  });

    // Cuerpo de la tabla
  const tbody = document.createElement("tbody");
  let index = 0;
  while (index < planRows.length) {
    const row = planRows[index];
    const tr = document.createElement("tr");

    const plan = document.createElement("th");
    plan.scope = "row";
    plan.textContent = row.plan;

    const incluye = createElement("td", "", row.incluye);
    const precio = createElement("td", "", row.precio);

    tr.append(plan, incluye, precio);
    tbody.appendChild(tr);
    index += 1;
  }

  thead.appendChild(headRow);
  table.append(caption, thead, tbody);
  section.appendChild(table);

  return section;
}


// Sección multimedia (video)
function createGallerySection() {
  const section = document.createElement("section");
  section.id = "galeria";
  section.appendChild(createElement("h2", "", sectionTitles.get("galeria")));

  const iframe = document.createElement("iframe");
  iframe.width = "835";
  iframe.height = "470";
  iframe.src = "https://www.youtube.com/embed/ksYfa0ix9S4";
  iframe.title = "Que es el Servicio de Desarrollo Web? Caracteristicas y sus beneficios";
  iframe.frameBorder = "0";
  iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
  iframe.referrerPolicy = "strict-origin-when-cross-origin";
  iframe.allowFullscreen = true;

  const link = document.createElement("a");
  link.href = "https://www.youtube.com/watch?v=9on_3vtGM68";
  link.textContent = "Accede aqui para ver otro similar";

  section.append(iframe, link);
  return section;
}


// Crear campos del formulario dinámicamente
function createField(field) {
  const wrapper = createElement("div", "field");
  const input = document.createElement(field.tag);


  input.name = field.name;
  input.id = field.id;

    // Si es input
  if (field.tag === "input") {
    input.type = field.type;
    if (field.placeholder) {
      input.placeholder = field.placeholder;
    }
  }
// Si es select
  if (field.tag === "select" && field.options) {
    wrapper.appendChild(input);

    for (let optionIndex = 0; optionIndex < field.options.length; optionIndex += 1) {
      const optionText = field.options[optionIndex];
      const option = document.createElement("option");
      option.value = optionText.toLowerCase().replaceAll(" ", "-");
      option.selected = optionIndex === 0;
      option.textContent = optionText;
      input.appendChild(option);
    }
  } else {
    wrapper.appendChild(input);
  }


    // Agregar label si existe
  if (field.label) {
    const label = document.createElement("label");
    label.htmlFor = field.id;
    label.textContent = field.label;
    wrapper.appendChild(label);
  }

  return wrapper;
}


// Sección formulario
function createContactSection() {
  const section = document.createElement("section");
  section.id = "contacto";
  section.appendChild(createElement("h1", "", sectionTitles.get("contacto")));

  const box = createElement("div", "cajaformulario");
  const form = document.createElement("form");
  form.action = "formulario2.html";
  form.method = "post";


    // Crear grupos de campos
  for (const group of formFieldGroups) {
    form.appendChild(createElement("h2", "", group.title));

    for (const field of group.fields) {
      form.appendChild(createField(field));
    }

    if (group.title === "Telefono *") {
      form.appendChild(document.createElement("br"));
    }
  }

  const button = createElement("button", "", "Enviar");
  button.type = "submit";
  form.appendChild(button);

  box.appendChild(form);
  section.appendChild(box);

  return section;
}


// Renderiza la sección según el botón seleccionado
function renderSection(sectionId) {
  const main = document.getElementById("content");
  main.innerHTML = "";

  // Controla que contenido se muestra sin recargar ni reconstruir toda la pagina.
  switch (sectionId) {
    case "inicio":
      main.appendChild(createServicesSection());
      break;
    case "tabla":
      main.appendChild(createTableSection());
      break;
    case "galeria":
      main.appendChild(createGallerySection());
      break;
    case "contacto":
      main.appendChild(createContactSection());
      break;
    default:
      main.appendChild(createServicesSection());
      break;
  }

  applySectionAttributes();
// Configura la navegación (eventos click)
  const buttons = document.querySelectorAll(".main-nav button");
  for (const button of buttons) {
    if (button.dataset.section === sectionId) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  }
}

// Configura la navegación (detecta clicks en el menú)
function setupNavigation() {
  const nav = document.querySelector(".main-nav");

  nav.addEventListener("click", (event) => {
    const target = event.target;

    if (!(target instanceof HTMLButtonElement)) {
      return;
    }

    const nextSection = target.dataset.section;

    if (!sectionOrder.has(nextSection)) {
      return;
    }

    if (nextSection !== currentSection) {
      currentSection = nextSection;
      renderSection(currentSection);
    }
  });
}



// Aplica atributos dinámicos a cada sección renderizada
function applySectionAttributes() {
  const sections = document.querySelectorAll("main section");

  for (const section of sections) {
    const heading = section.querySelector("h1, h2");

    if (heading) {
      section.dataset.title = heading.textContent;
    }
  }
}
// Inicializa la app
function init() {
  if (!app) {
    return;
  }

  createLayout();
  setupNavigation();
  renderSection(currentSection);
}
// Ejecuta la app
init();
