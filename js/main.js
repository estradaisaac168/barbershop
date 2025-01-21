// Selección del botón "Ir Arriba"
const btnUp = document.getElementById("btn-up");

// Mostrar/Ocultar el botón al hacer scroll
window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    btnUp.style.display = scrollTop > 200 ? 'block' : 'none';
});

// Desplazamiento suave al hacer clic
btnUp.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});