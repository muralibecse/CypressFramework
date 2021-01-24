/// <reference types="Cypress"/>

describe('This is First Test Suite',()=>{

    it('This is my first test cases',()=>{
        
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(1000)
        //cy.get('div[class="products"] div.product').should('have.length',4)
        cy.get('.product:visible').should('have.length',4)


        cy.get(".products").as('products')

        cy.get("@products").find(".product").should('have.length',4)

        //cy.get(".products").find(".product").eq(2).contains('ADD TO CART').click()
        //cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get("@products").find(".product").each(($el,index,$list)=>{
            const buttonToSelect = $el.find('h4.product-name').text()
            cy.log(buttonToSelect)
            
            if(buttonToSelect.includes('Cashews')){
                $el.find('button').click()
            }

        })
    })

    it('This is my second test cases',()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get("input[type='checkbox']").check(["option2","option3"])

        cy.get('select').select('option2').should('have.value','option2')
        cy.wait(2000)
        cy.get('#autocomplete').type("Ind")
        cy.wait(2000)

        cy.get('.ui-menu-item div').each(($el,index,$list)=>{
            cy.log($el.text())
            if($el.text()==="India"){
                cy.wait(2000)
                $el.click()
            }
        })

        cy.get('#autocomplete').should('have.value','India')
//visible invisible
cy.get('#displayed-text').should('be.visible')
cy.get('#hide-textbox').click()
cy.get('#displayed-text').should('not.be.visible')
cy.get('#show-textbox').click()
cy.get('#displayed-text').should('be.visible')
 
//radio buttons
 
cy.get('[value="radio2"]').check().should('be.checked')


    }    

)

it('Third Test-',()=>{{

    



}})

})