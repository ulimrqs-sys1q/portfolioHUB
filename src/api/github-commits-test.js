async function buscarCommits() {
    try {

        const resposta = await fetch(
            'https://api.github.com/repos/ulimrqs-sys1q/portfolioHUB/commits'
        );

        const commits = await resposta.json();

        console.log('=== ÚLTIMOS COMMITS ===');

        commits.slice(0, 5).forEach(commit => {
            console.log(
                commit.commit.author.date,
                '-',
                commit.commit.message
            );
        });

    } catch (erro) {
        console.error('Erro:', erro);
    }
}

buscarCommits();