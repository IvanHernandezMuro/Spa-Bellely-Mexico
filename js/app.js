document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burger');
    const navLinks = document.getElementById('navLinks');

    burger.addEventListener('click', () => {
        // Toggle (alternar) la clase 'active' para mostrar/ocultar el menú
        navLinks.classList.toggle('active');
    });

    // Opcional: Cerrar el menú al hacer clic en un enlace (solo en móvil)
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });
});