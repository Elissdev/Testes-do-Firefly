# Caso de teste 2: Login Inválido

| Falha no login |                |
|----------------|----------------|
| Módulo         | Autentificação |
| Funcionalidade | Validação de login e senha |
| Requisito      | Quando a senha ou o usuario der incorreto, exibir uma mensagem de erro |

| Dados de teste |                |
|----------------|----------------|
| Nome           | Valor          |
|        -       |        -       | 

|Criticidade     | Muito importante |
|----------------|------------------|

| Pré-Condições  |                |
|----------------|----------------|
| N/A            |           Usuario não existe / usuario ou senha incorretas |


| Pós-Condições  |                |
|----------------|----------------|
| N/A            |  precisa mostrar uma mensagem de erro com o seguinte texto: "These credentials do not match our records" |

| Passo | Ação | Resultado esperado | 
|------ |------|--------------------|
|   1   |Visite o endereço: [Firefly III](https://demo.firefly-iii.org/login) | Será direcionado para pagina do login |
|   2   | insira o seu email "elis.tester@gmail.com" e coloque a sua senha "123456" | Email e senha inseridas |
|   3   | Clique no botão entrar | Aparecerá a mensagem de erro com a seguinte frase ao lado:"These credentials do not match our records" |


