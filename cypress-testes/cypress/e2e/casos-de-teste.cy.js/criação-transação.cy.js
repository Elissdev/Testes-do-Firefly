describe('Caso de Teste 12: Funcionalidade de Criação de Transação', () => {
    before(() => {
      cy.login();
    });
  
    it('Deve criar uma nova transação de despesa com os campos obrigatórios preenchidos', () => {
      // Passo 1: Navegar até a página de transações
      cy.visit('/Transactions'); // Visita a página de transações
      cy.contains('Transactions').should('be.visible'); // Verifica se a página de transações foi exibida
  
      // Passo 2: Clicar no botão "Create a new transaction"
      cy.contains('Create a new transaction').click(); // Clica no botão de criar nova transação
      cy.url().should('include', '/transactions/create'); // Verifica se está na página de criação
  
      // Passo 3: Inserir a descrição da transação
      cy.get('input[name="description"]').type('Compra de supermercado'); // Insere a descrição da transação
  
      // Passo 4: Selecionar a conta de origem
      cy.get('select[name="source_account"]').select('Checking Account'); // Seleciona a conta de origem
  
      // Passo 5: Selecionar a conta de destino
      cy.get('select[name="destination_account"]').select('Cash account'); // Seleciona a conta de destino
  
      // Passo 6: Inserir a data da transação
      cy.get('input[name="transaction_date"]').type('2024-09-26'); // Insere a data da transação
  
      // Passo 7: Selecionar o tipo de moeda
      cy.get('select[name="currency"]').select('Euro'); // Seleciona o tipo de moeda
  
      // Passo 8: Inserir o valor da transação
      cy.get('input[name="amount"]').type('150.00'); // Insere o valor da transação
  
      // Passo 9: Clicar no botão "Submit"
      cy.get('button[type="submit"]').click(); // Clica no botão de submissão
      cy.contains('Success! Successfully created new transaction "Compra de supermercado"').should('be.visible'); // Verifica a mensagem de sucesso
  
      // Passo 10: Navegar até a seção Expenses no menu lateral esquerdo
      cy.visit('/expenses'); // Visita a seção de despesas
      cy.contains('Expenses').should('be.visible'); // Verifica se a página de despesas foi exibida
  
      // Passo 11: Verificar se a transação aparece na lista de despesas
      cy.contains('Compra de supermercado').should('be.visible'); // Verifica se a transação está listada
      cy.contains('150.00').should('be.visible'); // Verifica se o valor está correto
      cy.contains('Checking Account').should('be.visible'); // Verifica a conta de origem
      cy.contains('Cash account').should('be.visible'); // Verifica a conta de destino
    });
  });