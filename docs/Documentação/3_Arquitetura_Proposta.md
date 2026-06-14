# 3. Arquitetura Proposta

A arquitetura do ambiente de desenvolvimento foi projetada para ser ágil, segura e colaborativa.

*   **GitHub:** É o núcleo do ecossistema, funcionando como repositório central (SCM), plataforma de CI/CD (GitHub Actions), gestor de projetos (Issues) e central de segurança (Dependabot, Code Scanning).
*   **Git:** É o sistema de controle de versão distribuído, usado localmente para gerenciar o histórico de alterações, criar branches e sincronizar o código com o GitHub.
*   **VS Code:** É o Ambiente de Desenvolvimento Integrado (IDE) principal para a codificação do PortfolioHUB, escolhido por sua integração nativa com Git e seu ecossistema de extensões.
*   **Google Gemini:** É a extensão de IA integrada ao VS Code, usada para acelerar tarefas como geração de código, documentação, depuração e sugestão de boas práticas.
*   **PortfolioHUB:** É a aplicação a ser desenvolvida, cujo código-fonte será gerenciado por esta arquitetura.

### Fluxo de Integração entre as Ferramentas
O fluxo de trabalho padrão é o seguinte:
1.  **Desenvolvimento Local:** O desenvolvedor clona o repositório e cria uma nova *feature branch* a partir da branch `develop`.
2.  **Codificação:** O código é escrito no VS Code, com o auxílio do Google Gemini para gerar/refatorar código, explicar trechos e criar testes.
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