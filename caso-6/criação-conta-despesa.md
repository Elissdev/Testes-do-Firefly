## Caso de Teste 6: Funcionalidade despesa

| Criação de conta despesa |        |
|--------------------------|--------|
| Módulo | Despesa |
|Funcionalidade | Criar uma nova despesa com saldo inicial, selecionar  o tipo de moeda (Real, Euro, Dólar), e adicionar dados os sequentes |
| Requisito | O sistema deve permitir a criação de despesas com informações detalhadas |

| Criticidade | Critico |
|-------------|---------|

## Pré-condição

| Nº | Descrição |
|----|-----------|
| 1  | O usuário deve estar logado no site [ Firefly ]( https://www.firefly.com )  |
| 2  | O usuário deve ter acesso à funcionalidade de criação de despesa |

## Pós-condição

| Nº | Descrição |
|----|-----------|
| 1  | A nova despesa deve aparecer na lista de despesas com os detalhes corretos |
| 2  | O saldo inicial e a moeda devem ser exibidos corretamente |

## Passos

| Nº | Ação | Resultado Esperado |
|-------|------|--------------------|
| 1 | Acesse a página de criação de despesa no campo do lado esquerdo "Bills"| A página de criação de despesa deve ser exibida |
| 2 | Insira o nome da despesa | o nome da despesa deve ser aceito pelo sistema |
| 3 | Selecione o tipo de moeda | O tipo de Moeda deverá ser selecionado. EX: EUR |
| 4 | Insira a quantidade Minima | A quantidade minina deverá ser exibida conforme a escolha do usuário |
| 5 | Insira a quantia máxima | A quantidade minina deverá ser exibida conforme a escolha do usuário |
| 6 | Insira a data da criação da despesa | A data será inserida conforme o dia da criação da despesa |
| 7 | Selecione a opção de repetição | Deverá aparecer as opções: Diario, semanalmente, por mês, trimestral, a cada semestre ou anual |
| 8 | Clique em "Armazenar nova fatura" para criar a despesa | A nova despesa deve ser criada e exibida na lista de despesas com a mensagem "Success! Stored new bill"|
| 9 | Verifique os detalhes da despesa criada | Todos os detalhes (nome, saldo inicial, moeda, número da conta, comentários) devem estar corretos e visíveis |