class LoginPage {

    selectorsList () {
        const selectors ={
            usernameField : '[name="username"]',
            passwordField : '[type="password"]',
            submitButton : '[type="submit"]'
        } 

    return selectors
    }

    accessLoginPage() {
        cy.visit('/signin')
    }

    loginWhiteAnyUser(username, password) {
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().submitButton).click()
    }

}

export default LoginPage