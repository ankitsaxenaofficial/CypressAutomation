/// <reference types="cypress" />

describe('example to-do app', () => {
let data;
before(function(){

  cy.fixture('TestData').then((testData) => {
    data = testData
  })

})

  beforeEach(() => {
    
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
  })

  it('Verify Price for QA Course', () => {
    
    cy.get('tr td:nth-child(2)').each(($el, index, $list)=>{

      const text = $el.text()
      if(text.includes(data.course)){

        cy.get('tr td:nth-child(2)').eq(index).next().then((price)=>{
          cy.log(price.text())
          expect(price.text()).to.be.equal('20')

        })

      }

    })
  })

 })
