
describe('test suite',()=>{
    before(()=>{
        cy.task('getSession', 
        {
            username: 'testadmin', password: 'cap@dmin05', 
        url: 'https://uncd136.duckcreekondemand.com/Policy/default.aspx'}).then(session => {
            cy.restoreSession(session);
        })
    })
    it('login test',()=>{
        cy.visit('/')
     

    })


})
