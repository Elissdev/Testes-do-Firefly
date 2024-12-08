describe('Criação de Transação', () => {
  beforeEach(() => {
    cy.visit('https://demo.firefly-iii.org/login');
    cy.get('input[name="email"]').clear().type('demo@firefly');
    cy.get('input[name="password"]').clear().type('demo');
    cy.get('button[type="submit"]').click();
  });
       it('Deve criar uma nova transação de despesa com campos obrigatórios preenchidos', () => {

        //Navegar até a página de transações
        cy.visit('https://demo.firefly-iii.org/transactions/create/transfer');

        cy.get ("input[name*=description]") .type ('Casa nova');

        //Inserir a descrição da transação
        cy.get("input[name*=source]").type('The house').wait(500).type("{enter}"); 

        //Selecionar a conta de destino
        cy.get("input[name*=destination]").type('AMEX Credit Card debt');

        //Inserir a data da transação
        cy.get ("input[name*=date][title=Date]").type('2024-12-07T16:22');

        //Inserir o valor da transação
        cy.get("input[name*=amount][title=Amount]").type('150.00'); 

        //Clicar no botão "Submit"
        cy.get('button').contains('Submit').click();
        cy.contains('Success! Successfully created new transaction "Casa nova"');

        //Navegar até a seção Expenses no menu lateral esquerdo
        cy.visit ('https://demo.firefly-iii.org/transactions/transfers');

        //Verificar se a transação aparece na lista de despesas
        cy.contains('Casa nova').should('be.visible');
        cy.contains('150.00').should('be.visible');
    });
});