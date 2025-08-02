document.querySelectorAll('.link').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        btn.classList.add('animated');
    });
    btn.addEventListener('animationend', () => {
        btn.classList.remove('animated');
    });
});
//animacion al pasar y hacer click 
document.querySelectorAll('.link').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        btn.classList.add('animated');
    });
    btn.addEventListener('animationend', () => {
        btn.classList.remove('animated');
    });
    btn.addEventListener('click', () => {
        btn.classList.add('animated');
        setTimeout(() => {
            btn.classList.remove('animated');
        }, 300);
    });
});
// Animación de entrada secuencial para los links
window.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.link');
    links.forEach((btn, i) => {
        setTimeout(() => {
            btn.classList.add('fade-in-link');
        }, 400 * i);
    });
});