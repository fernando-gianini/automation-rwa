class LoginPage {

    selectorsList () {
        const selectors ={
            usernameField : '[name="username"]',
            passwordField : '[type="password"]',
            submitButton : '[type="submit"]',
            confirmBoxLogin: '[data-test="user-onboarding-dialog-title"]',
            failLoginAccess: '[data-test="signin-error"]'
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
    confirmLogin(){
        cy.get(this.selectorsList().confirmBoxLogin)
    }
    verificFailAlert(){
        cy.get(this.selectorsList().failLoginAccess)
    }
}

export default LoginPage