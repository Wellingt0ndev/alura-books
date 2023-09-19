let livros = [];
const enpointDaApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
getBuscarLivrosDaApi();


async function getBuscarLivrosDaApi(){
    const resposta = await fetch(enpointDaApi);
    livros = await resposta.json();
    livrosComDescontos = aplicarDesconto(livros);
    exibirOsLivrosNaTela(livrosComDescontos);
}



