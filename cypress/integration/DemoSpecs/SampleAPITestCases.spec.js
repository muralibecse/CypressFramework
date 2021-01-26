describe('API testing',()=>{

    it('GET API', ()=>{
        cy.request("https://reqres.in/api/users?page=2").then((response)=>{
            expect(response).to.have.property('status',200)
            expect(response.body.data[0]).has.property('email','michael.lawson@reqres.in')
            expect(response.body.data).has.length(6)
            expect(response.body).has.property('per_page',6)
        })
    })
    it('POST API', ()=>{
       const item = {"name": "morpheus","job": "leader"}      
        cy.request('POST', 'https://reqres.in/api/users', item).then((response)=>{
            expect(response).to.have.property('status',201)
        })
    })

    it('UPDATE API', ()=>{
        const item = {"name": "morpheusnew","job": "leadernew"}
        cy.request('PUT', 'https://reqres.in/api/users/2', item).then((response)=>{
            expect(response).to.have.property('status',200)
        })
    
    })

    it('DELETE API', ()=>{
        const item = {"name": "morpheus","job": "leader"}
        cy.request('DELETE', 'https://reqres.in/api/users/2', item).then((response)=>{
            expect(response).to.have.property('status',204)
        })
    
    })
})