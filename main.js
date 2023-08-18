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