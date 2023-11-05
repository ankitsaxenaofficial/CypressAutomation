import HomePage from '../pageObjects/HomePage'
import ShopPage from '../pageObjects/ShopPage'

describe('example to-do app', () => {
    let data;
    before(function(){
    
      cy.fixture('TestData').then((testData) => {
        data = testData
      })
    
    })
    
      beforeEach(() => {
        
        cy.visit(data.appURL)
      })
    
      it('Fill Appliction Form', () => {
        const home = new HomePage()
        home.getNameTextBox().type(data.name)
        home.geEmailTextBox().type(data.email)
        home.gePasswordTextBox().type(data.password)
        home.clickSubmitBtn().click()
        cy.verifyTextMsg("div.alert.alert-success.alert-dismissible",data.successMsg)   

        })

        it('Complete Checkout Process', () => {
            var cartPrice = 0
            const shop = new ShopPage()
            shop.clickShopLink().click()
            data.productname.forEach(function(element){
                cy.selectProduct(element)
            })            
        shop.clickCheckoutLink().click()
        cy.verifyCartPrice(cartPrice, data.totalPrice)
        shop.getCheckoutBtn().click()
        shop.getCountryName().type(data.country)
        shop.selectCountry().click()
        shop.getCountryName().invoke('val').then(function(value){
            expect(value).to.be.equal(data.countryValue)
        })
        shop.getPurchaseBtn().click()
        cy.verifyTextMsg('.alert',data.successMsg)
        })

    })