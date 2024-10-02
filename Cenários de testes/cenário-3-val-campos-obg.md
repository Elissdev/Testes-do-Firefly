| Cenário de Teste 3  | Validação de Campos Obrigatórios |
|---------------------|----------------------------------|
| **Objetivo**        | Garantir que o sistema exibe erros ao tentar criar uma transação sem preencher os campos obrigatórios |
| **Pré-Condições**   | Usuário autenticado, página de transações |
| **Passos**          | **1.** Navegar até a página de nova transação <br> **2.** Tentar criar uma transação sem preencher o campo de descrição, conta de origem ou valor. <br> **3.** Verificar as mensagens de erro |
| **Resultado Esperado** | O sistema deve exibir uma mensagem de erro destacando os campos obrigatórios que não foram preenchidos |
