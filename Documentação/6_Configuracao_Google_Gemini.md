# 6. Configuração e Uso do Google Gemini

O Google Gemini será um componente central para a produtividade e qualidade do projeto.

*   **Como será utilizado:**
    *   **Geração de Código:** Criar boilerplate, funções, classes e algoritmos a partir de descrições em linguagem natural.
    *   **Refatoração:** Otimizar e limpar código existente, sugerindo melhorias de performance e legibilidade.
    *   **Documentação:** Gerar docstrings para funções, comentários explicativos e documentação em formato Markdown (ex: para READMEs e ADRs).
    *   **Aprendizagem e Debugging:** Explicar trechos de código complexos, identificar bugs e sugerir correções.
    *   **Geração de Testes:** Escrever testes unitários para garantir a qualidade e a cobertura do código.

*   **Tipos de Prompts Recomendados:**
    *   **Específicos e Contextuais:** "Crie uma função em Python usando a biblioteca 'requests' que faz uma chamada GET assíncrona para a API do GitHub no endpoint '/users/{username}/repos'. Inclua tratamento de erro para status codes 404 e 500."
    *   **Baseados em Código:** Selecionar um trecho de código e pedir: "Refatore este código para ser mais idiomático em Python" ou "Explique o que esta função faz".
    *   **Orientados a Tarefas:** "Escreva um teste unitário usando pytest para a seguinte função, cobrindo o caso de sucesso e o caso de falha."

*   **Boas Práticas para Interação:**
    *   **Iterar e Refinar:** Não aceite a primeira resposta como final. Use-a como ponto de partida e refine o prompt para obter melhores resultados.
    *   **Fornecer Contexto:** Quanto mais contexto (código adjacente, objetivo da função), melhor será a resposta da IA.
    *   **Dividir Problemas Complexos:** Em vez de pedir para "criar a aplicação inteira", divida a tarefa em prompts menores e mais gerenciáveis.

*   **Validação das Respostas:**
    *   **Revisão Humana:** Todo código gerado pela IA deve ser rigorosamente revisado por um desenvolvedor para garantir que atende aos requisitos, segue os padrões do projeto e não introduz vulnerabilidades.
    *   **Testes:** O código gerado deve ser coberto por testes automatizados para validar seu comportamento.
    *   **Análise Estática:** Ferramentas de linting e análise de segurança devem ser executadas sobre o código gerado.

*   **Limitações da Ferramenta:**
    *   **Alucinações:** A IA pode gerar informações incorretas ou "inventar" funções/APIs que não existem.
    *   **Viés de Treinamento:** O modelo pode reproduzir padrões de código (bons ou ruins) presentes em seus dados de treinamento.
    *   **Segurança:** Não insira informações sensíveis (senhas, chaves de API) diretamente nos prompts. A IA pode não ter conhecimento das vulnerabilidades mais recentes.