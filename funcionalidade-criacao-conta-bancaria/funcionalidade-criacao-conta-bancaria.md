## Caso de Teste 6: Funcionalidade de criação de conta bancaria

| Criação de conta bancaria |         |
|--------------------------|--------|
| Módulo | Criação de Conta |
|Funcionalidade | Verificar se o usuário consegue criar uma nova conta bancária com saldo inicial, selecionar  o tipo de moeda (Real, Euro, Dólar), e adicionar dados bancários  |
| Requisito | O sistema deve permitir a criação de contas bancárias com informações detalhadas |

## Dados de Teste

| Nome           | Valor                |
|----------------|----------------------|
| Nome da Conta  | Academia |
| Moeda  | Euro (€, EUR) |
| Quantidade mínima | €60,00
| Quantia máxima |  €90,00 |
| Data | 07/08/24 |
| Repetições | Por mês |

## Criticidade

| Criticidade | Critico |
|-------------|---------|

## Pré-condições

| Nº | Descrição |
|----|-----------|
| 1  | O usuário deve estar logado no site [ Firefly ]( https://www.firefly.com )  |
| 2  | O usuário deve ter acesso à funcionalidade de criação de conta |

## Pós-condições

| Nº | Descrição |
|----|-----------|
| 1  | A nova conta deve aparecer na lista de contas com os detalhes corretos |
| 2  | O saldo inicial e a moeda devem ser exibidos corretamente |

## Passos

| Nº | Ação | Resultado Esperado |
|-------|------|--------------------|
| 1 | Acesse a página de criação de conta | A página de criação de conta deve ser exibida |
| 2 | Insira o nome da conta | o nome da conta deve ser aceito pelo sistema |
| 3 | Selecione o tipo de moeda | O tipo de Moeda deverá ser selecionado. EX: EUR |
| 4 | Insira a quantidade Minima | A quantidade minina deverá ser exibida conforme a escolha do Usúario |
| 5 | Insira a quantia máxima | A quantidade minina deverá ser exibida conforme a escolha do Usúario |
| 6 | Insira a data da criação de conta | A data será inserida conforme o dia da criação da conta |
| 7 | Selecione a opção de repetição | Deverá aparecer as opções: Diario, semanalmente, por mês, trimestral, a cada semestre ou anual |
| 8 | Clique em "Armazenar nova fatura" para criar a conta | A nova conta deve ser criada e exibida na lista de contas |
| 9 | Verifique os detalhes da conta criada | Todos os detalhes (nome, saldo inicial, moeda, número da conta, comentários) devem estar corretos e visíveis |