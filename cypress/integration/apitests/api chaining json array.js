/// <reference types="cypress"/>

describe('reading json array from call ',()=>{

    it('reading json array',()=>{

        cy.request({
            url:'https://www.metaweather.com/api/location/search/?query=san'
        }).then((resp)=>{
                   
            for(var i=0;i<resp.body.length;i++)    
            {
                var city = resp.body[i].title
                cy.log('city = '+ city)
                cy.request({

                    url:'https://www.metaweather.com/api/location/search/?query='+city                    
                }).then((resp)=>{
                        //cy.log(JSON.stringify(resp))
                        expect(resp.body[0].title).to.be.eq(city)
                })
            }
           
               
        })

    })
})