# 6. Configuração e Uso do Google Gemini

O Google Gemini será usado como uma ferramenta de assistência para aumentar a produtividade e a qualidade do código.

*   **Como será utilizado:**
    *   **Geração de Código:** Criar código boilerplate, funções e algoritmos a partir de descrições textuais.
    *   **Refatoração:** Otimizar código existente, com foco em performance e legibilidade.
    *   **Documentação:** Gerar docstrings, comentários e arquivos Markdown (READMEs, ADRs).
    *   **Debugging:** Auxiliar na explicação de código complexo, na identificação de bugs e na sugestão de correções.
    *   **Geração de Testes:** Escrever testes unitários para validar o comportamento do código.

*   **Tipos de Prompts Recomendados:**
    *   **Específicos e Contextuais:** "Crie uma função em Python usando a biblioteca 'requests' que faz uma chamada GET assíncrona para a API do GitHub no endpoint '/users/{username}/repos'. Inclua tratamento de erro para status codes 404 e 500."
    *   **Baseados em Código:** Selecionar um trecho de código e pedir: "Refatore este código para ser mais idiomático em Python" ou "Explique o que esta função faz".
    *   **Orientados a Tarefas:** "Escreva um teste unitário usando pytest para a seguinte função, cobrindo o caso de sucesso e o caso de falha."

*   **Boas Práticas de Uso:**
    *   **Iteração:** Usar a primeira resposta como ponto de partida e refinar o prompt para obter o resultado desejado.
    *   **Contexto:** Fornecer o máximo de contexto possível (código adjacente, objetivo) para melhorar a qualidade da resposta.
    *   **Divisão de Problemas:** Quebrar tarefas complexas em prompts menores e mais específicos.

*   **Validação das Respostas:**
    *   **Revisão Humana:** Todo código gerado pela IA deve ser obrigatoriamente revisado por um desenvolvedor para garantir sua correção, segurança e aderência aos padrões do projeto.
    *   **Testes Automatizados:** O código gerado deve ser coberto por testes para validar seu comportamento.
    *   **Análise Estática:** O código deve passar por ferramentas de linting e análise de segurança.

*   **Limitações da Ferramenta:**
    *   **Incorreções:** A IA pode gerar informações incorretas ou "alucinar", inventando funções e APIs.
    *   **Viés:** O modelo pode reproduzir padrões de código (bons ou ruins) de seus dados de treinamento.
    *   **Segurança:** Informações sensíveis (senhas, chaves de API) nunca devem ser inseridas nos prompts.