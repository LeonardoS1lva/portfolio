/*
var radio = document.querySelector('.label-radio');
var cont = 1;


function proximaImagem() {
    cont++
    
    if (cont > 5) {
        cont = 1;
    }
    
    document.getElementById('radio' + cont).checked = true;
}
*/

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const itens = document.querySelector('.itens');
const itemWidth = itens.children[0].getBoundingClientRect().width;
let currentIndex = 0;


document.getElementById('radio1').checked = true;


prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + itens.children.length) % itens.children.length;
    updateSlider();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % itens.children.length;
    updateSlider();
});

function updateSlider() {
    const scrollAmount = currentIndex * itemWidth;
    itens.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
    });
}
