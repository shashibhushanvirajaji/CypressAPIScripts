describe('checking view ports',()=>{

    it('testing viewport dimensions',()=>{

       
        cy.visit('https://www.google.co.in/')
        cy.viewport(400,800)
    })
})