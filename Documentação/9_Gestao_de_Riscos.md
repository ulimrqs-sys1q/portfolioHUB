# 9. Gestão de Riscos

| Risco | Probabilidade | Impacto | Plano de Mitigação |
| :--- | :--- | :--- | :--- |
| **Exposição de Credenciais** | Média | Alto | - Utilizar GitHub Secrets para todas as credenciais.<br>- Implementar varredura de segredos no repositório (ex: GitGuardian ou nativo do GitHub).<br>- Política de rotação de tokens. |
| **Falha de Integração** | Baixa | Médio | - Utilizar versões estáveis das ferramentas.<br>- Realizar uma Prova de Conceito (PoC) na Semana 4 para validar a integração.<br>- Manter a documentação do ambiente atualizada. |
| **Conflitos de Versão (Git)** | Alta | Baixo | - Adotar a estratégia GitFlow para isolar o desenvolvimento.<br>- Realizar `git pull --rebase` frequentemente antes de fazer `push`.<br>- Treinamento contínuo da equipe sobre boas práticas de Git. |
| **Problemas de Autenticação** | Média | Médio | - Documentar o processo de configuração de MFA e criação de tokens.<br>- Utilizar o GitHub CLI (`gh`) para facilitar a autenticação.<br>- Manter um plano de recuperação de acesso. |
| **Erros de Configuração do Ambiente** | Média | Médio | - Criar um script de setup automatizado (Shell Script) para o ambiente local.<br>- Utilizar "Infrastructure as Code" (ex: Dev Containers no VS Code) para padronizar o ambiente. |
| **Código de Baixa Qualidade da IA** | Alta | Médio | - Implementar revisão de código obrigatória (PRs).<br>- Definir métricas de qualidade e cobertura de testes.<br>- Usar a IA como assistente, não como substituta do desenvolvedor. |