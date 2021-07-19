/// <reference types="cypress"/>
const faker = require('faker');
describe('validating delete call ', () => {

   let token = 'a0c9f49b2f45dcd1d208e3869c263a2c7bc07176c968db3e699099f38f7f05bc'
    it('validating delete call', () => {

        cy.fixture('user').then((testdata)=>{
            cy.request({
                url:'https://gorest.co.in/public/v1/users',
                method:'POST',
                headers:{
                    Authorization:"Bearer "+ token
                },
                body:{
                    "name": faker.name.firstName()+' '+faker.name.lastName()+' '+faker.name.middleName(),
                    "email": faker.internet.email(),
                    "gender": testdata.gender,
                    "status": testdata.status
                }
            }).then((resp)=>{
                expect(resp.status).to.be.eq(201)
                //expect(resp.body.data.id).to.be.a('#number')
                const requestid = resp.body.data.id
                cy.request({
                    url:'https://gorest.co.in/public/v1/users/'+requestid,
                    method:'DELETE',
                    headers:{
                        Authorization:"Bearer "+ token
                    }
                }).then((resp)=>{
                    expect(resp.status).to.be.eq(204)
                    cy.request({
                        url:'https://gorest.co.in/public/v1/users/'+requestid,
                        method:'GET',
                        failOnStatusCode: false
                    }).then((getresponse)=>{
                        expect(getresponse.status).to.be.eq(404)
                        expect(getresponse.body.data.message).to.be.eq('Resource not found')
                    })
                })
            })
        })

    })
})