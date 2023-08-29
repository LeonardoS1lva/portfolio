const projetos = [
    {
        id: 1,
        nome: "Clone Netflix",
        nomeArquivoImg: "preview_Clone-Netflix.png",
        textoAlternativo: "Clone Netflix",
        descricao: "Este projeto é um clone da plataforma de streaming Netflix, desenvolvido usando HTML e CSS. O objetivo foi recriar a interface e o layout principal da Netflix para fins educacionais e práticos. Neste projeto, você encontrará a página inicial em destaque.",
        tecnologias: ["html", "css"],
        nomeRepositorio: "Clone-Netflix",
        online: true,
        download: false,
        status: "Online",
        linkOnline: "https://leonardos1lva.github.io/Clone-Netflix/",
    },
    {
        id: 2,
        nome: "Projeto de listagem pokémon",
        nomeArquivoImg: "preview-projeto-listagem-pokemon.png",
        textoAlternativo: "Projeto pokedex",
        descricao: "Este projeto simula uma pokedéx, listando de forma ordenada e responsiva. Também demonstra o uso da troca de tema entre claro e escuro.",
        tecnologias: ["html", "css", "javascript"],
        nomeRepositorio: "projeto-listagem-pokemon",
        online: true,
        download: false,
        status: "Online",
        linkOnline: "https://leonardos1lva.github.io/projeto-listagem-pokemon/",
    },
    {
        id: 3,
        nome: "Calculadora simples",
        nomeArquivoImg: "preview-calculadora.png",
        textoAlternativo: "Imagem projeto calculadora",
        descricao: "Uma calculadora simples desenvolvida com HTML, CSS e JavaScript. A calculadora permite realizar operações matemáticas básicas, como adição, subtração, multiplicação e divisão, além de suportar números positivos e negativos.",
        tecnologias: ["html", "css", "javascript"],
        nomeRepositorio: "calculadora-simples",
        online: true,
        download: false,
        status: "Online",
        linkOnline: "https://leonardos1lva.github.io/calculadora-simples/",
    },
    {
        id: 4,
        nome: "Busca CEP",
        nomeArquivoImg: "preview_busca-cep.png",
        textoAlternativo: "Imagem projeto Busca CEP",
        descricao: "Formulário feito em ReactJS para a realização de consultas de endereço.",
        tecnologias: ["react"],
        nomeRepositorio: "React_Projects",
        online: true,
        download: false,
        status: "Online",
        linkOnline: "https://cfs9x7.csb.app/",
    },
    {
        id: 5,
        nome: "Contador de Dias Uteis",
        nomeArquivoImg: "preview_ContagemDiasUteis.png",
        textoAlternativo: "Imagem projeto entrega dia útil",
        descricao: "Este é um projeto simples que exibe a data de entrega com base em um número específico de dias úteis, levando em consideração feriados nacionais, municipais e facultativos.",
        tecnologias: ["html", "css", "javascript"],
        nomeRepositorio: "ContagemDiasUteis",
        online: true,
        download: false,
        status: "Online",
        linkOnline: "https://leonardos1lva.github.io/ContagemDiasUteis/",
    },
    {
        id: 6,
        nome: "Results summary component",
        nomeArquivoImg: "preview_Challenge-hub-results-summary-component.png",
        textoAlternativo: "Imagem projeto Results summary component",
        descricao: "Essa é uma solução para o desafio Results Summary Component no Frontend Mentor. Os desafios do Frontend Mentor ajudam você a aprimorar suas habilidades de codificação ao construir projetos realistas.",
        tecnologias: ["html", "css"],
        nomeRepositorio: "Challenge-hub-results-summary-component",
        online: true,
        download: false,
        status: "Online",
        linkOnline: "https://leonardos1lva.github.io/Challenge-hub-results-summary-component/",
    },
    {
        id: 7,
        nome: "Lista de Lutadores do Mortal Kombat I",
        nomeArquivoImg: "preview_Lista-Lutadores-MK.png",
        textoAlternativo: "Imagem projeto MKI",
        descricao: "Projeto semelhante ao projeto pokedex, com algumas adições realizadas para teste e o visual inspirado no jogo de luta Mortal Kombat.",
        tecnologias: ["html", "css", "javascript"],
        nomeRepositorio: "Lista-Lutadores-MK",
        online: true,
        download: false,
        status: "Online",
        linkOnline: "https://leonardos1lva.github.io/Lista-Lutadores-MK/",
    },
    {
        id: 8,
        nome: "Product Preview Card Component",
        nomeArquivoImg: "preview_product-preview-card-component.png",
        textoAlternativo: "Imagem projeto Product Preview Card Component",
        descricao: "Esta é uma solução para o desafio Product Preview Card Component no Frontend Mentor.<br> Os usuários devem ser capazes de: <br> <b> . Visualizar o layout ideal, dependendo do tamanho da tela do dispositivo. <br> . Ver os estados de hover e foco para elementos interativos.</b>",
        tecnologias: ["html", "css"],
        nomeRepositorio: "product-preview-card-component",
        online: true,
        download: false,
        status: "Online",
        linkOnline: "https://leonardos1lva.github.io/product-preview-card-component/",
    },
    {
        id: 9,
        nome: "Lista de tarefas",
        nomeArquivoImg: "preview-todo-list.png",
        textoAlternativo: "Imagem projeto Lista de tarefas",
        descricao: "Um projeto simples em React que foi desenvolvido para a realizaçãço de checklists.",
        tecnologias: ["react"],
        nomeRepositorio: "Curso-React",
        online: true,
        download: false,
        status: "Online",
        linkOnline: "https://kdef8h-3000.csb.app/",
    },
    {
        id: 10,
        nome: "QR Code Frontend Mentor",
        nomeArquivoImg: "preview_qr-code-component.png",
        textoAlternativo: "Imagem projeto QR Code Frontend Mentor",
        descricao: "Esta é uma solução para o desafio qr code component no Frontend Mentor.",
        tecnologias: ["html", "css"],
        nomeRepositorio: "qr-code-component",
        online: true,
        download: false,
        status: "Online",
        linkOnline: "https://leonardos1lva.github.io/qr-code-component/",
    },
    {
        id: 11,
        nome: "Pomodoro",
        nomeArquivoImg: "preview-pomodoro.PNG",
        textoAlternativo: "Imagem projeto Pomodoro",
        descricao: "Programa que automatiza o método de estudos conhecido como Pomodoro.",
        tecnologias: ["python"],
        nomeRepositorio: "Pomodoro",
        online: false,
        download: true,
        status: "Offline",
        linkOnline: "#",
    },
    {
        id: 12,
        nome: "Interactive rating component",
        nomeArquivoImg: "preview_interactive-rating-component.png",
        textoAlternativo: "Imagem projeto Interactive rating component",
        descricao: "Esta é uma solução para o desafio Interactive rating component no Frontend Mentor.",
        tecnologias: ["html", "css", "javascript"],
        nomeRepositorio: "interactive-rating-component",
        online: true,
        download: false,
        status: "Online",
        linkOnline: "https://leonardos1lva.github.io/interactive-rating-component/",
    },
    {
        id: 13,
        nome: "Snake Game (Versão 1.0)",
        nomeArquivoImg: "preview-snake-game-v1.png",
        textoAlternativo: "Snake Game V1",
        descricao: "Versão inicial do jogo da cobrinha.",
        tecnologias: ["java"],
        nomeRepositorio: "snake-game-v1",
        online: false,
        download: false,
        status: "Offline",
        linkOnline: "#",
    },
    {
        id: 14,
        nome: "Calculadora de Idade",
        nomeArquivoImg: "preview-age-calculator-app.png",
        textoAlternativo: "Calculadora de Idade",
        descricao: "Esta é uma solução para o desafio Age calculator app no Frontend Mentor.",
        tecnologias: ["html", "css", "javascript"],
        nomeRepositorio: "age-calculator-app",
        online: true,
        download: false,
        status: "Online",
        linkOnline: "https://leonardos1lva.github.io/age-calculator-app/",
    },
];

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
        `<li>
            <img src="./src/images/tecnologias/${tecnologia}.svg" alt="${tecnologia}">
        </li>`
    }

    const listaProjetos = `<li>
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