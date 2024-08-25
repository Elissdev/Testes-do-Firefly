describe('login', () => {
  it('login invalido', () => {
    cy.visit('https://demo.firefly-iii.org/login')
    cy.get(':nth-child(2) > .form-control').clear().type('lizzreeis192@gmail.com')  
    cy.get(':nth-child(3) > .form-control').clear().type('123456')
    cy.get('.btn').click()
    cy.get('li').should('contain', 'These credentials do not match our records.')
    })
})