window.addEventListener("load", () => {
  const slides = document.querySelectorAll(".slideshow .slide");
  let current = 0;

  setInterval(() => {
    // oculta la actual
    slides[current].classList.remove("active");
    // calcula siguiente índice
    current = (current + 1) % slides.length;
    // muestra la siguiente
    slides[current].classList.add("active");
  }, 5000);
});

const btnMostrar = document.getElementById("btn-mostrar");
const extraDestinos = document.querySelector(".extra-destinos");

btnMostrar.addEventListener("click", function () {
  const estilo = window.getComputedStyle(extraDestinos).display;
  if (estilo === "none") {
    extraDestinos.style.display = "flex";
    btnMostrar.textContent = "Mostrar menos destinos";
  } else {
    extraDestinos.style.display = "none";
    btnMostrar.textContent = "Mostrar más destinos";
  }
});

const form = document.getElementById("bookingForm");
const msg = document.getElementById("formMsg");
const select = form.querySelector('select[name="destination"]');

// Manejar formulario
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = form.fullName.value.trim();
  const email = form.email.value.trim();
  const destination = select.value;
  const date = form.checkIn.value;

  if (!name || !email || !destination || !date) {
    msg.textContent = "Completa todos los campos.";
    msg.style.color = "red";
    return;
  }

  msg.textContent = `Gracias ${name}, hemos recibido tu reserva para ${destination}.`;
  msg.style.color = "green";
  form.reset();
});

// Botones "Reservar" - seleccionar destino automáticamente
const botones = document.querySelectorAll(".reserve-btn");
botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    const destino = boton.getAttribute("data-destino");
    if (select) {
      select.value = destino;
    }
  });
});
function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("show");
}
function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("show");
}
const btnMostrar = document.getElementById("btn-mostrar");
const extraDestinos = document.querySelector(".extra-destinos");

btnMostrar.addEventListener("click", function () {
  if (extraDestinos.style.display === "none") {
    extraDestinos.style.display = "flex";
    btnMostrar.textContent = "Mostrar menos destinos";
  } else {
    extraDestinos.style.display = "none";
    btnMostrar.textContent = "Mostrar más destinos";
  }
});
const carrusel = document.getElementById("carrusel");
let index = 0;

function deslizarCarrusel() {
  index = (index + 1) % carrusel.children.length;
  carrusel.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(deslizarCarrusel, 3000);
document
  .getElementById("formularioViaje")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const telefono = document.getElementById("telefono").value;
    const destino = document.getElementById("destino").value;
    const personas = document.getElementById("personas").value;
    const menores = document.getElementById("menores").value;
    const llegada = document.getElementById("llegada").value;
    const salida = document.getElementById("salida").value;

    const mensaje =
      `Hola, quiero reservar un viaje con OSARA:\n\n` +
      `👤 Nombre: ${nombre}\n📧 Correo: ${correo}\n📱 Teléfono: ${telefono}\n` +
      `📍 Destino: ${destino}\n👨 Personas: ${personas}, 👶 Menores: ${menores}\n` +
      `📅 Llegada: ${llegada}\n📅 Salida: ${salida}`;

    const url = `https://wa.me/5214435252401?text=${encodeURIComponent(
      mensaje
    )}`;
    window.open(url, "_blank");
  });
$(document).ready(function () {
  $("#destino").select2({
    placeholder: "Selecciona un destino",
    allowClear: true
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const btnMostrar = document.getElementById("btn-mostrar");
  const extraDestinos = document.querySelector(".extra-destinos");

  if (btnMostrar && extraDestinos) {
    btnMostrar.addEventListener("click", function () {
      if (
        extraDestinos.style.display === "none" ||
        extraDestinos.style.display === ""
      ) {
        extraDestinos.style.display = "flex";
        btnMostrar.textContent = "Mostrar menos destinos";
      } else {
        extraDestinos.style.display = "none";
        btnMostrar.textContent = "Mostrar más destinos";
      }
    });
  }
});
// JavaScript (opcional): efecto de scroll fade-in
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".promo-card");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          observer.unobserve(e.target);
        }
      });
    },
    { threshold: 0.2 }
  );
  cards.forEach((card) => {
    card.style.opacity = 0;
    card.style.transform = "translateY(20px)";
    observer.observe(card);
  });
});

// Añade en CSS:
/*
.promo-card.visible {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
*/
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".menu");

  if (!hamburger || !menu) {
    console.error("Falta .hamburger o .menu en el DOM");
    return;
  }

  hamburger.addEventListener("click", () => {
    menu.classList.toggle("show");
  });
});
