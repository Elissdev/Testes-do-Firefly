# Caso de Teste: Visualização de Conta

| Visualização de Conta |           |
| --------------------- |-----------|
| Módulo | Funcionalidade de Contas |
| Requisito | Verificar se o usuário consegue visualizar as despesas e receitas de uma conta criada |

## Dados de teste

| Nome | valor |
| ---- | ----- |
| Usuário | demo@firefly |
| Senha | **** |

| Criticidade | Crítico |
| ----------- | ------- |

## Pré-condições


| Nº | Descrição |
| -- | --------- |
| 1 | O usuário deve estar logado no site do Firefly |
| 2 | Deve haver pelo menos uma conta criada com despesas e receitas registradas |

## Pós-condições

| Nº | Descrição |
| -- | --------- |
| 1 | O usuário deve conseguir visualizar todas as despesas e receitas da conta selecionada |

## Passos

| Passo | Ação | Resultado esperado |
| ----- | ---- | ------------------ |
| 1 | Acesse a página principal do site ([Firefly](https://demo.firefly-iii.org)) | A página principal do site deverá ser exibida |
| 2 | Insira seu usuário, senha e clique em entrar | Será redirecionado para página inicial |
| 3 | No menu suspenso ao lado esquerdo da página, clique na opção "Accounts" | Logo abaixo, as opções de contas deverá ser exibida |
| 4 | Selecione uma das contas listadas | A página de visualização da conta deverá ser exibida, mostrando as despesas e receitas da conta selecionada |