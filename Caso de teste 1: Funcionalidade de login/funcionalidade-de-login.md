## Caso de Teste 1: Funcionalidade de Login

| Login Válido |                |
|--------------|----------------|
| Módulo       | Autentificação |
| Funcionalidade | Iniciar sessão no sistema |
| Requisito    | Ao indicar as credenciais corretas e realizar login, o sistema deverá iniciar a sessão |

<<<<<<< Updated upstream:Caso de teste 1: Funcionalidade de login/funcionalidade-de-login.md
## Dados de Teste

| Nome  | Valor |
|------ |-------|
| Email | demo@firefly |
| Senha | demo |

| Criticidade | Crítico |
|-------------|---------| 

## Pré-condição

| Nº | Descrição |
| -- | ----------|
| 1 | O Usuario demo@firefly ser cadastrado no sistema com uma senha específica: demo |

## Pós-condição

| Nº |  Descrição |
| -- |----------- |
| 1 | Sessão iniciada |    

## Passos
=======
## Dados de teste

| Nome | Valor | 
| ------- | ------- | 
| Email | demo@firefly |
| Senha | demo | 

| Criticidade | Crítico |
|------------ | --------|

| Pré-condições |                |
|--------------|----------------|
| 1 | O Usuario demo@firefly ser cadastrado no sistema com uma senha específica: demo |
>>>>>>> Stashed changes:Caso 1 - Login funcional/autenticacao.validacao.md

| Nº | Ação | Resultado esperado | 
|------|------|----------------------|
| 1 | Visite o endereço: [Firefly III](https://demo.firefly-iii.org/login) | Será direcionado para pagina de login |
| 2 | Insira o usuario demo@firefly e a senha: demo | Usúario e senha inserida |
| 3 | Clique no botão entrar | Sessão do usuario foi iniciada e direcionada para dashboard |