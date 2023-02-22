import HomePage from '../Pages/HomePage'

describe('PFlegia',function()
{


    before(function(){

        cy.fixture('TestData').then(function(data){
        this.username=data.username
        this.pwd=data.password
        this.incorrect_user=data.incorrect_user
        this.incorrect_pwd=data.incorrect_pwd
        })          

      
    })

beforeEach(function(){
var home=new HomePage();
  //Navigate to PFlegia Application
  cy.visit( Cypress.env('url'));
  
  home.NavigateToLoginPage()

    })

 it('Pflegia Login',function()
 {

//Verification of login url

cy.get(".text-3xl").should('have.text','Willkommen zurück!')

cy.get("input[name='email']").type(this.username)

cy.get("input[name='password']").type(this.pwd)

cy.get("button[type='submit'").click()

cy.url().should('include','prompt') 

//Handle the prompt


cy.get('[data-testid="funnel-skip"]').click()


 })

 it('Incorrect user details',function()
 {  

 
cy.get(".text-3xl").should('have.text','Willkommen zurück!')

cy.get("input[name='email']").type(this.incorrect_user)

cy.get("input[name='password']").type(this.incorrect_pwd)

cy.get("button[type='submit'").click()

//Validate the error message

cy.get("a[role='alert']").then(function($ele){

const ErrorMessage= $ele.text()

cy.log(ErrorMessage + " Error Message is displayed")

})

 })

 it('Reset Password',function()
 {
   
//Click on Forgot Password

cy.get("a[href='/forgot-password']").click()
cy.get('#email').should('be.enabled').type(this.username)
//cy.get("button[type='submit']").click()

 })

 it('User Registration',function(){

   
    cy.get("a[href='/funnel']").should('have.text','Hier registrieren!').click({force:true})




 })



})