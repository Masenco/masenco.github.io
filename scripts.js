function activarMenu() {
    const menuToggle = document.querySelector('.toggle-menu');
    const nav = document.querySelector('.nav');
    menuToggle.classList.toggle('active');
    nav.classList.toggle('active');
}

function desactivarMenu () {
    const desactivarMenu = document.querySelector('.nav');
    desactivarMenu.classList.remove('active');
    const cerrarToggle = document.querySelector('.toggle-menu');
    cerrarToggle.classList.remove('active');
}

