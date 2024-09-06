## Caso de Teste 11: Modo de Exibição da Tela

| Modo exibição |                       |
|--------------|------------------------|
| Módulo       | Preferências de Layout |
| Funcionalidade | Alterar Modo de Exibição da Tela |
| Requisito    | O sistema deve permitir que o usuário altere o modo de exibição da tela entre "Always light", "Always dark" e "Let your browser decide" e aplique a configuração corretamente |

## Dados de Teste

| Nome | Valor | 
| ------- | ------- | 
| Email | demo@firefly |
| Senha | demo | 

| Criticidade | Baixa   |
| ----------- | ------- | 

## Pré-condição

| Nº | Descrição |
| -- | ----------|
| 1 | O Usuário deve estar cadastrado no sistema com um usuário e senha válidos |

## Pós-condição

| Nº | Descrição |
| -- |----------- |
| 1 | A configuração do modo de exibição da tela deve ser aplicada e persistir após o logout e novo login |

## Passos

| Nº | Ação | Resultado Esperado | 
|---- |------|---------------------|
| 1 | Visite o endereço: [Firefly III Login](https://demo.firefly-iii.org/login) | Será direcionado para a página de login |
| 2 | Insira o usuário "demo@firefly" | Usuário inserido |
| 3 | Insira a senha : "demo" | Senha inserida |
| 4 | Clique no botão "Entrar" | Sessão do usuário iniciada e direcionada para a Dashboard |
| 5 | Na Dashboard, clique em "Options" | Será exibido o menu de opções |
| 6 | Selecione "Preferences" | Será exibida a página de preferências |
| 7 | Na seção "Layout", selecione "Always dark" | A opção "Always dark" deve ser selecionada |
| 8 | Clique no botão "Save Settings" | As configurações devem ser aplicadas |
| 9 | Verifique se a interface mudou para o modo escuro | A interface deve ser exibida no modo escuro |
| 10 | Faça logout e faça login novamente | A configuração de "Always dark" deve ser aplicada e persistir |