## Caso de Teste 9: Adicionar um Novo Passivo

| Adicionar um novo passivo |               |
|---------------------------|---------------|
| Módulo | Contas |
| Funcionalidade | Garantir que o usuário consiga adicionar um novo passivo no sistema |
| Requisito | Ao adicionar, permitir que o usuário acesse ás informações completas |

| Criticidade | Critico |
|-------------|---------|

## Pré-condição

| Nº | Descrição |
|----|-----------|
| 1  | O usuário deve estar autenticado no sistema |


## Pós-condição

| Nº | Descrição |
|----|-----------|
| 1  | O novo passivo é exibido na lista de passivos com os detalhes corretos |

## Passos

| Nº | Ação | Resultado Esperado |
|----|------|--------------------|
| 1  | Navegar até a página de passivos | A página de passivos deve ser exibida |
| 2  | Clique no botão "Criar um novo passivo"| A página de criação de passivo deve ser exibida |
| 3  | Preencher as informações do passivo (nome, moeda, tipo, valor devido, data) | As informações inseridas devem ser aceitas pelo sistema |
| 4  | Confirmar a criação do passivo | Aparece-rá a seguinte mensagem : "Success! New account stored!" |
| 5 | Clique novamente em passivos | O novo passivo deve aparecer na lista de passivos |