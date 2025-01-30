import loginPage from "../../../pages/loginPage.js";
import sendMoney from "../../../pages/sendMoneyPage.js";
import userData from '../../../../fixtures/users/userData.json'

const LoginPage = new loginPage ()
const SendMoney = new sendMoney ()

describe ('Enviar dinheiro com saldo suficiente', () => {
  });
    it('Login-Sucess', () => {
      LoginPage.accessLoginPage()
      LoginPage.loginWhiteAnyUser(userData.userSucess.userName, userData.userSucess.password)
      LoginPage.confirmLogin()
      SendMoney.clickNewSendButton()
      SendMoney.selectorContactList()
      SendMoney.sendContactMoney('15000','teste01')
    });
 