# Caso de Teste: Esqueci minha Senha

| Esqueceu a senha |                     |
| ---------------- | ------------------- |
| Módulo           | Esqueci minha senha |
| Funcionalidade   | Redefinir senha     |
| Requisito        | o sistema deve permitir que o usuário redefina a senha |

| Dados de Teste |               |
|--------------|----------------|
| Nome  | Valor |
| Usuario | demo@firefly |
| Senha | a redefinir |


| Criticidade | Crítico |
| ----------- | ------- | 

| Pŕe-Condição |        |
| ------------ |--------|
| 1 | O sistema está funcionando corretamente e o servidor de e-mails está operacional |
| 2 | O usuário deve ter um endereço de e-mail registrado no sistema para recuperação de senha |
| 3 | O sistema de login está acessível e o usuário tem acesso ao e-mail registrado para receber instruções de recuperação |

| Pós-Condição |        |
| ------------ | ------ |
| 1 | A senha é redefinida com sucesso e o usuário pode fazer login com a nova senha |
| 2 | O usuário deve conseguir acessar sua conta usando a nova senha após o processo de recuperação de senha |
| 3 | Após seguir as instruções de recuperação de senha e redefinir a senha, o usuário consegue fazer login no sistema usando a nova senha |

| Passo | Ação | Resultado Esperado |
|-------|------|--------------------|
| 1     | Acessar a página de login e clicar em "Esqueci a minha senha". | Página de recuperação de senha é carregada corretamente. |
| 2     | Inserir o endereço de e-mail registrado. | E-mail de recuperação é enviado para o endereço especificado. |
| 3     | Abrir o e-mail recebido e seguir as instruções para redefinir a senha. | Senha é redefinida com sucesso conforme as instruções. |
| 4     | Tentar fazer login usando a nova senha. | Login é realizado com sucesso com a nova senha. |



