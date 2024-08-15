## Caso de Uso Update: Gerenciar Passivos - CRUD

| Módulo         | Contas                     |
|--------------- |----------------------------|
| Funcionalidade | Atualizar Passivo (update) |
| Atores         | Usuário, Sistema           | 
 
#### Pré-condição

| Nº | Descrição |
| -- | ----------|
| 1 | O usuário deve estar autenticado no sistema |
| 2 | O usuário deve ter permissão para editar passivos |

#### Fluxo Principal

| Nº| Descrição |
|---|  -------- |
| 1 | Usuário acessa a página de passivos |
| 2 | Usuário seleciona um passivo para edição |
| 3 | Usuário altera as informações do passivo: Nome, moeda, tipo de responsabilidade,	responsabilidade dentro/fora, valor devido e data |
| 4 | Usuário confirma as alterações |
| 5 | Sistema salva as alterações do passivo |

#### Fluxos Alternativos

| Nº | Descrição |
| -- | --------- |
| 1  | Cancelar edição de passivo |
| 2  | Erro nos dados inseridos |

#### Pós-condição

| Nº | Descrição |
| -- | --------- |
| 1  | O sistema armazena as informações atualizadas do passivo: Nome, tipo de responsabilidade, responsabilidade dentro/fora, juros, valor devido e se está ativo  |
| 2  | A lista de passivos reflete as modificações feitas pelo usuário |