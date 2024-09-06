## Caso de Teste 1: Problema com o Modo de Exibição de Tema

| Modo Exibição |                     |
| ------------- |-------------------- |
| Módulo        | Exibição de tema |
| Funcionalidade| Alteração do modo de exibição |
| Requisito     | O sistema deve permitir a mudança entre o modo claro e escuro e estar no modo claro por padrão |

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
| 1  | O usuário deve estar logado no Firefly |

## Pós-condição

| Nº | Descrição |
|----|-----------|
| 1  | O tema deve refletir o modo de exibição padrão e permitir alternância entre os modos |

## Passos

| Nº | Ação | Resultado Esperado  |
|----|----- |-------------------- |
| 1  | Faça login na conta do Firefly III | Usuário é autenticado e direcionado para a dashboard |
| 2  | Observe que o display da página está no modo escuro | A página deve estar no modo claro por padrão |
| 3  | Tente mudar o modo de exibição para claro (não existe a opção) | A opção para mudar para o modo claro deve estar disponível |
