// Mostrar o esconder el botón al hacer scroll
window.addEventListener("scroll", () => {
  const boton = document.getElementById("btnArriba");
  if (window.scrollY > 300) {
    boton.style.display = "block";
  } else {
    boton.style.display = "none";
  }
});

// Función para volver al inicio suavemente
function volverArriba() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
