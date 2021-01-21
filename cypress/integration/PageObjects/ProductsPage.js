class ProductsPage{

    clickCheckOut(){
        return cy.get("a:contains('Checkout')")
    }

    clickCheckOutFromSummary(){
        return cy.contains("Checkout")
    }

    enterCountryInformation(Country){
        cy.get("#country").type(Country)
        cy.screenshot()
        return cy.get("div .suggestions a:nth-child(1)")
    }

    clickAgreeCheckbox(){
        cy.get("#checkbox2").check({force:true}).should('be.checked',true)
        return this
    }

    Purchase(){
        return cy.contains("Purchase")
    }
    
}

export default ProductsPage