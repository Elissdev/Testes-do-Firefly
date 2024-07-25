# Caso de Teste: Esqueci minha Senha

| Esqueceu a senha |                     |
| ---------------- | ------------------- |
| Módulo           | Esqueci minha senha |
| Funcionalidade   | Redefinir senha     |
| Requisito        | o sistema deve permitir que o usuário redefina a senha |

## Dados de Teste              

| Nome  | Valor |
|-------|-------|
| Usuario | elistester76@gmail.com |

| Criticidade | Crítico |
| ----------- | ------- | 

| Pŕe-Condição |        |
| ------------ |--------|
| 1 | O usuário deve ter um endereço de e-mail registrado no sistema para recuperação de senha |

| Pós-Condição |        |
| ------------ | ------ |
| 1 | A senha é redefinida com sucesso e o usuário pode fazer login com a nova senha |
| 2 | O usuário deve conseguir acessar sua conta usando a nova senha após o processo de recuperação de senha |

| Passo | Ação | Resultado Esperado |
|-------|------|--------------------|
| 1     | Acessar a página de login e clicar em "Esqueci a minha senha" | Página de recuperação de senha é carregada corretamente |
| 2     | Inserir o endereço de e-mail registrado: elistester76@gmail.com | E-mail de recuperação é enviado para o endereço especificado |
| 3     | Abrir o e-mail de redefinição de senha: Clicar no link de redefinição, inserir e confirmar nova senha | Senha é redefinida com sucesso |
| 4     | Tentar fazer login usando a nova senha | Login é realizado com sucesso com a nova senha |