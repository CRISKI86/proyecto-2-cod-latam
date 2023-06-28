const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const menu = document.querySelector('nav .container ul');

// Abrir menú
menuBtn.addEventListener('click', () => {
    menu.style.display = 'block';
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'inline-block';
}
)

// Cerrar menú
closeBtn.addEventListener('click', () => {
    menu.style.display = 'none';
    menuBtn.style.display = 'inline-block';
    closeBtn.style.display = 'none';
}
)

// Clase activa

const navItems = menu.querySelectorAll('li');

const changeActiveItem = () => {
    navItems.forEach(item => {
        const link = item.querySelector('a');
        link.classList.remove('active');
    })
}

navItems.forEach(item => {
    const link = item.querySelector('a');
    link.addEventListener('click', () => {
        changeActiveItem();
        link.classList.add('active');
    })
})

//  Desplegar Habilidades

const skillItems = document.querySelectorAll('section.habilidades .habilidad');

skillItems.forEach(habilidad => {
    habilidad.querySelector('.cabecera-lista').addEventListener('click', () => {
        habilidad.querySelector('.items').classList.toggle('area-progreso');
    })
})