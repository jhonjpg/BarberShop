const items = document.querySelectorAll('.carousel-item');
const controls = document.querySelectorAll('.carousel-control');

let currentItem = 0;

function showItem(index) {
    items.forEach((item, i) => {
        if (i === index) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });

    controls.forEach((control, i) => {
        if (i === index) {
            control.classList.add('active');
        } else {
            control.classList.remove('active');
        }
    });
}

function nextItem() {
    currentItem = (currentItem + 1) % items.length;
    showItem(currentItem);
}

setInterval(nextItem, 5000);

showItem(currentItem);


//observer

const sections = document.querySelectorAll('.fade-in');

const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            sectionObserver.unobserve(entry.target);

        }
    });
}, {
    threshold: 0.5
});

sections.forEach(section => {
    sectionObserver.observe(section);
});


const masInformacionBtn = document.querySelector('.mas-informacion-btn');
const textoAdicional = document.querySelector('.texto-adicional');

masInformacionBtn.addEventListener('click', () => {


    if (textoAdicional.classList.contains('visible')) {
        textoAdicional.classList.remove('visible');
    } else {
        textoAdicional.classList.add('visible');
    }
});


const ball = document.querySelector('.ball');
const ballin = document.querySelector('.arrow');


window.addEventListener('scroll', () => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;

    const height = Math.min(100, (scrolled / scrollHeight) * 80);
    ball.style.height = `${height}px`;

    if (height >= 80) {
        ball.style.backgroundColor = '#fbcc15';
    } else {
        ball.style.backgroundColor = '#fbcc15';
    }


    if (height >= 80) {
        ballin.style.backgroundColor = '#fbcc15';
    } else {
        ballin.style.backgroundColor = 'black';
    }



});



const scrollToTopBtn = document.getElementById('scrollToTop');
const ballContainer = document.querySelector('.ball-container');

// Mostrar el contenedor de la bola después de recorrer 300px
window.addEventListener('scroll', () => {
    if (window.scrollY >= 300) {
        ballContainer.style.opacity = 1;
    } else {
        ballContainer.style.opacity = 0;
    }
});

// Hacer scroll hacia arriba cuando se hace clic en la flecha
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});