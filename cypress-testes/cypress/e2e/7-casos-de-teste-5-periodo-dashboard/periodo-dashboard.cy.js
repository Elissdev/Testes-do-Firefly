describe('Teste: Alteração do Período da Dashboard', () => {

    before(() => {
      // Pré-condição: O usuário deve estar logado no sistema
      cy.visit('/login');  
      cy.get('input[name="email"]').clear().type('demo@firefly');  
      cy.get('input[name="password"]').clear().type('demo'); 
      cy.get('button[type="submit"]').click(); 
      
      cy.url().should('include', '/'); 
  });
  
    it('Deve carregar a dashboard com o período padrão', () => {
      // Verifica se o período padrão está selecionado
      cy.get('#daterange'); // "Today" como período padrão
    });
  
    it('Deve alterar o período da dashboard para o último mês', () => {
      // Seleciona o período desejado
      cy.get('button[type=')
      cy.get('[data-range-key="July 2024"]').click();
      //cy.contains('July 2024').click(); // Seleciona o período 'July 2024'
      
      // Verifica se a dashboard é recarregada com os dados corretos
      cy.get('.active > a > span').should('exist'); // Verifica se o gráfico da dashboard foi atualizado
      cy.get('#accounts-chart').should('contain', 'Jul'); // Verifica se os dados exibem transações de Julho
    });
  
    it('Deve verificar se os dados são atualizados para outros períodos', () => {
      const periods = ['Last seven days', 'Last thirty days'];
      
      periods.forEach(period => {
        cy.get('#daterange').click();
        cy.contains('#daterange').click();
        
        // Verifica se os dados da dashboard são atualizados para o período selecionado
        cy.get('#daterange').should('exist');
        cy.get('.checking-account-transactions').should('contain', period);
      });
    });
  
  });