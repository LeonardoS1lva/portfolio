for (const projeto of projetos) {
    let verOnline = "";
    if (projeto.online) {
        verOnline = `<a href="${projeto.linkOnline}" target="_blank">
            <button class="btn-visualizar">
                <img src="./src/images/icone-link.svg" alt="icone link">
                    Ver online
            </button>
        </a>
        <strong class="status-${projeto.status}">${projeto.status}</strong>`
    } else {
        if (projeto.download) {
            verOnline = `<a href="./src/projetos/${projeto.nome}.zip" download="${projeto.nome}.zip">
                <button class="btn-visualizar">
                    <img src="./src/images/download.svg" alt="icone download">
                        Fazer download
                </button>
            </a>`
        }
    }

    let verTecnologias = "";
    for (const tecnologia of projeto.tecnologias) {
        verTecnologias +=
            `<li class="${tecnologia}">
            <img src="./src/images/tecnologias/${tecnologia}.svg" alt="${tecnologia}">
        </li>`
    }

    const listaProjetos = `<li class="tech">
    <div class="preview-projeto">
        <img src="./src/images/projetos/${projeto.nomeArquivoImg}" alt="${projeto.textoAlternativo}">
    </div>
    <div class="info-projeto">
        <h2>${projeto.nome}</h2>
        <p>${projeto.descricao}</p>
        <ul>
            ${verTecnologias}
        </ul>
    </div>
    <div class="acesso-projeto">
        <a href="https://github.com/LeonardoS1lva/${projeto.nomeRepositorio}" target="_blank">
            <button class="btn-visualizar">
                <img src="./src/images/icone-link.svg" alt="icone link">
                Ver repositório
            </button>
        </a>
        ${verOnline}
    </div>
    </li>`;
    document.getElementById("container-projetos").innerHTML += listaProjetos;
}