
AOS.init({
    duration: 800,
    offset: 50,
    easing: 'ease-in-out',
    once: true,
});

// // Selección del botón "Ir Arriba"
// const btnUp = document.getElementById("btn-up");

// // Mostrar/Ocultar el botón al hacer scroll
// window.addEventListener('scroll', () => {
//     const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
//     btnUp.style.display = scrollTop > 200 ? 'block' : 'none';
// });

// // Desplazamiento suave al hacer clic
// btnUp.addEventListener('click', () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
// });

document.addEventListener('DOMContentLoaded', () => {
    const backToTopButton = document.getElementById('backToTop');
    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 200) {
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        });

        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        });
    }
});