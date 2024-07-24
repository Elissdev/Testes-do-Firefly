# Caso de Teste 4: Alteração do Período da Dashboard

| Alterar periodo da Dashboard |          |
| ---------------- | -------------------- |
| Módulo           | Dashboard |
| Funcionalidade   | Alterar o período na dashboard com os dados corretos |
| Requisito        | Visualizar dados em diferentes janelas de tempo |

| Criticidade | Normal |
| ----------- | ------- | 

| Pré-condição |            
| ------------ | 
| O usuário deve estar logado no sistema e na página da dashboard |


| Pós-condição | 
| ------------ |
A dashboard deve exibir dados corretos para qualquer período selecionado |


| Passo | Ação                                                                                   | Resultado Esperado                                                                                     |
|-------|----------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------|
| 1     | Navegar para a página da dashboard.                                                    | A dashboard é carregada com o período padrão (por exemplo, último mês).                                |
| 2     | Selecionar o novo período desejado (ex: última semana) na opção de filtro de período.  | O período selecionado é alterado e a dashboard é recarregada.                                          |
| 3     | Verificar se os dados exibidos na dashboard são atualizados de acordo com o novo período. | Os dados da dashboard devem refletir as transações e informações do novo período selecionado.          |
| 4     | Comparar os valores exibidos na dashboard com os valores reais das transações do período selecionado. | Os valores exibidos na dashboard devem corresponder aos dados reais das transações do período.         |
| 5     | Repetir os passos 2 a 4 para outros períodos (ex: último mês, último ano).              | A dashboard deve ser atualizada corretamente para cada período selecionado, exibindo os dados corretos. |
| 6     | Verificar se os gráficos, totais e saldos são atualizados corretamente para cada período | Os gráficos, totais e saldos exibidos na dashboard devem ser consistentes com os dados do período selecionado. |