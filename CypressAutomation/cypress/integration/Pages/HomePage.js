


class HomePage

{

    NavigateToLoginPage()
    {
    //Accept the cookies  
  cy.get('span.my-auto').click();
  
  cy.get("a[href='/login']").click();
  
  //Login Page 
  
  //Verification of login url
  
  cy.url().should('include','login')

    }

}

export default HomePage;