Cypress.Commands.add('login', (email = 'demo@firefly', password = 'demo') => {
    cy.visit('/login');
    cy.get('input[name="email"]').clear().type(email);
    cy.get('input[name="password"]').clear().type(password);
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/');
  });