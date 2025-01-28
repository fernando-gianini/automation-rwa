import loginPage from "../../pages/loginPage.js"
import registerUser from "../../pages/registerUserPage.js"     

const Chance = require('chance');
const valueToType = null;

const chance = new Chance();
const RegisterUser = new registerUser ()
const LoginPage = new loginPage ()

describe ('Register User Fail', () => {
  
    it('Register-User-Fail', () => {
        LoginPage.accessLoginPage()
        RegisterUser.registerRandomUserData(chance.first(), chance.last(),'Admin','123','1234')
        RegisterUser.alertRegisterFailUser()
        
      
     
    })
})