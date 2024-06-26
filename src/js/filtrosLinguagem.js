const listaProjetos = document.getElementById("container-projetos");

function exibirTodos() {
    const projetosEscondidos = Array.from(listaProjetos.getElementsByClassName("hidden"));
    for (const projeto of projetosEscondidos) {
        projeto.classList.remove("hidden");
    }
}

function esconderTodos() {
    const projetos = Array.from(listaProjetos.getElementsByClassName("tech"));
    for (const projeto of projetos) {
        projeto.classList.add("hidden");
    }
}

function exibirHtmlCss() {
    esconderTodos();
    const projetosHtml = Array.from(listaProjetos.getElementsByClassName("html"));
    for (const projeto of projetosHtml) {
        projeto.closest(".tech").classList.remove("hidden");
    }
}

function exibirJavascript() {
    esconderTodos();
    const projetosJs = Array.from(listaProjetos.getElementsByClassName("javascript"));
    for (const projeto of projetosJs) {
        projeto.closest(".tech").classList.remove("hidden");
    }
}

function exibirReact() {
    esconderTodos();
    const projetosReact = Array.from(listaProjetos.getElementsByClassName("react"));
    for (const projeto of projetosReact) {
        projeto.closest(".tech").classList.remove("hidden");
    }
}

function exibirPython() {
    esconderTodos();
    const projetosPython = Array.from(listaProjetos.getElementsByClassName("python"));
    for (const projeto of projetosPython) {
        projeto.closest(".tech").classList.remove("hidden");
    }
}

function exibirJava() {
    esconderTodos();
    const projetosJava = Array.from(listaProjetos.getElementsByClassName("java"));
    for (const projeto of projetosJava) {
        projeto.closest(".tech").classList.remove("hidden");
    }
}

function exibirTailwind() {
    esconderTodos();
    const projetosTailwind = Array.from(listaProjetos.getElementsByClassName("tailwind"));
    for (const projeto of projetosTailwind) {
        projeto.closest(".tech").classList.remove("hidden");
    }

}

function inicializaFiltros() {
    document.getElementById("exibir-todos").addEventListener("click", exibirTodos);
    document.getElementById("exibir-html-css").addEventListener("click", exibirHtmlCss);
    document.getElementById("exibir-js").addEventListener("click", exibirJavascript);
    document.getElementById("exibir-react").addEventListener("click", exibirReact);
    document.getElementById("exibir-tailwind").addEventListener("click", exibirTailwind);
    document.getElementById("exibir-python").addEventListener("click", exibirPython);
    document.getElementById("exibir-java").addEventListener("click", exibirJava);
}

inicializaFiltros();