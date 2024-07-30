## Caso de Teste 6: Funcionalidade de criação de conta bancaria


| ID do Caso de Teste |         |
|--------------------------|--------|
| Título  | Criação de Conta Bancária com Saldo Inicial, Moeda e Dados Bancários |
| Descrição | Verificar se o usuário consegue criar uma nova conta bancária com saldo inicial, selecionar o tipo de moeda (Real, Euro, Dólar), e adicionar dados bancários como número da conta e comentários. |
| Módulo | Funcionalidade de Criação de Contas |
| Requisito | O sistema deve permitir a criação de contas bancárias com informações detalhadas. |

## Dados de Teste

| Nome           | Valor                |
|----------------|----------------------|
| Nome da Conta  | Conta corrente       |
| Saldo Inicial  | €1,623.42            |
| Moeda          | Euro (€, EUR)        |
| Número da Conta| 12345678-9            |
| Comentários    | Conta corrente para despesas gerais |

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

| Passo | Ação | Resultado Esperado |
|-------|------|--------------------|
| 1     | Acesse a página de criação de conta | A página de criação de conta deve ser exibida. |
| 2     | Insira os detalhes da conta (nome, saldo inicial, moeda, número da conta, comentários) | Os detalhes inseridos devem ser aceitos pelo sistema. |
| 3     | Clique em "Criar" para criar a conta | A nova conta deve ser criada e exibida na lista de contas. |
| 4     | Verifique os detalhes da conta criada | Todos os detalhes (nome, saldo inicial, moeda, número da conta, comentários) devem estar corretos e visíveis. |

## Resultado Esperado

- O sistema deve criar a conta bancária com sucesso.
- Todos os detalhes da conta devem ser exibidos corretamente na interface do usuário.

## Critérios de Aceitação

- O sistema deve permitir a criação de uma nova conta bancária com todas as informações fornecidas.
- Os dados inseridos devem ser exibidos corretamente na lista de contas.