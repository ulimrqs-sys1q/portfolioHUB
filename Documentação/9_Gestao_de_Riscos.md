# 9. Gestão de Riscos

| Risco | Probabilidade | Impacto | Plano de Mitigação |
| :--- | :--- | :--- | :--- |
| **Exposição de Credenciais** | Média | Alto | - Utilizar GitHub Secrets para todas as credenciais.<br>- Implementar varredura de segredos no repositório (ex: GitGuardian ou nativo do GitHub).<br>- Política de rotação de tokens. |
| **Falha de Integração entre Ferramentas** | Baixa | Médio | - Utilizar versões estáveis e documentadas das ferramentas.<br>- Realizar um PoC (Prova de Conceito) na Semana 4 para validar a integração de ponta a ponta.<br>- Manter a documentação do ambiente atualizada. |
| **Conflitos de Versão (Git)** | Alta | Baixo | - Adotar a estratégia GitFlow para isolar o desenvolvimento.<br>- Realizar `git pull --rebase` frequentemente antes de fazer `push`.<br>- Treinamento contínuo da equipe sobre boas práticas de Git. |
| **Problemas de Autenticação (MFA/Tokens)** | Média | Médio | - Documentar claramente o processo de configuração de MFA e criação de tokens.<br>- Utilizar o GitHub CLI (`gh`) para facilitar a autenticação.<br>- Ter um plano de recuperação de acesso documentado. |
| **Erros de Configuração do Ambiente** | Média | Médio | - Criar um script de setup automatizado (Shell Script) para o ambiente local.<br>- Utilizar "Infrastructure as Code" (ex: Dev Containers no VS Code) para padronizar o ambiente. |
| **Código de Baixa Qualidade Gerado por IA** | Alta | Médio | - Implementar política de revisão de código obrigatória (PRs).<br>- Definir métricas de qualidade de código e cobertura de testes.<br>- Utilizar a IA como assistente, não como substituta do desenvolvedor. |