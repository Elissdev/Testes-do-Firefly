## Caso de uso 1: Criar 

| Módulo         | Contas |
|----------------|--------------------|
| Funcionalidade | Criar Passivo (create) |
| Atores         | Usuário, Sistema |
 
#### Pré-condição

| Nº | Descrição |
| -- | ----------|
| 1 | O usuário deve estar autenticado no sistema |
| 2 | O usuário deve ter permissão para adicionar passivos |

#### Fluxo Principal

| Nº| Descrição |
|---|  -------- |
| 1 | Usuário acessa a página de passivos |
| 2 | Usuário clica em "Adicionar Passivo" |
| 3 | Usuário insere as informações do novo passivo: Nome, moeda, tipo de responsabilidade,	responsabilidade dentro/fora, valor devido e data |
| 4 | Usuário confirma a adição do passivo |
| 5 | Sistema salva o novo passivo |

#### Fluxos Alternativos

| Nº | Descrição |
| -- | --------- |
| 1 | Cancelar criação de passivo |
| 2 | Erro nos dados inseridos |

#### Pós-condição

| Nº | Descrição |
| -- | --------- |
| 1 | O sistema armazena o novo passivo criado pelo usuário |
| 2 | A lista de passivos é atualizada para refletir o novo passivo |