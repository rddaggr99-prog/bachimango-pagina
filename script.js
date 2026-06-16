const elementos = document.querySelectorAll(".animar");
const observador = new IntersectionObserver((entradas) => {
entradas.forEach((entrada) => {
if (entrada.isIntersecting) {
entrada.target.classList.add("visible");
}
});
},{
threshold:0.15
});
elementos.forEach((elemento) => {
observador.observe(elemento);
});
window.addEventListener("load", () => {
const titulo = document.querySelector(".hero h2");
if(titulo){
const textoOriginal = titulo.textContent;
titulo.textContent = "";
let indice = 0;
const escribir = () => {
if(indice < textoOriginal.length){
titulo.textContent += textoOriginal.charAt(indice);
indice++;
setTimeout(escribir, 45);
}
};
escribir();
}
});
const tarjetas = document.querySelectorAll(".tarjeta, .producto-card, .capacitacion-card");
tarjetas.forEach((tarjeta) => {
tarjeta.addEventListener("mouseenter", () => {
tarjeta.style.transform = "translateY(-10px) scale(1.02)";
});
tarjeta.addEventListener("mouseleave", () => {
tarjeta.style.transform = "";
});
});
const botones = document.querySelectorAll(".boton");
botones.forEach((boton) => {
boton.addEventListener("mouseenter", () => {
boton.style.transform = "scale(1.08)";
});
boton.addEventListener("mouseleave", () => {
boton.style.transform = "scale(1)";
});
});
const secciones = document.querySelectorAll("section");
secciones.forEach((seccion, index) => {
seccion.style.opacity = "0";
seccion.style.transform = "translateY(30px)";
seccion.style.transition = "0.8s ease";
setTimeout(() => {
seccion.style.opacity = "1";
seccion.style.transform = "translateY(0)";
}, 200 * index);
});
window.addEventListener("load", () => {
console.log("BachiMango cargado correctamente");
});
document.querySelectorAll('a[href^="#"]').forEach((ancla) => {
ancla.addEventListener("click", function(e) {
e.preventDefault();
const destino = document.querySelector(this.getAttribute("href"));
if(destino){
destino.scrollIntoView({
behavior:"smooth"
});
}
});
});
tarjetas.forEach((tarjeta) => {
tarjeta.addEventListener("mousemove", (e) => {
const rect = tarjeta.getBoundingClientRect();
const x = e.clientX - rect.left;
const y = e.clientY - rect.top;
tarjeta.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(236,72,153,0.12), white 40%)`;
});
tarjeta.addEventListener("mouseleave", () => {
tarjeta.style.background = "white";
});
});