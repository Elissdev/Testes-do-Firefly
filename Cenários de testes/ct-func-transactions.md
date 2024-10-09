# Cenário de Teste: Funcionalidade de Transações 

| **Título** | Teste da funcionalidade "Transactions" no Firefly III |
|------------|-------------------------------------------------------|
| **Descrição** | O objetivo deste cenário de teste é validar o correto funcionamento da funcionalidade de Transações no Firefly III. O cenário abrange operações principais (caminho feliz), como validações, filtros e segurança, garantindo que o usuário consiga interagir com transações corretamente e que o sistema lide bem com erros e possíveis ataques |

| **Casos de Teste** | **Objetivo** | **Pré-condições** |
|--------------------|--------------|-------------------|
| Adicionar Nova Transação Simples com Dados Válidos (Caminho Feliz) | Verificar se o usuário consegue adicionar uma nova transação simples (entrada ou saída) com sucesso | O usuário deve estar autenticado e na página "Transactions" |
| Adicionar Transferência entre Contas com Dados Válidos | Garantir que o usuário possa transferir dinheiro entre contas com sucesso | O usuário deve ter ao menos duas contas cadastradas no sistema |
| Editar Transação Existente com Sucesso | Verificar se o usuário consegue editar uma transação existente e se as alterações são refletidas corretamente | O usuário deve ter ao menos uma transação cadastrada |
| Excluir Transação Existente com Sucesso | Verificar se o usuário consegue excluir uma transação e se ela é removida corretamente da lista de transações | O usuário deve ter ao menos uma transação cadastrada |
| Filtrar Transações por Data (Intervalo de Datas Válido) | Garantir que o filtro de transações por intervalo de datas funcione corretamente, exibindo apenas as transações dentro do período especificado | O usuário deve ter várias transações cadastradas em datas diferentes |
| Filtrar Transações por Tipo (Entrada/Saída/Transferência) | Validar que o filtro por tipo de transação (entrada, saída, transferência) funcione corretamente, permitindo que o usuário visualize transações de um tipo específico | O usuário deve ter transações de diferentes tipos cadastradas |
| Exportar Relatório de Transações Filtradas (CSV e PDF) | Verificar se o usuário consegue exportar transações filtradas em diferentes formatos (CSV e PDF) corretamente | O usuário deve ter aplicado filtros às transações e ter transações cadastradas |
| Adicionar Transação com Valor Negativo (Validação de Erro) | Validar se o sistema exibe uma mensagem de erro ao tentar adicionar uma transação com valor negativo | O usuário deve estar na página de criação de transações |
| Adicionar Transação Sem Preencher a Data (Validação de Erro) | Verificar se o sistema alerta o usuário ao tentar salvar uma transação sem definir a data | O usuário deve estar na página de criação de transações |
| Adicionar Transação com Formato de Valor Inválido (Validação de Erro) | Validar se o sistema exibe uma mensagem de erro ao tentar adicionar uma transação com um valor no formato inválido (ex: caracteres em vez de números) | O usuário deve estar na página de criação de transações |
| Adicionar Transação com Caracteres Proibidos no Campo de Descrição | Verificar se o sistema exibe uma mensagem de erro ao tentar salvar uma transação com caracteres proibidos (ex: símbolos especiais) no campo de descrição | O usuário deve estar na página de criação de transações |
| Excluir Transação Inexistente (Verificar Mensagem de Erro) | Validar se o sistema exibe uma mensagem adequada ao tentar excluir uma transação inexistente | O usuário deve tentar excluir uma transação que não existe mais |
| Tentativa de Injeção SQL no Campo de Valor da Transação (Segurança) | Testar a segurança do sistema, verificando se ele bloqueia tentativas de injeção SQL no campo de valor da transação | O usuário deve tentar inserir um código malicioso no campo de valor |