class HomePage{

    getNameTextBox(){

        return cy.get('input[name="name"]:nth-child(2)')
    }

    geEmailTextBox(){

        return cy.get('input[name="email"]:nth-child(2)')
    }

    gePasswordTextBox(){

        return cy.get("#exampleInputPassword1")
    }

    clickSubmitBtn(){

        return cy.get('input.btn.btn-success')
    }
}

export default HomePage;