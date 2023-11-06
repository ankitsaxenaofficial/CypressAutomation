import {Before, Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import HomePage from '../../pageObjects/HomePage'
let data;
var home = new HomePage()

Before(() => {
    cy.fixture('TestData').then((testData) => {
        data = testData
      })
  })

Given('I open the Application', ()=>{
    cy.visit(data.appURL)

})
When('I fill the User Form', ()=>{

        
        home.getNameTextBox().type(data.name)
        home.geEmailTextBox().type(data.email)
        home.gePasswordTextBox().type(data.password)
        home.clickSubmitBtn().click()      

})

Then('I Verify the Success Message',()=>{

    cy.verifyTextMsg("div.alert.alert-success.alert-dismissible",data.successMsg)   
})