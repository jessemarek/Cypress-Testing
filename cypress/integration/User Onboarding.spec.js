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

    //Get the Drop down and select each option
    it('Can select all the options from the drop down menu', () =>{
        cy.get('select[name="role"]')
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
        cy.get('input[name="terms"]')
          .check()
          .should('have.checked')
    })

    //Get the submit button and submit the form
    it('Can submit the form after it is filled in properly', () =>{
        cy.get('button[type="submit"]')
          .click()
    })
})