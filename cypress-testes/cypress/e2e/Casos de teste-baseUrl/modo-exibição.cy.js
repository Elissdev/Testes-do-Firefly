describe('Modo de Exibição da Tela', () => {

beforeEach(() => {
    cy.login();
    
  });

  it('Deve alterar o modo de exibição para Always dark', () => {
    // Acesse as preferências
    cy.contains('Options').click();
    cy.contains('Preferences').click();
    cy.contains('Layout').click();

    cy.get('div#layout.tab-pane').click();

    cy.get('button[type="submit"]').eq(1).click();

   
  });

});
