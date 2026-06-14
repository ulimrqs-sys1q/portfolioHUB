async function buscarRepositorio() {
    try {
        const resposta = await fetch(
            'https://api.github.com/repos/ulimrqs-sys1q/portfolioHUB'
        );

        const repo = await resposta.json();

        console.log('=== REPOSITÓRIO ===');
        console.log('Nome:', repo.name);
        console.log('Descrição:', repo.description);
        console.log('URL:', repo.html_url);
        console.log('Branch Principal:', repo.default_branch);
        console.log('Linguagem Principal:', repo.language);
        console.log('Última Atualização:', repo.updated_at);

    } catch (erro) {
        console.error('Erro:', erro);
    }
}

buscarRepositorio();