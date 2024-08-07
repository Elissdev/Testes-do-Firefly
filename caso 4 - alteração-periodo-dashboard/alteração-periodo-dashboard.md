# Caso de Teste 4: Alteração do Período da Dashboard

| Alterar periodo da Dashboard | |
| ---------------- | ----------|
| Módulo           | Dashboard |
| Funcionalidade   | Alterar o período na dashboard com os dados corretos |
| Requisito        | Visualizar dados em diferentes janelas de tempo |

| Criticidade | Normal |
| ----------- | ------- | 

| Pré-condição |          |     
| ------------ | -------- |
| 1 | O usuário deve estar logado no sistema e na página da dashboard |


| Pós-condição |          |
| ------------ | -------- |
| 1 | A dashboard deve exibir dados corretos para qualquer período selecionado |


| Passo | Ação | Resultado Esperado |
|-------| --------------- | ------- |
| 1     | Assim que fizer o login, a pagina é aberta na dashboard  | A dashboard é carregada com o período padrão (por exemplo, mês atual) |
| 2     | Selecionar período desejado (ex: último mês) na opção de orçamentos e navegador de periodo | O período selecionado é alterado e a dashboard é recarregada |
| 3     | Verificar se os dados exibidos na dashboard são atualizados de acordo com o novo período. | Os dados da dashboard devem refletir as transações e informações do novo período selecionado |
| 4     | Comparar os valores exibidos na dashboard com os valores das transações do período selecionado. | Os valores exibidos na dashboard devem corresponder aos dados das transações do período |
| 5     | Repetir os passos 2 a 4 para outros períodos (ex: último mês, último ano).              | A dashboard deve ser atualizada corretamente para cada período selecionado, exibindo os dados corretos |
| 6     | Verificar se os gráficos, totais e saldos são atualizados corretamente para cada período | Os gráficos, totais e saldos exibidos na dashboard devem ser consistentes com os dados do período selecionado |