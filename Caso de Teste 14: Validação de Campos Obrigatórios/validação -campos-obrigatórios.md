## Caso de Teste 14: Validação de Campos Obrigatórios

| Validação de Campos Obrigatórios |        |
|----------------------------------|--------|
| Módulo | Transações |
| Funcionalidade | Validar a obrigatoriedade de preenchimento dos campos essenciais para criar uma nova transação (descrição, valor, conta de origem) |
| Requisito | O sistema deve exibir uma mensagem de erro ao tentar criar uma transação sem preencher os campos obrigatórios |

| Criticidade | Crítico |
|-------------|------|

## Pré-condição

| Nº | Descrição |
|----|-----------|
| 1  | O usuário deve ter acesso à funcionalidade de criação de transações |

## Pós-condição

| Nº | Descrição |
|----|-----------|
| 1  | O sistema deve impedir a criação da transação e destacar os campos obrigatórios que não foram preenchidos |
| 2  | Mensagens de erro apropriadas devem ser exibidas para o usuário |

## Passos

| Nº | Ação | Resultado Esperado |
|----|------|--------------------|
| 1  | Navegar até a página de transações | A página de transações deve ser exibida |
| 2  | Clicar no botão "Create a new transaction" | A página de criação de nova transação deve ser exibida |
| 3  | Tentar criar a transação sem preencher o campo de descrição | O sistema deve exibir uma mensagem de erro indicando que o campo de descrição é obrigatório |
| 4  | Preencher a descrição e tentar criar a transação sem selecionar a conta de origem | O sistema deve exibir uma mensagem de erro indicando que a conta de origem é obrigatória |
| 5  | Selecionar a conta de origem e tentar criar a transação sem inserir o valor | O sistema deve exibir uma mensagem de erro indicando que o valor é obrigatório |
| 6  | Verificar as mensagens de erro exibidas | O sistema deve destacar visualmente os campos obrigatórios não preenchidos e exibir a mensagem: "Error! There was something wrong with your submission. Please check out the errors below." |