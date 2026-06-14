// Este é um script Node.js para testar a busca de dados de um usuário na API do GitHub.
//
// Para executar este script:
// 1. Certifique-se de que você tem o Node.js (v18+) instalado.
// 2. Navegue até a raiz do projeto no terminal.
// 3. Execute o comando: node github-test.js (ou o caminho completo se o arquivo for movido).

const GITHUB_API_URL = 'https://api.github.com';
const USERNAME_TO_TEST = 'ulimrqs-sys1q'; // Usuário para o teste

/**
 * Busca os dados de um usuário específico na API do GitHub.
 * @param {string} username - O nome de usuário do GitHub a ser buscado.
 */
async function fetchUserData(username) {
  console.log(`Buscando dados para o usuário: ${username}...`);
  try {
    const response = await fetch(`${GITHUB_API_URL}/users/${username}`);

    // Verifica se a requisição foi bem-sucedida (status 2xx)
    if (!response.ok) {
      // Lança um erro com a mensagem de status para ser pego pelo bloco catch
      throw new Error(`Falha na requisição: ${response.status} ${response.statusText}`);
    }

    const userData = await response.json();

    console.log('\n=== ✅ DADOS DO USUÁRIO ENCONTRADOS ===');
    console.log(`Login: ${userData.login}`);
    console.log(`Nome: ${userData.name}`);
    console.log(`Repositórios Públicos: ${userData.public_repos}`);
    console.log(`Perfil: ${userData.html_url}`);

  } catch (error) {
    console.error('\n=== ❌ Ocorreu um erro ao buscar dados da API ===');
    console.error(error.message);
  }
}

// IIFE (Immediately Invoked Function Expression) para executar o script de forma assíncrona.
// Isso permite o uso de 'await' no nível superior do script, se necessário.
(async () => {
  if (!USERNAME_TO_TEST) {
    console.error('O nome de usuário para teste (USERNAME_TO_TEST) não foi definido.');
  } else {
    await fetchUserData(USERNAME_TO_TEST);
  }
})();