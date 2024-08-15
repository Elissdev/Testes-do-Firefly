## Caso de Uso: Delete

| Módulo         | Contas             |
|----------------|--------------------|
| Funcionalidade | Deletar Passivo (delete) |
| Atores         | Usuário, Sistema |
 
#### Pré-condição

| Nº | Descrição |
| -- | ----------|
| 1 | O usuário deve estar autenticado no sistema |
| 2 | O usuário deve ter permissão para remover passivos |

#### Fluxo Principal

| Nº| Descrição |
|---|  -------- |
| 1 | Usuário acessa a página de passivos |
| 2 | Usuário seleciona um passivo para exclusão |
| 3 | Usuário confirma a remoção do passivo |
| 4 | Sistema remove o passivo selecionado |

#### Fluxos Alternativos

| Nº | Descrição |
| -- | --------- |
| 1 | Cancelar remoção de passivo |

#### Pós-condição

| Nº | Descrição |
| -- | --------- |
| 1  | O sistema remove o passivo do banco de dados |
| 2  | A lista de passivos é atualizada para refletir a remoção |