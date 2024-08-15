## Caso de Uso: Gerenciar Passivos

|     Módulo        | Contas |
|-------------------|--------------------|
|   Funcionalidade  | Gerenciar : visualizar, adicionar, editar e remover investimentos no sistema de controle financeiro |
|   Atores          | Usuário, Sistema |
 
 ## Pré-condição 

| Nº | Descrição |
| -- | ----------|
| 1 | O usuário deve estar autenticado no sistema |
| 2 | O usuário deve ter permissão para gerenciar passivos |

 ## Fluxo Principal

| Nº| Descrição |
|---|  -------- |
| 1 | Usuário lista a página de passivos |
| 2 | Usuário visualiza a lista de passivos |
| 3 | Usuário adiciona um novo passivo |
| 4 | Usuário edita um passivo existente |
| 5 | Usuário remove um passivo existente |

## Fluxos Alternativos

| Nº | Descrição |
| -- | --------- |
| Ator 1 (usuário) | Cancelar criação/edição de passivos |
| Ator 2 (Sistema) | Erro nos dados inseridos |

 ## Pós-condição 

| Nº | Descrição |
| -- | --------- |
| 1 | O sistema armazena as informações atualizadas sobre os passivos do usuário: Nome, tipo de responsabilidade, responsabilidade dentro/fora,	juros, valor devido	e se está ativo |
| 2 | A lista de investimentos reflete todas as modificações feitas pelo usuário |