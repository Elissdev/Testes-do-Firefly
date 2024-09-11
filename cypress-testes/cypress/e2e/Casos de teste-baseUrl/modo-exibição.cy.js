describe('Modo de Exibição da Tela', () => {
  beforeEach(() => {
    cy.viewport(1366, 729);
    cy.login(); 
  });
  
  it('Deve alterar o modo de exibição para Always dark', () => {
     cy.contains('Options').click();
     cy.contains('Preferences').click();
     cy.contains('Layout').click();

     cy.get('div#layout.tab-pane').click();
    
    
     cy.get('input[name=darkMode][value=dark]').click();
     cy.get('button[type="submit"]').eq(1).click();

     // Realiza o logout
     cy.contains('Logout').click(); 

     // Realiza o login novamente
     cy.get('input[name="email"]').clear().type('demo@firefly');  
     cy.get('input[name="password"]').clear().type('demo');  
     cy.get('button[type="submit"]').click();  
 
     // Verifica se o modo "Always dark" persiste
     cy.contains('Options').click();
     cy.contains('Preferences').click();
     cy.contains('Layout').click();
     
     cy.get('input[name=darkMode][value=dark]').should('be.checked');

  });
});


