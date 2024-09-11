describe('Teste: Alteração do Período da Dashboard', () => {

  beforeEach(() => {
    cy.viewport(1366, 729);
    cy.login(); 
  });

   
  it('Deve carregar a dashboard com o período atual', () => {
    const index = 0;
    cy.get('#daterange').click()
        cy.get('div.ranges ul li').eq(index).click()
  });

  it('Deve alterar o período da dashboard para o último mês', () => {
    const index = 1;
    cy.get('#daterange').click()
        cy.get('div.ranges ul li').eq(index).click()
    
  });

  it('Deve verificar se o período é alterado para Last seven days', () => {
    const index = 3;
    cy.get('#daterange').click()
        cy.get('div.ranges ul li').eq(index).click()
    
  });

  it('Deve verificar se o período é alterado para Last thirdy days', () => {
    const index = 4;
    cy.get('#daterange').click()
        cy.get('div.ranges ul li').eq(index).click()
      });
    
    });
