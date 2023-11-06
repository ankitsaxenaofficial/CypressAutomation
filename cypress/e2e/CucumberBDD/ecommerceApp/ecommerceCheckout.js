import {Before, Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
import ShopPage from '../../pageObjects/ShopPage'
let data;
var shop = new ShopPage()
var cartPrice = 0
Before(() => {
    cy.fixture('TestData').then((testData) => {
        data = testData
        
      })
  })


When('I add phones in the cart', ()=>{
    
    shop.clickShopLink().click()
    data.productname.forEach(function(element){
        cy.selectProduct(element)
    })  

})

And('I Checkout the page',()=>{
       
shop.clickCheckoutLink().click()
cy.verifyCartPrice(cartPrice, data.totalPrice)
shop.getCheckoutBtn().click()
shop.getCountryName().type(data.country)
shop.selectCountry().click()
shop.getCountryName().invoke('val').then(function(value){
    expect(value).to.be.equal(data.countryValue)
})
shop.getPurchaseBtn().click()
})

Then('Phones should be successfully added',()=>{
    cy.verifyTextMsg('.alert',data.successMsg)
 
})