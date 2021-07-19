/// <reference types="cypress" />

describe('hm test',()=>{

    it('test',()=>{

        cy.visit('https://www2.hm.com/en_in/index.html')
        cy.get('.account > [href="#"][data-remodal-trigger="signin"]').click({force:true})
        cy.get('#modal-txt-signin-email').type('shashi.virajaji@gmail.com')
        cy.get('#modal-txt-signin-password').type('Shashi@12')
        cy.get('#modal-theLoginForm > .button')
        
   

        // cy.get('#email').type('shashi.virajaji@gmail.com')
        // cy.get('#password').type('Shashi12')
        // cy.get('[data-testid=submitButton]').click()
    })
    
})