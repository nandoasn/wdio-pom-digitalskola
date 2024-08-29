import CartPage from "../pageobjects/cart.page";
import HomePage from "../pageobjects/home.page";
import LoginPage from "../pageobjects/login.page";

describe('Login Test', () => {
    it('Test 3 - Successful login - Page Object Based', async () => {
        await LoginPage.open()
        await LoginPage.login("standard_user", "secret_sauce")
        await HomePage.validateonHomePage()
        await HomePage.cart()
        await CartPage.validateonCart()
    });

    // it('Test 4 - Login with wrong password', async () => {
    //     await LoginPage.open()
    //     await LoginPage.login("standard_user", "secret_sauce123")
    //     await LoginPage.validateWrongPasswordDisplayed()
    // });
});