# Caso de Teste: Funcionalidade de Login

| Login Válido |                |
|--------------|----------------|
| Módulo       | Autentificação |
| Funcionalidade | Iniciar sessão no sistema |
| Requisito    | Ao indicar as credenciais corretas e realizar login, o sistema deverá iniciar a sessão |

## Dados de Teste

| Nome  | Valor |
|------ |-------|
| Email | demo@firefly |
| Senha | demo |


| Criticidade | Crítico |
|-------------|---------| 

| Pré-condição |               |
|--------------|---------------|
| 1 | O Usuario demo@firefly ser cadastrado no sistema com uma senha específica: demo |

| Pós-condição |               |
|--------------|---------------|
| 1 | Sessão iniciada |    


| Passo | Ação | Resultado esperado | 
|------|------|----------------------|
| 1 | Visite o endereço: [Firefly III](https://demo.firefly-iii.org/login) | Será direcionado para pagina de login |
| 2 | Insira o usuario demo@firefly e a senha: demo | Usúario e senha inserida |
| 3 | Clique no botão entrar | Sessão do usuario foi iniciada e direcionada para dashboard |