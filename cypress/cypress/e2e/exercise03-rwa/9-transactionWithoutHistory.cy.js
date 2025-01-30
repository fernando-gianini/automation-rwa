import LoginPage from "../../pages/loginPage";
import userData from "../../../fixtures/users/userData.json"
import transactionHistory from "../../pages/transactionHistoryPage";

const loginPage = new LoginPage ()
const TransactionHistoryPage = new transactionHistory ()

describe('Tentar visualizar o histórico de transações sem transações anteriores', () => {

  it('Deve exibir uma mensagem indicando que o usuário não possui transações anteriores', () => {
        loginPage.accessLoginPage()
        loginPage.loginWhiteAnyUser(userData.newUser.userName, userData.newUser.password)
        loginPage.confirmLogin()
        TransactionHistoryPage.personalMinePage()
        TransactionHistoryPage.transactionWhitoutDetail()
    }
  )
    });