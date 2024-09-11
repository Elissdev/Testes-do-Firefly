Cypress.Commands.add('login', (email = 'demo@firefly', password = 'demo') => {
    cy.visit('/'); // Acessa a página inicial da aplicação
  
    // Insere as credenciais de login
    cy.get('input[name="email"]').clear().type(email); 
    cy.get('input[name="password"]').clear().type(password);
    cy.get('button[type="submit"]').click(); // Submete o formulário de login
  });