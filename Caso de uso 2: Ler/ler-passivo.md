## Caso de Uso 2: Ler

| Módulo         | Contas |
|--------------- |--------------------|
| Funcionalidade | Ler Passivo |
| Atores         | Usuário, Sistema |
 
#### Pré-condição

| Nº | Descrição |
| -- | ----------|
| 1 | O usuário deve estar autenticado no sistema |
| 2 | O usuário deve ter permissão para visualizar passivos |

#### Fluxo Principal

| Nº| Descrição |
|---|  -------- |
| 1 | Usuário acessa a página de passivos |
| 2 | Sistema exibe a lista de passivos existentes |
| 3 | Usuário visualiza um passivo específico |

#### Fluxos Alternativos

| Nº | Descrição |
| -- | --------- |
| 1 | Nenhum passivo encontrado |

#### Pós-condição

| Nº | Descrição |
| -- | --------- |
| 1 | O sistema exibe as informações corretas dos passivos solicitados pelo usuário: Nome, moeda, tipo de responsabilidade,	responsabilidade dentro/fora, valor devido e data |