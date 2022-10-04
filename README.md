# Calculadora de antecipação

> ### Projeto criado em outubro de 2022 na escola de programação Kenzie Academy Brasil.
----------
> ### Versel https://calculator-iota-sand.vercel.app/
---------
## Raciocínio
>### 1. Verifiquei o layout para saber como deveria progredir com o projeto.
>### 2. Não achei necessario em criar um global css já que a aplicação é pequena.
>### 3. Tomei a decisão de criar 2 componentes para me ajudar a separar a lógica do código.
>### 4. O primeiro componente teria a responsabilidade de fazer a requisição e o segundo de mostrar a resposta.
>### 5. Tomei a decisão de não utilizar o styled components ou SSAS.
>### 6. Utilizei o react-rook-form para criar o formulário onde passaria todas as informações da requisição e mostraria o resultado do erro.
>### 7. Preferir utilizar o react-toastify para mostrar o resultado da requisição.
>### 8. Para tratar o problema da demora da resposta da API coloquei um loading no toastify.