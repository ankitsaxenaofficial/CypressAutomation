class ShopPage{

    clickShopLink(){

        return cy.get(':nth-child(2) > .nav-link')
    }

    clickCheckoutLink(){

        return cy.get('a.nav-link.btn.btn-primary')
    }

    getProductPrice(){

        return cy.get('tr td:nth-child(4) strong')
    }

    getCheckoutBtn(){

        return cy.get('.btn.btn-success')
    }
    getCountryName(){

        return cy.get('#country')
    }

    selectCountry(){

        return cy.get('.suggestions > :nth-child(1) > li > a')
    }
    getPurchaseBtn(){

        return cy.get('.ng-untouched > .btn')
    }

    getSuccessMsg(){

        return cy.get('.alert')
    }
}

export default ShopPage;