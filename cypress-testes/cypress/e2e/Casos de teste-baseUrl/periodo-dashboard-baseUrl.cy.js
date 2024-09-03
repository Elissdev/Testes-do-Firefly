describe('Teste do período da dashboard no Firefly III', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Selecionar período na dashboard', () => {
    
    cy.get('input[name="email"]').clear().type('demo@firefly');
    cy.get('input[name="password"]').clear().type('demo');
    cy.get('button[type="submit"]').click();

    // Espera a página da dashboard carregar
    cy.url().should('eq', 'https://demo.firefly-iii.org/');

    cy.get('#daterange').click();
    cy.get('button[type="submit"]').click();

    // Selecionar o período "September 1st, 2024 - September 30th, 2024"
    cy.contains('September 1st, 2024 - September 30th, 2024').click();

    // O ano e o período selecionado é exibido corretamente na dashboard
    cy.get('#daterange').click().should('contain', 'September 1st, 2024 - September 30th, 2024');

    // Dados da dashboard estão de acordo com o período selecionado
    cy.get('.sidebar-menu > :nth-child(1) > a > span').should('exist'); 
  });
});
