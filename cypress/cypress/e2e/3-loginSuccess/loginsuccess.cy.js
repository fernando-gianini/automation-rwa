import userData from '/Development/study/aula/cypress-realworld-app-develop/cypress-realworld-app/cypress/fixtures/users/userData.json'
import loginPage from '../../pages/loginPage.js';


const LoginPage = new loginPage ()

describe('Login com sucesso', () => {
 
  it('Login-Sucess', () => {
    LoginPage.accessLoginPage()
    LoginPage.loginWhiteAnyUser(userData.userSucess.userName, userData.userSucess.password)
    }
  )
      
  }
)