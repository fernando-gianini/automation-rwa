import LoginPage from "../../pages/loginPage";
import userData from "../../../fixtures/users/userData.json"
import transactionHistory from "../../pages/transactionHistoryPage";

const loginPage = new LoginPage ()
const TransactionHistoryPage = new transactionHistory ()

describe('Visualizar histórico de transações com sucesso', () => {

     it('Deve exibir o histórico de transações de um usuário corretamente', () => {
        loginPage.accessLoginPage()
        loginPage.loginWhiteAnyUser(userData.userSucess.userName, userData.userSucess.password)
        loginPage.confirmLogin()
        TransactionHistoryPage.personalMinePage()
        TransactionHistoryPage.confirmTransaction()
        TransactionHistoryPage.transactionDetail()
    }
  )
    });