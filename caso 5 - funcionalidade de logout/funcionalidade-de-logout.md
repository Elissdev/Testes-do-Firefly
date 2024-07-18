# Caso de Teste 5: Funcionalidade de Logout no Firefly

| Logout |         |
| -------|---------|
| Módulo | Funcionalidade de Logout |
| Requisito | Verificar se a funcionalidade de logoutfunciona corretamente, encerrando a sessão do usuário e redirecionando-o para a página de login |

## Dados de teste

| Nome | valor |
| ---- | ----- |
| Usuario | demo@firefly |
| Senha | **** |

| Criticidade | Critico |
| ----------- | --------|

| Pré-condições |       |
| ------------- | ----- |
| 1 | O usuário deve estar logado no site do Firefly |
| 2 | O navegador deve estar aberto na página principal após o login |

| Pós-condições |       |
| ------------- | ----- |
| 1 | O usuário deve estar na página de login e não deve ter acesso a páginas ou informações protegidas sem fazer login novamente|

| Passo | Ação | Resultado esperado |
| ------| ---- | ------------------ |
| 1 | Acesse a página principal do site ([Firefly](https://www.firefly.com)) | A página principal do site deve ser exibida |
| 2 | Insira seu usuario, senha, e clique em Sign in | Será redirecionado para sua conta do Firefly |
| 3 | No menu suspenso ao lado esquerdo da pagina, clique na opção "Logout" | O usuário deve ser redirecionado para a página de login | 