# Caso de Teste: Visualização de Conta

| Visualização de Conta |           |
| --------------------- |-----------|
| Módulo | Conta |
| Funcionalidade | Visualizar conta |
| Requisito | Verificar se o usuário consegue visualizar corretamente a conta criada |

## Dados de teste

| Nome | valor |
| ---- | ----- |
| Usuário | demo@firefly |
| Senha | **** |

| Criticidade | Crítico |
| ----------- | ------- |

## Pré-condições

| Nº | Descrições |
| -- | --------- |
| 1 | O usuário deve estar logado no site do Firefly |
| 2 | Deve haver pelo menos uma conta criada com despesas e receitas registradas |

## Pós-condições

| Nº | Descrição |
| -- | --------- |
| 1 | O usuário deve conseguir visualizar todas as despesas e receitas da conta selecionada |

## Passos

| Nº | Ação | Resultado esperado |
| ----- | ---- | ------------------ |
| 1 | No menu suspenso ao lado esquerdo da página, clique na opção "Accounts" | Logo abaixo, as opções de contas deverá ser exibida |
| 2 | Selecione uma das contas listadas. Ex: Supermercado | A página de visualização da conta deverá ser exibida, mostrando as despesas e receitas da conta selecionada |