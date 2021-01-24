export default class AmazonMainPage{

    searchContentAndSelect(searchContent,contentTOselect){
        cy.get('#twotabsearchtextbox').type(searchContent).should('have.value',searchContent)
        cy.get('#suggestions div').each(($el,index,$list)=>{
            cy.log($el.text())
            if($el.text()===contentTOselect){
               $el.click()
                cy.get('#twotabsearchtextbox').should('have.value',contentTOselect)
                cy.wait(1000)
                cy.get("#twotabsearchtextbox").clear().should('have.value','')
               
            }
        })

        

    }

}