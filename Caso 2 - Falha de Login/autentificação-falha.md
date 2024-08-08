# Caso de Teste: Login inválido

| Falha de login |              |
|----------------|--------------|
| Módulo       | Exibir mensagem de erro |
| Funcionalidade | Validação de login e senha |
| Requisito    | Quando a senha ou o usuario der incorreto, exibir uma mensagem de erro e não autentificar o usúario |

## Dados de teste

| Nome | Valor | 
| ------- | ------- | 
| Usuario | elis.tester@gmail.com |
| Senha | 123456 |


| Criticidade |  Crítico |
|-------------|----------|

## Pré-condição

| Nº | Descrição |            
|--- | --------- |
| 1 | Usuario ou senha incorreta |

## Pós-condição

| Nº | Descrição |
|----|-----------|
| 1 | Mensagem de erro que deve aparecer: "These credentials do not match our records" |

## Passos

| Nº | Ação | Resultado esperado | 
|----|------|----------------------|
| 1 | Visite o endereço: [Firefly III](https://demo.firefly-iii.org/login) | Será direcionado para pagina de login |
| 2 | insira o seu email "elis.tester@gmail.com" e coloque a sua senha "123456"  | Usúario e senha inserida |
| 3 | Clique no botão entrar | Usuário não foi autenticado e exibir uma mensagem de erro |