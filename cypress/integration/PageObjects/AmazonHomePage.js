import BasePage from "../PageObjects/BasePage"
class AmazonHomePage {
   
    visitAmazonHomePage(url){{
        return cy.visit(url);
    }}

    LoginToamazon(){
        return  cy.get('.nav-line-2.nav-long-width').invoke('show').click()
    }

    enterEmail(Email){
        return cy.get('#ap_email').type(Email).should('have.value',Email)
    }

    clickContinue(){
        return cy.get('.a-button-inner > #continue').click()
    }

    enterPassword(password){
        return cy.get('#ap_password').type(password)
    }

    clickLogin(){
        return cy.get('#signInSubmit').click()
    }

}

export default AmazonHomePage;