describe('template', () => {

  const selectorsList = { 

    usernameField: ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input",
    passwordField: ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input",
    loginButton: ".oxd-button",
  }

  const userData = {
    userSuccess: {
      username: 'Admin',
      password: 'admin123'
    },
    userFail: { 
      username: 'Adminoooooo',
      password: 'admin123'      
    }

  }
    
  it('passes', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()  
    cy.location('pathname').should('eq', '/web/index.php/dashboard/index')  
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', 'Dashboard')
   
  })

  it('fails', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()  
    cy.get('.oxd-alert') 
   
  })
})
