/// <reference types="cypress" />

describe('checking get calls',()=>{

   
    it('get all  the users ',()=>{
        let token = '7e265e1f8c90d9247e21e0facb3ad5e8ddb54ea492761126fe26771236f9896b'
        cy.request({
            url:'/users',
            headers :{
                ContentType: 'application/json',
                Authorization: 'Token '+ token
            }
        }).then((res)=>{
            expect(res.status).to.be.eq(200)
            expect(res.body.meta.pagination.pages).to.be.eq(73)
            expect(res.body.data[1].name).to.be.not.eq(' ')
            cy.log(res.body.data.length)
        })
    })

    it('get single user data ',()=>{
        let token = '7e265e1f8c90d9247e21e0facb3ad5e8ddb54ea492761126fe26771236f9896b'
        cy.request({
            url:'https://gorest.co.in/public-api/users/5',
            headers :{
                ContentType: 'application/json',
                Authorization: 'Token '+ token
            }
        }).then((res)=>{
            expect(res.status).to.be.eq(200)
          //  expect(res.body.meta.pagination.pages).to.be.eq(73)
           // expect(res.body.data[1].name).contains('Krishna')
            cy.log(res.body.data.length)
        })
    })
})
