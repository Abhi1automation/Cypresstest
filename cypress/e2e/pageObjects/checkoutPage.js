class checkoutPage {

    elements={
        checkoutBtn : ()=>cy.get('#checkout'),
        firstNameInpt: ()=>cy.get('#first-name'),
        lastNameInpt: ()=>cy.get('#last-name'),
        zipCodeInpt: ()=>cy.get('#postal-code'),
        continueBtn: ()=> cy.get('#continue'),
        finishBtn: ()=>cy.get('#finish'),
        successMsg: ()=>cy.get('.complete-header')

    }

    clickCheckout() {
        this.elements.checkoutBtn().click();
    };

    setFirstName(firstName) {
        this.elements.firstNameInpt().type(firstName);
    };

    setLastName(lastName) {
        this.elements.lastNameInpt().type(lastName);
    };

    setPostalCode(code) {
        this.elements.zipCodeInpt().type(code);
    };

    clickContinue() {
        this.elements.continueBtn().click();
    };

    clickFinish() {
        this.elements.finishBtn().click();
    };

    validateSuccessOrder(){

        this.elements.successMsg().should('have.text','Thank you for your order!');
    }

}

export default checkoutPage