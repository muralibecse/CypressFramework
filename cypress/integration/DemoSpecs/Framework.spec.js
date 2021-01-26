/// <reference types="Cypress"/>

import HomePage from "../PageObjects/HomePage"
import ProductsPage from "../PageObjects/ProductsPage"
//import AmazonHomePage from "../PageObjects/AmazonHomePage"
import AmazonMainPage from "../PageObjects/AmazonMainPage"

describe('This is First Test Suite',function(){
     beforeEach(function() {
        cy.fixture('example').then(function(data){
            cy.log("Fixure loaded")
            this.data=data
        })
      })


    it("Test Case - 1 ",function(){
      
        cy.visit("https://rahulshettyacademy.com/angularpractice/")

        cy.get("input[name='name']:nth-child(2)").type(this.data.name)
        cy.get("#exampleFormControlSelect1").select(this.data.gender)
        cy.get("input[name='name']:nth-child(1)").should('have.value',this.data.name)
        cy.screenshot()
        cy.get("input[name='name']:nth-child(2)").should('have.attr',"minLength",2)
        cy.screenshot()
        cy.get('a:contains("Shop")').click({force:true})
        // cy.addProduct("Blackberry")
        // cy.addProduct("Nokia Edge")

        this.data.productName.forEach(function(element){
          cy.addProduct(element)
        })

    })
    

    it.skip("Test Case - POM Model ",function(){

       const homePage = new HomePage()
       const productPage = new ProductsPage()
      
       cy.visit(Cypress.env('url'))
       homePage.EditName().type(this.data.name)
       homePage.selectGender().select(this.data.gender)
       homePage.verifyTwoWayDataBinding().should('have.value',this.data.name)
       homePage.EditName().should('have.attr',"minLength",2)
       homePage.clickShopTab().click({force:true})
      // // cy.addProduct("Blackberry")
      // // cy.addProduct("Nokia Edge")
        this.data.productName.forEach(function(element){
         cy.addProduct(element)
        })

       productPage.clickCheckOut().click({force:true})
       productPage.clickCheckOutFromSummary().click()
       productPage.enterCountryInformation(this.data.country).click()
       productPage.clickAgreeCheckbox()
       productPage.Purchase().click()
      // cy.get('.alert').should("have.value","Success!  Thank you! Your order will be delivered in next few weeks :-).")

  })

  
  it("Test Case - Amazon Login ",function(){
    // amazonHome.LoginToamazon()
    // amazonHome.enterEmail("m.muralimohan@live.in")
    // amazonHome.clickContinue()
    const amazonMainPage  = new AmazonMainPage()
    cy.LoginToAmazon("m.muralimohan@live.in","Infosys1$")
    amazonMainPage.searchContentAndSelect("Samsung","samsung s20")
    amazonMainPage.searchContentAndSelect("IPhone x","IPhone x")
  
   

})


})