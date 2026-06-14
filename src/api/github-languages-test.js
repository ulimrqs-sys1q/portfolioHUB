async function buscarLinguagens() {
    try {

        const resposta = await fetch(
            'https://api.github.com/repos/ulimrqs-sys1q/portfolioHUB/languages'
        );

        const linguagens = await resposta.json();

        console.log('=== LINGUAGENS UTILIZADAS ===');
        console.log(linguagens);

    } catch (erro) {
        console.error('Erro:', erro);
    }
}

buscarLinguagens();