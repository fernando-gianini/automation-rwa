class RegisterUser {

    selectorsList () {
       
        const selectors = {
            signUpButton : '[data-test="signup"]',
            firstNameField : '[name="firstName"]',
            lastNameField : '[name="lastName"]',
            userNameField : '[name="username"]',
            passworldField : '[name="password"]',
            confirmPassworldField : '[name="confirmPassword"]',
            submitButtom: '[type="submit"]',    
            confirmFailAlert: '.SignUpForm-paper'

                }

        return selectors
    }
    
    
    registerRandomUserData (firstName, lastName, userName, confirmePassword) {
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
    alertRegisterFailUser() {

        cy.get(this.selectorsList().confirmFailAlert).contains(/First Name is required| Last Name is required| Username is required|Enter your password|Password must contain at least 4 characters|Confirm your password|Password does not match/).should('exist')
       

    }
   
}

export default RegisterUser