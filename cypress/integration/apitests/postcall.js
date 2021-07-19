/// <reference types="cypress"/>


//const jsondata = require('../../comments.json')..other way of passing value to request.

describe('testing posting comments',()=>{
    let token = "7e265e1f8c90d9247e21e0facb3ad5e8ddb54ea492761126fe26771236f9896b"
       it('post call',()=>{
        cy.fixture('comments').then((commentsdata)=>{            
        cy.request({
            url: 'https://gorest.co.in/public/v1/comments',
            method:'POST',
            headers:{
                Authorization:"Bearer "+ token
            },
            body:{
                    "post_id":125,
                    "name":commentsdata.name,
                    "email":commentsdata.email,
                    "body":commentsdata.body
                }
        }).then((resp)=>{
           // cy.log(JSON.stringify(resp))
            expect(resp.status).to.be.eq(201)
            expect(resp.body.data.id).to.be.a('number')
            

        })
    })
    })
})