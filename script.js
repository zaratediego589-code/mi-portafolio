const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.classList.add("nav-scroll");
    } else {
        navbar.classList.remove("nav-scroll");
    }

});

const progresos = document.querySelectorAll(".progreso");

const observador = new IntersectionObserver((entradas) => {

    entradas.forEach((entrada) => {

        if (entrada.isIntersecting) {

            const porcentaje = entrada.target.dataset.porcentaje;

            entrada.target.style.width = porcentaje + "%";

            observador.unobserve(entrada.target);
        }

    });

}, {
    threshold: 0.5
});

progresos.forEach((progreso) => {
    observador.observe(progreso);
});