const servicios = ["Landing pages", "Formularios", "Soporte basico"];
const planes = [
    { plan: "Basico", incluye: "Pagina informativa, formulario simple", precio: "$49" },
    { plan: "Pro", incluye: "Landing, tabla, integraciones", precio: "$99" },
    { plan: "Premium", incluye: "SEO, analitica, soporte 30 dias", precio: "$149" }
];
const provincias = ["Provincia 1", "Provincia 2", "Provincia 3"];
const paises = ["Colombia", "Brasil", "Peru"];

// Map para relacionar cada boton con su seccion correspondiente.
const sections = new Map([
    ["inicio", document.getElementById("inicio-section")],
    ["tabla", document.getElementById("tabla-section")],
    ["galeria", document.getElementById("galeria-section")],
    ["contacto", document.getElementById("contacto-section")]
]);

function fillServicios() {
    const lista = document.getElementById("servicios-lista");
    let items = "";

    for (let i = 0; i < servicios.length; i += 1) {
        items += `<li>${servicios[i]}</li>`;
    }

    lista.innerHTML = items;
}

function fillPlanes() {
    const tbody = document.getElementById("planes-body");
    let filas = "";
    let index = 0;

    // while para cumplir el requisito del ejercicio.
    while (index < planes.length) {
        filas += `
            <tr>
                <th scope="row">${planes[index].plan}</th>
                <td>${planes[index].incluye}</td>
                <td>${planes[index].precio}</td>
            </tr>
        `;
        index += 1;
    }

    tbody.innerHTML = filas;
}

function fillSelectOptions() {
    const provinciaSelect = document.getElementById("provincia");
    const paisSelect = document.getElementById("pais");
    let provinciasHTML = '<option value="" selected></option>';
    let paisesHTML = '<option value="" selected></option>';

    for (const provincia of provincias) {
        provinciasHTML += `<option value="${provincia.toLowerCase().replaceAll(" ", "")}">${provincia}</option>`;
    }

    for (const pais of paises) {
        paisesHTML += `<option value="${pais.toLowerCase()}">${pais}</option>`;
    }

    provinciaSelect.innerHTML = provinciasHTML;
    paisSelect.innerHTML = paisesHTML;
}

function showSection(sectionKey) {
    const buttons = document.querySelectorAll(".nav-button");

    if (!sections.has(sectionKey)) {
        return;
    }

    for (const [key, section] of sections) {
        if (key === sectionKey) {
            section.classList.remove("is-hidden");
        } else {
            section.classList.add("is-hidden");
        }
    }

    for (const button of buttons) {
        if (button.dataset.section === sectionKey) {
            button.classList.add("is-active");
        } else {
            button.classList.remove("is-active");
        }
    }

    switch (sectionKey) {
        case "inicio":
        case "tabla":
        case "galeria":
        case "contacto":
            break;
        default:
            break;
    }
}

function submitForm(event) {
    const form = document.getElementById("contact-form");
    const message = document.getElementById("form-message");

    event.preventDefault();

    if (form.checkValidity()) {
        message.textContent = "Se envio el formulario exitosamente.";
        message.classList.remove("is-hidden");
        alert("Se envio el formulario exitosamente.");
        form.reset();
    } else {
        message.textContent = "Completa los campos obligatorios.";
        message.classList.remove("is-hidden");
    }

    return false;
}

fillServicios();
fillPlanes();
fillSelectOptions();
showSection("inicio");

// Estas funciones quedan globales para que el HTML las use directamente.
window.mostrarSeccion = showSection;
window.enviarFormulario = submitForm;
