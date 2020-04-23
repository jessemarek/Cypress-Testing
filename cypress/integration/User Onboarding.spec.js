import { v4 as uuid } from 'uuid'

//Potential usernames, emails and passwords
const username = uuid().slice(0, 6)
const email = `${username}@mail.com`
const password = uuid().slice(0, 8)

//Drop down menu options
const dropDownDefault = ''
const dropDownFront = 'full'
const dropDownBack = 'back'
const dropDownData = 'data'
const dropDownOps = 'ops'
const dropDownFull = 'full'

describe('New User Form Tests', () =>{
    
    //Navigate to the site
    it('Can navigate to the site', () =>{
        
        cy.visit('')
        cy.url().should('include', 'localhost')
    })

    //Get the Name input and type a name into it
    it('Can enter name into the name input', () =>{
        
        cy.get('input[data-cy="name"]')
          .type(username)
          .should('have.value', username)
    })

    //Get the email input and type in an email
    it('Can enter an email into the email input', () =>{
        cy.get('input[data-cy="email"]')
          .type(email)
          .should('have.value', email)
    })

    //Get the password input and enter a password
    it('Can enter a password in the password input', () =>{
        cy.get('input[data-cy="password"]')
          .type(password)
          .should('have.value', password)
    })

    //Get the Drop down and select each option
    it('Can select all the options from the drop down menu', () =>{
        cy.get('select[data-cy="role"]')
          //Select option 1
          .select(dropDownDefault)
          .should('have.value', dropDownDefault)
          //Select option 2
          .select(dropDownFront)
          .should('have.value', dropDownFront)
          //Select option 3
          .select(dropDownBack)
          .should('have.value', dropDownBack)
          //Select option 4
          .select(dropDownData)
          .should('have.value', dropDownData)
          //Select option 5
          .select(dropDownOps)
          .should('have.value', dropDownOps)
          //Select option 6
          .select(dropDownFull)
          .should('have.value', dropDownFull)
    })

    //Get the ToS checkbox and check it
    it('Can check the Terms of Service box', () =>{
        cy.get('input[data-cy="terms"]')
          .check()
          .should('have.checked')
    })

    //Get the submit button and submit the form
    it('Can submit the form after it is filled in properly', () =>{
        cy.get('button[data-cy="submit"]')
          .click()
    })

    //Check Form Validation if inputs are not filled in correctly
    it('Check for Form Validation Errors', () =>{
        
        //Type 1 character into Name input
        cy.get('input[data-cy="name"]')
          .type('a')
          .should('have.value', 'a')
        
        //This should cause the Form Validation error message to appear
        cy.get('p.error')
          .should('contain', 'Your name must contain at least 3 letters')

        //Type another character into Name input
        cy.get('input[data-cy="name"]')
          .type('b')
          .should('have.value', 'ab')
        
         //This should still cause the Form Validation error message
        cy.get('p.error')
          .should('contain', 'Your name must contain at least 3 letters')

        //Type another character into Name input
        cy.get('input[data-cy="name"]')
        .type('c')
        .should('have.value', 'abc')
      
        //This should cause the Form Validation error message to disappear
        cy.get('p.error')
        .should('not.exist')
    })
})