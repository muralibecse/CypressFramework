// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --

import AmazonHomePage from "../integration/PageObjects/AmazonHomePage"

// Cypress.Commands.add("login", (email, password) => { ... })
Cypress.Commands.add("addProduct", (productName) => { 
    cy.get('h4.card-title').each(($el,index,$list)=>{
        cy.log($el.text())
        if($el.text().includes(productName)){
            cy.get('button.btn.btn-info').eq(index).click()
        }
      })
})


Cypress.Commands.add("LoginToAmazon",(username,password)=>{
    const amazonPage = new AmazonHomePage()
    amazonPage.visitAmazonHomePage("https://amazon.in")
    amazonPage.LoginToamazon()
    amazonPage.enterEmail(username)
    amazonPage.clickContinue()
    amazonPage.enterPassword(password)
    amazonPage.clickLogin()
})




//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
