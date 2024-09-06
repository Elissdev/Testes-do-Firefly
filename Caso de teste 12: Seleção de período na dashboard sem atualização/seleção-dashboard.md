## Caso de Teste 12: Seleção de período na dashboard sem atualização

| Seleção |        |
| ----------- |------- |
|  Módulo            | Dashboard |
|  Funcionalidade    | Seleção de Período |
|  Requisito         | O sistema deve atualizar a dashboard com base no período selecionado |

## Dados de Teste

| Nome  | Valor |
|------ |-------|
| Email | demo@firefly |
| Senha | demo |


| Criticidade | Alta |
|-------------|------|

## Pré-condição

| Nº | Descrição |
|----|-----------|
| 1  | O usuário deve estar logado no Firefly e na dashboard inicial |

## Pós-condição

| Nº | Descrição |
|----|-----------|
| 1  | A dashboard deve refletir corretamente o período selecionado |

## Passos

| Nº | Ação | Resultado Esperado |
| -- | ---- |------------------- |
| 1  | Faça login na conta do Firefly III | Usuário é autenticado e direcionado para a dashboard |
| 2  | No canto superior direito, clique na opção de seleção de período | A página deve mostrar a lista de períodos disponíveis |
| 3  | Selecione um novo período (ex: setembro) | A dashboard deve atualizar para exibir os dados do novo período selecionado |
| 4  | Observe que o período não muda e a data continua combinando agosto e setembro | A data deve refletir apenas o novo período selecionado |
