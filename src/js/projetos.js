const radio = document.querySelector('.label-radios')
const radio1 = document.getElementById('radio1');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const itens = document.querySelector('.itens');
const itemWidth = itens.children[0].getBoundingClientRect().width;
var currentIndex = 0;

radio1.checked = true;
radio.children[0].classList.add("fundo-label");

for (let i = 0; i < itens.children.length; i++) {
    radio.children[i].addEventListener('click', () => {
        acionaRadio(i);
    });
}

function acionaRadio(num) {
    for (let i = 0; i < itens.children.length; i++) {
        if (num === i) {
            radio.children[i].classList.add("fundo-label");
            currentIndex = num;
            updateSlider();
        } else {
            radio.children[i].classList.remove("fundo-label");
        }
    }
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + itens.children.length) % itens.children.length;
    updateSlider();
    acionaRadio(currentIndex);
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % itens.children.length;
    updateSlider();
    acionaRadio(currentIndex);
});

function updateSlider() {
    const scrollAmount = currentIndex * itemWidth;
    itens.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
    });
}
