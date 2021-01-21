class HomePage{

    EditName(){
        return  cy.get("input[name='name']:nth-child(2)");
    }

    verifyTwoWayDataBinding(){
        return  cy.get("input[name='name']:nth-child(1)");
    }

    selectGender(){
        return cy.get("#exampleFormControlSelect1");
    }

    clickShopTab(){
        return cy.get('a:contains("Shop")');
    }

}

export default HomePage;