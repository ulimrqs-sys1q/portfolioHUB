# 3. Arquitetura Proposta

A arquitetura do ambiente de desenvolvimento foi desenhada para promover agilidade, segurança e colaboração.

*   **GitHub:** Atua como o núcleo do ecossistema, servindo como Sistema de Controle de Versão (SCM) centralizado, plataforma de CI/CD (com GitHub Actions), ferramenta de gestão de projetos (Issues, Projects) e hub de segurança (Dependabot, Code Scanning).
*   **Git:** Sistema de controle de versão distribuído, utilizado localmente pelo desenvolvedor para gerenciar o histórico de alterações, criar branches e sincronizar o código com o repositório remoto no GitHub.
*   **VS Code:** Ambiente de Desenvolvimento Integrado (IDE) principal, onde o código-fonte do PortfolioHUB será escrito. Sua integração nativa com Git e o ecossistema de extensões o tornam ideal para o projeto.
*   **Google Gemini:** Extensão de assistência por Inteligência Artificial integrada ao VS Code. Será utilizada para acelerar o desenvolvimento, gerar código, criar documentação, depurar erros e fornecer insights sobre arquitetura e boas práticas.
*   **PortfolioHUB:** A aplicação a ser desenvolvida. Ela existirá como código-fonte dentro desta arquitetura, sendo gerenciada pelo Git e hospedada no GitHub.

### Fluxo de Integração entre as Ferramentas
O fluxo de trabalho padrão seguirá o ciclo:
1.  **Desenvolvedor (Local):** Clona o repositório do GitHub e cria uma nova *feature branch* a partir da branch `develop` usando Git.
2.  **Codificação (VS Code):** O desenvolvimento é realizado no VS Code. O Google Gemini é utilizado para gerar/refatorar código, explicar trechos complexos e escrever testes.
3.  **Versionamento (Git):** As alterações são commitadas localmente de forma incremental.
4.  **Sincronização (GitHub):** A *feature branch* é enviada (`push`) para o repositório remoto no GitHub.
5.  **Revisão e Integração (GitHub):** Um *Pull Request* (PR) é aberto para mesclar a *feature branch* na branch `develop`. GitHub Actions pode ser configurado para rodar testes automatizados. Após a aprovação, o código é integrado.

### Diagrama Textual da Arquitetura

```
+----------------------+      +-------------------------+      +---------------------+
| Desenvolvedor        |      | Ambiente Local          |      | Ambiente Remoto     |
| (Usuário)            |      | (Estação de Trabalho)   |      | (Cloud)             |
+----------------------+      +-------------------------+      +---------------------+
       |                      |                         |            |
       |---(Interage com)---> |        VS Code          |            |
       |                      |  +-------------------+  |            |
       |                      |  | Código do         |  |            |
       |                      |  | PortfolioHUB      |  |            |
       |                      |  +-------------------+  |            |
       |                      |           ^             |            |
       |                      |           | (Assiste)   |            |
       |                      |  +-------------------+  |            |
       |                      |  | Google Gemini     |  |            |
       |                      |  +-------------------+  |            |
       |                      |           |             |            |
       |                      |           v             |            |
       |                      |  +-------------------+  |            |
       |                      |  | Git (Versionamento) |<-+          |
       |                      |  +-------------------+  | |          |
       |                      |           |             | |(sync)    |
       +----------------------+           | (push/pull) | |          |
                                          v             v |          |
                                +-------------------------+          |
                                | GitHub.com              |          |
                                | +---------------------+ |          |
                                | | Repositório         | |          |
                                | | PortfolioHUB        | |          |
                                | | (main, develop, etc)| |          |
                                | +---------------------+ |          |
                                | | GitHub Actions (CI) | |          |
                                | | Issues, Security    | |          |
                                +-------------------------+          |
                                          ^                          |
                                          | (Consome API)            |
                                          |                          |
                                +------------------------------------+
                                |
                                v
                          (PortfolioHUB em Produção - Futuro)
```