class RegisterUser {

    selectorsList () {
        const selectors = {
            signUpButton : '[data-test="signup"]',
            firstNameField : '[name="firstName"]',
            lastNameField : '[name="lastName"]',
            userNameField : '[name="username"]',
            passworldField : '[name="password"]',
            confirmPassworldField : '[name="confirmPassword"]',
            submitButtom: '[type="submit"]'            
                }

        return selectors
    }
    
    
    registerRandomUserData (firstName, lastName, userName, password, confirmePassword) {
        cy.get(this.selectorsList().signUpButton).click()
        cy.get(this.selectorsList().firstNameField).type(firstName)
        cy.get(this.selectorsList().lastNameField).type(lastName)
        cy.get(this.selectorsList().userNameField).type(userName)
        cy.get(this.selectorsList().passworldField).type(password)
        cy.get(this.selectorsList().confirmPassworldField).type(confirmePassword)
        
    }

    signUpCadButton () {
        cy.get(this.selectorsList().submitButtom).click()
    }
   
}

export default RegisterUser