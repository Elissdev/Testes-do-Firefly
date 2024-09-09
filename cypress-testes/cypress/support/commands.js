Cypress.Commands.add('login', (email = 'demo@firefly', password = 'demo') => {
    cy.viewport(1366, 729); // Define o tamanho da tela para o teste
    cy.visit('/'); // Visita a página inicial da aplicação
  
    // Insere as credenciais de login
    cy.get('input[name="email"]').clear().type(email); // Insere o email de login
    cy.get('input[name="password"]').clear().type(password); // Insere a senha
    cy.get('button[type="submit"]').click(); // Clica no botão de login
  });