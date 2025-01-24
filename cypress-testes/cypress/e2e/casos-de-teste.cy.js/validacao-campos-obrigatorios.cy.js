describe('Validação de Campos Obrigatórios', () => {

    beforeEach(() => {

      cy.visit('https://demo.firefly-iii.org/login');
      cy.get('input[name="email"]').clear().type('demo@firefly');
      cy.get('input[name="password"]').clear().type('demo');
      cy.get('button[type="submit"]').click();

    });

    it('Deve validar os campos obrigatórios ao tentar criar uma transação', () => {

        // Navegar até a página de criação de transações

        cy.visit('https://demo.firefly-iii.org/transactions/create/transfer');
    
        // Tentar criar a transação sem preencher o campo de descrição
        
        cy.contains('The description field is required.').should('be.visible');
    
        // Preencher o campo de descrição e tentar criar sem selecionar a conta de origem

        cy.get('input[name*=description]').type('Compra de mercado');
        cy.get('button').contains('Submit').click();
        cy.contains('The source account field is required.').should('be.visible');
    
        // Selecionar a conta de origem e tentar criar sem preencher o valor

        cy.get("input[name*=source]").type('Bank account').wait(500).type("{enter}");
        cy.get('button').contains('Submit').click();
        cy.contains('The amount field is required.').should('be.visible');
    
        // Verificar mensagens de erro gerais e destaque dos campos obrigatórios

        cy.contains('Error! There was something wrong with your submission. Please check out the errors below.').should('be.visible');
      
        cy.get('input[name*=description]').should('have.class', 'is-invalid');
        cy.get("input[name*=source]").should('have.class', 'is-invalid');
        cy.get("input[name*=amount]").should('have.class', 'is-invalid');
        
      });

    });