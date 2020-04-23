import { v4 as uuid } from 'uuid'

const username = uuid().slice(0, 6)
const email = `${username}@mail.com`
const password = uuid().slice(0, 8)

describe('User Onboarding Tests', () =>{
    
    //Navigate to the site
    it('Can navigate to the site', () =>{
        
        cy.visit('')
        cy.url().should('include', 'localhost')
    })

    //Get the Name input and type a name into it
    it('Can enter name into the name input', () =>{
        
        cy.get('input[name="name"]')
          .type(username)
          .should('have.value', username)
    })

    //Get the email input and type in an email
    it('Can enter an email into the email input', () =>{
        cy.get('input[name="email"]')
          .type(email)
          .should('have.value', email)
    })

    //Get the password input and enter a password
    it('Can enter a password in the password input', () =>{
        cy.get('input[name="password"]')
          .type(password)
          .should('have.value', password)
    })

    //Get the ToS checkbox and check it
    it('Can check the Terms of Service box', () =>{
        cy.get('input[name="terms"]')
          .check()
          .should('have.checked')
    }) 
})