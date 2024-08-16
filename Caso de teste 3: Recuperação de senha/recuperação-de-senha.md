# Caso de Teste 3: Recuperação de senha

| Recuperação de senha |                 |
| ---------------- | ------------------- |
| Módulo           | Autenticação |
| Funcionalidade   | Redefinir senha     |
| Requisito        | o sistema deve permitir que o usuário redefina a senha |

## Dados de Teste              

| Nome  | Valor |
|-------|-------|
| Usuario | elistester76@gmail.com |
| Senha   | 4617 |

| Criticidade | Crítico |
| ----------- | ------- | 

## Pré-condição

| Nº | Descrição |
| ------------ |--------|
| 1 | O usuário deve ter um endereço de e-mail registrado no sistema para recuperação de senha |

## Pós-condição

| Nº |  Descrição |
| ------------ | ------ |
| 1 | A senha é redefinida com sucesso e o usuário pode fazer login com a nova senha |

# Passos

| Nº | Ação | Resultado Esperado |
|-------|------|--------------------|
| 1     | Acessar a página de login e clicar em "Esqueci a minha senha" | Página de recuperação de senha é carregada |
| 2     | Inserir o endereço de e-mail registrado: elistester76@gmail.com | E-mail de recuperação inserido |
| 3     | Clicar no botão enviar  | E-mail de recuperação é enviado para o endereço especificado |
| 4     | Clique no link de redefinição | Aparecerá o formulário de redefinição de senha |
| 5     | Inserir nova senha: 4617 | Nova senha escolhida inserida |
| 6     | Confirmar nova senha: 4617 | Nova senha escolhida é confirmada |
| 7     | Clicar no botão de enviar formulário | O formulário é enviado |
| 8     | Tentar fazer login usando a nova senha | Login é realizado com sucesso, com a nova senha |