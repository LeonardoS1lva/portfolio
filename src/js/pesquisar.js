const botaoPesquisar = document.getElementById("btn-pesquisar");
const pesquisa = document.getElementById("pesquisar");

function pesquisar() {
    const projetos = document.querySelectorAll(".tech");
    const valorPesquisa = pesquisa.value.toLowerCase();
    for (const projeto of projetos) {
        const nomeProjeto = projeto.querySelector("h2").textContent.toLowerCase();
        if (nomeProjeto.includes(valorPesquisa)) {
            projeto.classList.remove("hidden");
        } else {
            projeto.classList.add("hidden");
        }
    }
}

botaoPesquisar.addEventListener("click", pesquisar);