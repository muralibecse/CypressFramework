describe('To check basic actions', ()=>{

    it('Write basic actions', ()=>{
        //launch site
        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')
        //title assertion
        cy.title().should('include','Practice Page')
        
        //radio button
        cy.get('input[value="radio2"]').click()
        //check box
        cy.get('input[value="option3"]').click()
        //static dropdown
        cy.get('#dropdown-class-example')
        .select('Option1')
        .should('have.value','option1')
        //auto-suggestive dropdown
        cy.get('#autocomplete').click()
        cy.get('#autocomplete').type('Australia')
        cy.get('#autocomplete').type('{downarrow}')
        cy.get('#autocomplete').type('{enter}')

        //alert
        cy.get('input[id="alertbtn"]').click()

        //alert message assert
        cy.on('window:alert', (message)=>{
            expect(message).to.equal('Hello , share this practice page and share your knowledge')
        })

        //navigate forward
        cy.get('.blinkingText').click()
        cy.go('forward')
        cy.title().should('include','Rahul Shetty Academy')

        //navigate backward
        cy.go('back')
        cy.title().should('include','Practice Page')

        //table - element at any part of the table
        cy.get('table[name="courses"]').contains('td','Write effective QA Resume that will turn to interview call').should('be.visible')

        //table - elemnt from a specific location
        cy.get('table[name="courses"] > tbody > tr:nth-child(11) > td:nth-child(2)').contains('Write effective QA Resume that will turn to interview call').should('be.visible')

        //table - get element by iterating a column
        cy.get('table[name="courses"] > tbody > tr > td:nth-child(2)').each(($e, index, $list) => {
            const text = $e.text()
            if (text.includes("Write effective QA Resume that will turn to interview call"))
            {
                cy.get('table[name="courses"] > tbody > tr > td:nth-child(3)').eq(index).then(function(price) 
                {
                const rate = price.text()
                expect(rate).to.equals("0")
                })
            }
        })

        //mouse actions
        //scroll down for an element
        cy.get('div[class="col-sm-8 right-align"]').scrollIntoView()
        
        //scroll up for an element
        cy.get('img[class="logoClass"]').scrollIntoView()

  
    })
})