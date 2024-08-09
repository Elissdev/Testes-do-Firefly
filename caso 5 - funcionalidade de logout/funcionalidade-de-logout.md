# Caso de Teste 5: Funcionalidade de Logout 

| Logout |         |
| -------|---------|
| Módulo | Autenticação |
| Funcionalidade | Logout |
| Requisito | Encerrar a sessão do usuário e redirecionar para a página de login |

## Dados de teste

| Nome | valor |
| ---- | ----- |
| Usuario | demo@firefly |
| Senha | **** |

| Criticidade | Critico |
| ----------- | --------|

## Pré-condição

| Nº | Descrição |
| ----------- | ----- |
| 1 | O usuário deve acessar e fazer o login no site do Firefly |
| 2 | O navegador deve estar aberto na página principal após o login |

## Pós-condição

| Nº |   Descrição   |
| ------------- | ----- |
| 1 | O usuário deve estar na página de login |
| 2 | O usuário não deve ter acesso a páginas ou  informações protegidas sem fazer login novamente |

## Passos

| Nº | Ação | Resultado esperado |
| ------| ---- | ------------------ |
| 1 | Acesse a página principal do site ([Firefly](https://www.firefly.com)) | A página inicial do site deve ser exibida |
| 2 | Insira seu usuario, senha, e clique em Sign in | Será redirecionado para sua conta do Firefly |
| 3 | No menu suspenso ao lado esquerdo da pagina, clique na opção "Logout" | O usuário deve ser redirecionado para a página de login | 