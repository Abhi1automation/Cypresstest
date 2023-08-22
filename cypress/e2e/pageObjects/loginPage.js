class LoginPage {

    elements={
        usrNameInpt : ()=>cy.get('#user-name'),
        passwordInpt: ()=>cy.get('#password'),
        loginBtn: ()=>cy.get('#login-button'),
        pageHeader: ()=>cy.get('.app_logo')
    }

    setUserName(username) {
        this.elements.usrNameInpt().type(username);
    };

    setPassword(password) {
        this.elements.passwordInpt().type(password);
    };

    clickLogin() {
        this.elements.loginBtn().click();
    };

    verifySuccessfulLogin(title) {
        this.elements.pageHeader().should('have.text','Swag Labs');
    };

}

export default LoginPage