# Caso de Teste 7: Visualização de conta de investimentos

| Visualização de conta de investimentos|           |
| --------------------- |-----------|
| Módulo | Contas |
| Funcionalidade | Visualizar conta |
| Requisito | Visualizar corretamente a conta selecionada |

## Dados de teste

| Nome | valor |
| ---- | ----- |
| Usuário | demo@firefly |
| Senha | demo |
| Conta | Investimentos |

| Criticidade | Crítico |
| ----------- | ------- |

## Pré-condição

| Nº | Descrição |
| -- | --------- |
| 1 | O usuário deve estar logado no site do Firefly |

## Pós-condição

| Nº | Descrição |
| -- | --------- |
| 1 | O usuário deve conseguir visualizar a conta selecionada detalhadamente |

## Passos

| Nº | Ação | Resultado esperado |
| ----- | ---- | ------------------ |
| 1 | Visite o endereço: [Firefly III](https://demo.firefly-iii.org/login) | Será direcionado para pagina de login |
| 2 | Insira o usuario demo@firefly e a senha: demo | Usúario e senha inserida |
| 3 | Clique no botão entrar | Sessão do usuario foi redirecionada á página inicial |
| 4 | No menu suspenso ao lado esquerdo da página, clique na opção "Accounts" | Logo abaixo, as opções de contas deverá ser exibida |
| 5 | Selecione contas de investimentos | Abrirá uma página de listagem de contas |
| 6 | Selecione conta Poupança | A visualização da conta deverá ser exibida, mostrando as transações da conta selecionada |