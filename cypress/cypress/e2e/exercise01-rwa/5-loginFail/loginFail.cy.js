import userData from '/Development/study/aula/cypress-realworld-app-develop/cypress-realworld-app/cypress/fixtures/users/userData.json'
import loginPage from '../../../pages/loginPage.js';


const LoginPage = new loginPage ()

describe('Tentar fazer login com credenciais inválidas', () => {
 
  it('Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas', () => {
    LoginPage.accessLoginPage()
    LoginPage.loginWhiteAnyUser(userData.userFail.userName, userData.userFail.password)
    LoginPage.verificFailAlert()
    }
  )
      
  }
)