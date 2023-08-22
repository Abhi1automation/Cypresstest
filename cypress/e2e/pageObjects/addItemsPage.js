class addItemsPage {

    elements = {
        addsaucelabsBackpack: () => cy.get('#add-to-cart-sauce-labs-backpack'),
        addsaucelabsBikeLight: () => cy.get('#add-to-cart-sauce-labs-bike-light'),
        addsaucelabsBoltTshirt: () => cy.get('#add-to-cart-sauce-labs-bolt-t-shirt'),
        addsaucelabsFleeceJacket: () => cy.get('#add-to-cart-sauce-labs-fleece-jacket'),
        addsaucelabsOnesie: () => cy.get('#add-to-cart-sauce-labs-onesie'),
        addsaucelabsTshirtRed: () => cy.get('[#add-to-cart-test.allthethings()-t-shirt-(red)]'),
        saucelabsBackpack: () => cy.get('.inventory_item_name').contains('Sauce Labs Backpack'),
        saucelabsBikeLight: () => cy.get('.inventory_item_name').contains('Sauce Labs Bike Light'),
        saucelabsBoltTshirt: () => cy.get('.inventory_item_name').contains('Sauce Labs Bolt T-Shirt'),
        saucelabsFleeceJacket: () => cy.get('.inventory_item_name').contains('Sauce Labs Fleece Jacket'),
        saucelabsOnesie: () => cy.get('.inventory_item_name').contains('Sauce Labs Onesie'),
        saucelabsTshirtRed: () => cy.get('.inventory_item_name').contains('Test.allTheThings() T-Shirt (Red)'),
        shoppingcart: () => cy.get('.shopping_cart_link')

    }

    addItemstoCart(item) {

        switch (item) {

            case "saucelabsBackpack":
                this.elements.addsaucelabsBackpack().click();
                break;

            case "saucelabsBikeLight":
                this.elements.addsaucelabsBikeLight().click();
                break;

            case "saucelabsBoltTshirt":
                this.elements.addsaucelabsBoltTshirt().click();
                break;

            case "saucelabsFleeceJacket":
                this.elements.addsaucelabsFleeceJacket().click();
                break;

            case "saucelabsOnesie":
                this.elements.addsaucelabsOnesie().click();
                break;

            case "saucelabsTshirtRed":
                this.elements.addsaucelabsTshirtRed().click();
                break;
        }
    }

    clickShoppingCart(){
        this.elements.shoppingcart().click();
    }


    validateItemsadded(item){

        switch(item){

        case "saucelabsBackpack":
            this.elements.saucelabsBackpack().should('be.visible');
            break;

        case "saucelabsBikeLight":
            this.elements.saucelabsBikeLight().should('be.visible');
            break;

        case "saucelabsBoltTshirt":
            this.elements.saucelabsBoltTshirt().should('be.visible');
            break;

        case "saucelabsFleeceJacket":
            this.elements.saucelabsFleeceJacket().should('be.visible');
            break;

        case "saucelabsOnesie":
            this.elements.saucelabsOnesie().should('be.visible');
            break;

        case "saucelabsTshirtRed":
            this.elements.saucelabsTshirtRed().should('be.visible');
            break;

        }

    }



}

export default addItemsPage