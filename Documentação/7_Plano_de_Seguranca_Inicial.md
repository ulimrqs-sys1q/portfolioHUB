# 7. Plano de Segurança Inicial

| Área | Prática Recomendada | Ferramenta/Implementação |
| :--- | :--- | :--- |
| **Controle de Acesso** | Princípio do Menor Privilégio (PoLP). | Conceder permissão de `Maintain` ou `Write` em vez de `Admin` sempre que possível. Utilizar equipes (`Teams`) no GitHub para gerenciar permissões em grupo. |
| **Autenticação** | Autenticação Multifator (MFA) Obrigatória. | Habilitar a política de "Require two-factor authentication" na configuração de segurança da Organização/Repositório no GitHub. |
| **Gestão de Tokens** | Uso de Fine-Grained Personal Access Tokens. | Criar tokens com o escopo mínimo necessário e com data de expiração. Revogá-los quando não forem mais necessários. |
| **Proteção de Credenciais** | Centralização de Segredos. | Utilizar **GitHub Secrets** para armazenar chaves de API, senhas e outras credenciais usadas nos workflows de GitHub Actions. Nunca "hardcodar" segredos no código. |
| **Segurança do Código** | Análise de Vulnerabilidades de Dependências. | Ativar o **Dependabot** no repositório para receber alertas e PRs automáticos para corrigir dependências vulneráveis. |
| | Análise Estática de Segurança (SAST). | Ativar o **GitHub Code Scanning** (usando CodeQL) para analisar o código em busca de padrões de vulnerabilidade a cada push/PR. |
| **Boas Práticas Git** | Assinatura de Commits. | Configurar a assinatura de commits com chave GPG para garantir a autoria e integridade das alterações. |