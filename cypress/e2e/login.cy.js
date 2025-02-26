describe('template', () => {

  const selectorsList = { 

    usernameField: ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input",
    passwordField: ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input",
    loginButton: ".oxd-button",

  }

  it('passes', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type('Admin')
    cy.get(selectorsList.passwordField).type('admin123')
    cy.get(selectorsList.loginButton).click()  
    cy.location('pathname').should('eq', '/web/index.php/dashboard/index')  
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', 'Dashboard')
   
  })
  it('fails', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type('Adminoooooo')
    cy.get(selectorsList.passwordField).type('admin123')
    cy.get(selectorsList.loginButton).click()  
    cy.get('.oxd-alert') 
   
  })
})
