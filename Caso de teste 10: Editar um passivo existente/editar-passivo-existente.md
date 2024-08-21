## Caso de Teste 10: Editar um passivo existente

| Editar um Passivo Existente |       |
| ---------------------------------|-------| 
| Módulo | Contas |
| Funcionalidade | Atualizar Passivo |
| Requisito | O sistema deve permitir ao usuário editar os dados de um passivo existente |

| Criticidade | Média |
|-------------|-------|

## Pré-condição

| Nº | Descrição |
|----|-----------|
| 1  | O usuário deve estar autenticado no sistema |
| 2  | O sistema deve ter um passivo cadastrado |

## Pós-condição

| Nº | Descrição |
|----|-----------|
| 1  | O passivo editado é exibido na lista com os dados atualizados |

## Passos

| Nº | Ação | Resultado Esperado |
|----|------|--------------------|
| 1  | Navegue até o campo do lado esquerdo "Accounts"| As opções de Accounts deve ser exibida |
| 2  | Clique em "liability" | A lista de passivos será exibida |
| 3  | Clique em "Actions" ao lado do passivo a ser editado. Ex: Notebook | Deverá aparecer a opção de editar |
| 4  | Clique em "Edit" | A página de edição de passivo deve ser exibida |
| 5  | Altere o nome do passivo | O nome do passivo deve ser aceito pelo sistema |
| 6  | Altere o tipo de moeda | O tipo de moeda deve ser aceito pelo sistema |
| 7  | Altere o tipo de responsabilidade | O tipo de responsabilidade deve ser aceito pelo sistema |
| 8  | Altere o tipo de responsabilidade dentro/fora | A alteração deverá ser exibida conforme a escolha do usuário |
| 9  | Altere o valor devido | A alteração deverá ser exibida conforme a escolha do usuário |
| 10 | Altere a data de início da dívida | A data será alterada conforme a escolha do usuário|
| 11  | Clique em "Update liability" para confirmar a edição do passivo| Deverá aparecer a mensagem: "Success! Updated account " |