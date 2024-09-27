## Caso de Teste 12: Funcionalidade de Criação de Transação 
| Criação de Transação |        |
|----------------------|--------|
| Módulo | Transações |
| Funcionalidade | Criar uma nova transação de despesa com os campos obrigatórios preenchidos (descrição, conta de origem, conta de destino, valor, tipo de moeda, etc.) |
| Requisito | O sistema deve permitir a criação de uma transação de despesa com informações detalhadas |

| Criticidade | Crítico |
|-------------|---------|

## Pré-condição

| Nº | Descrição |
|----|-----------|
| 1  | O usuário deve estar logado no site [Firefly III](https://demo.firefly-iii.org/) |
| 2  | O usuário deve ter acesso à funcionalidade de criação de transações |

## Pós-condição

| Nº | Descrição |
|----|-----------|
| 1  | A nova transação de despesa deve aparecer corretamente na lista de transações e na seção de despesas |
| 2  | Os detalhes da transação (descrição, conta de origem, conta de destino, valor, moeda) devem ser exibidos corretamente |

## Passos

| Nº | Ação | Resultado Esperado |
|----|------|--------------------|
| 1  | Navegar até a página de transações | A página de transações deve ser exibida |
| 2  | Clicar no botão "Create a new transaction" | A página de criação de nova transação deve ser exibida |
| 3  | Inserir a descrição da transação (Ex: "Compra de supermercado") | O campo de descrição deve aceitar a entrada de texto |
| 4  | Selecionar a conta de origem (Ex: "Checking Account") | A conta de origem deve ser selecionada |
| 5  | Selecionar a conta de destino (Ex: "Cash account") | A conta de destino deve ser selecionada |
| 6  | Inserir a data da transação (Ex: "26/09/2024") | A data deve ser inserida conforme o formato esperado |
| 7  | Selecionar o tipo de moeda (Ex: "Euro") | O tipo de moeda deve ser selecionado |
| 8  | Inserir o valor da transação (Ex: "150,00") | O valor deve ser aceito pelo sistema |
| 9  | Clicar no botão "Submit" | A nova transação deve ser criada com a mensagem "Success! Successfully created new transaction "Compra de supermercado" |
| 10 | Navegar até a seção **Expenses** no menu lateral esquerdo | A página de despesas deve ser exibida |
| 11 | Verificar se a transação "Compra de supermercado" aparece na lista de despesas | A transação "Compra de supermercado" deve ser listada na seção de despesas com todos os dados exibidos (descrição, valor, data, contas de origem e destino) |