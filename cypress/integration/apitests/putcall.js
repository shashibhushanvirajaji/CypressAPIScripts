/// <reference types="cypress"/>
const faker = require('faker');
describe('validating delete call ', () => {

    let token = 'a0c9f49b2f45dcd1d208e3869c263a2c7bc07176c968db3e699099f38f7f05bc'
    it('validating delete call', () => {
        var firstname = faker.name.firstName()
        var lastname = faker.name.lastName()
        var middleName = faker.name.middleName()
        var fullName = firstname + ' ' + lastname + ' ' + middleName
        var emailID = faker.internet.email()
      
            cy.request({
                url: 'https://gorest.co.in/public/v1/users',
                method: 'POST',
                headers: {
                    Authorization: "Bearer " + token
                },
                body: {
                    "name": fullName,
                    "email": emailID,
                    "gender": "male",
                    "status": "active"
                }
            }).then((resp) => {
                expect(resp.status).to.be.eq(201)
                cy.log('request id '+resp.body.data.id)
                cy.log('before change - firstname - '+fullName)
                cy.log('before change - emailID - '+emailID)
                const requestid = resp.body.data.id
                var fullNameUpdated = faker.name.firstName() + ' ' + faker.name.lastName() + ' ' + faker.name.middleName()
                var emailIDUpdated = faker.internet.email()
                cy.request({
                    url: 'https://gorest.co.in/public/v1/users/' + requestid,
                    method: 'PUT',
                    headers: {
                        Authorization: "Bearer " + token
                    }, 
                    body: {                       
                        "name": fullNameUpdated,
                        "email": emailIDUpdated,
                        "gender": "male",
                        "status": "active"
                    }
                }).then((resp) => {
                    expect(resp.status).to.be.eq(200)                 
                    cy.log('after change - firstname - '+fullNameUpdated)
                    cy.log('after change - emailID - '+emailIDUpdated)
                })
            })
       

    })
})