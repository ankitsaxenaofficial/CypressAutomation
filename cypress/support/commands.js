// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('verifyTextMsg', ($ele, msg) => { cy.get($ele).then(function(text){
    const textMsg = text.text()
    expect(textMsg).to.include(msg)

 }) 
})

Cypress.Commands.add('selectProduct', (productName) => { cy.get("h4.card-title a").each(($el, index, $list)=>{
    if($el.text().includes(productName)){

     cy.get(".btn.btn-info").eq(index).click()
    }
 })
})

Cypress.Commands.add('verifyCartPrice', (cartPrice, totalPrice) => { 
    cy.get('tr td:nth-child(4) strong').each(($el, index, $list)=>{
    
        var price = $el.text().split(" ")
        
        cartPrice = Number(cartPrice) + Number(price[1])          
    
    }).then(function(){
        expect(cartPrice).to.be.equal(totalPrice)
})
})
//



// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })