describe('Login Page Feature', () => {
  it('Login valid', () => {
    cy.viewport(1920, 1080);
    cy.visit('https://panorra.com/');
    cy.wait(5000);
    cy.get('.btn.btn-primary.btn-sm.responsive-hide').click();
    cy.get('input[placeholder="Enter your email or username"]',{ timeout: 60000 })
    .should('be.visible')
    .type('testergothru@gmail.com');
    cy.get('input[placeholder="Enter your password"]',{ timeout: 60000 })
    .should('be.visible')
    .type('gothru@12345');     
    cy.get('div.login').find('button').contains('Log In').click();
    cy.wait(5000);
    cy.screenshoot('Login Feature')
  })
})