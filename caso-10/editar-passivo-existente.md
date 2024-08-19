## Caso de Teste 10: Editar um passivo existente

| Editar um Passivo Existente |       |
| ---------------------------------|-------| 
| Módulo | Contas |
| Funcionalidade | Validar a funcionalidade de edição de passivos |
| Requisito | O sistema deve permitir ao usuário editar os dados de um passivo existente |

| Criticidade | Média |
|-------------|-------|

## Pré-condição

| Nº | Descrição |
|----|-----------|
| 1  | O usuário deve estar autenticado no sistema |

## Pós-condição

| Nº | Descrição |
|----|-----------|
| 1  | O passivo editado é exibido na lista com os dados atualizados |

## Passos

| Nº | Ação | Resultado Esperado |
|----|------|--------------------|
| 1  | Navegar até a página de passivos | A página de passivos deve ser exibida |
| 2  | Clique em "Actions" ao lado do passivo a ser editado | Deverá aparecer a opção de editar |
| 3  | Clique em "Edit" | A página de edição de passivo deve ser exibida |
| 4  | Alterar as informações necessárias (nome, moeda, tipo, valor devido) | As alterações devem ser aceitas pelo sistema |
| 5  | Clique em "Update liability" para confirmar a edição do passivo| Deverá aparecer a mensagem: "Success! Updated account " |