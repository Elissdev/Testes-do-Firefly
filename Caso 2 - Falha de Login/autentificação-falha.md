# Caso de Teste: Login inválido

| Falha de login |              |
|----------------|--------------|
| Módulo       | Autentificação |
| Funcionalidade | Validação de login e senha |
| Requisito    | Quando a senha ou o usuario der incorreto, exibir uma mensagem de erro |

| Dados de Teste |               |
|----------------|---------------|      
| Nome  | Valor |
| Usuario | elis.tester@gmail.com |
| Senha | 123456 |


| Criticidade |  Crítico |
|-------------|----------|

|  Número     | Pré-condição |            
|--------------|----------------|
| 1 | Usuario ou senha incorreta |

| Número | Pós-condição |
|--------------|----------------|
| 1 | These credentials do not match our records |

| Passo | Ação | Resultado esperado | 
|------|------|----------------------|
| 1 | Visite o endereço: [Firefly III](https://demo.firefly-iii.org/login) | Será direcionado para pagina de login | Sucesso |
| 2 | insira o seu email "elis.tester@gmail.com" e coloque a sua senha "123456"  | Usúario e senha inserida |
| 3 | Clique no botão entrar | Usuário não foi autenticado |