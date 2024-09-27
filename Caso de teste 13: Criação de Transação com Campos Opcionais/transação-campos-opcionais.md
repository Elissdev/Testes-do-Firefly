## Caso de Teste 13: Criação de Transação com Campos Opcionais

| Criação de Transação com Campos Opcionais |        |
|-------------------------------------------|--------|
| Módulo | Transações |
| Funcionalidade | Criar uma nova transação onde apenas os campos obrigatórios são preenchidos (descrição, valor, data, contas de origem, moeda e destino) |
| Requisito | O sistema deve permitir a criação de uma transação onde apenas os campos obrigatórios são preenchidos, sem necessidade de preencher os opcionais |

| Criticidade | Médio |
|-------------|-------|

## Pré-condição

| Nº | Descrição |
|----|-----------|
| 1  | O usuário deve ter acesso à funcionalidade de criação de transações |

## Pós-condição

| Nº | Descrição |
|----|-----------|
| 1  | A nova transação deve aparecer na lista de transações com os campos obrigatórios preenchidos e os campos opcionais vazios |
| 2  | A transação deve ser exibida sem erros ou mensagens de validação para os campos opcionais |

## Passos

| Nº | Ação | Resultado Esperado |
|----|------|--------------------|
| 1  | Navegar até a página de transações | A página de transações deve ser exibida |
| 2  | Clicar no botão "Create a new transaction" | A página de criação de nova transação deve ser exibida |
| 3  | Inserir a descrição da transação (Ex: "Pagamento de internet") | O campo de descrição deve aceitar a entrada de texto |
| 4  | Selecionar a conta de origem (Ex: "Checking Account") | A conta de origem deve ser selecionada |
| 5  | Selecionar a conta de destino (Ex: "Cash account") | A conta de destino deve ser selecionada |
| 6  | Inserir a data da transação (Ex: "27/09/2024") | A data deve ser inserida conforme o formato esperado |
| 7  | Selecionar o tipo de moeda (Ex: "US Dolar") | O tipo de moeda deve ser selecionado |
| 8  | Inserir o valor da transação (Ex: "R$ 100,00") | O valor deve ser aceito pelo sistema |
| 9  | Deixar os campos opcionais "Tags", "Orçamento" e "Quantidade estrangeira" em branco | Os campos opcionais devem ser deixados em branco sem gerar erros de validação |
| 10  | Clicar no botão "Submit" | A nova transação deve ser criada com a mensagem "Success! Successfully created new transaction" |
| 11  | Navegar até a seção **Expenses** no menu lateral esquerdo | A página de despesas deve ser exibida |
| 12  | Verificar se a transação "Pagamento de internet" aparece na lista de transações | A transação criada deve estar visível na lista de transações com os dados corretos  (descrição, valor, data, moeda, contas de origem e destino), e os campos opcionais devem estar vazios |