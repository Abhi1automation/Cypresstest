/// <reference types="Cypress" />
import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";
import loginPage from "../pageObjects/loginPage";
import addItemsPage from "../pageObjects/addItemsPage";
import checkoutPage from "../pageObjects/checkoutPage";
let login= new loginPage();
let addItems=new addItemsPage();
let checkout =new checkoutPage();

Given("I launch the saucedemo website", ()=>{

    cy.visit("https://www.saucedemo.com/");
})

When("I log in as following", (datatable)=>{

    datatable.hashes().forEach(element => {

        login.setUserName(element.userName);
        login.setPassword(element.password);
    });

})

Then("I click on Login button", ()=>{

    login.clickLogin();
})

Then("I should be able to see the Swag Labs header", ()=>{

    login.verifySuccessfulLogin();
})

Then("I add {string} to cart", (item)=>{

    addItems.addItemstoCart(item);

})

Then("I click the Shopping cart", ()=>{

    addItems.clickShoppingCart();
})

Then("I validate the items added in cart is {string}", (item)=>{

    addItems.validateItemsadded(item);

})

Then("I click on Checkout", ()=>{

    checkout.clickCheckout();

})

Then("I fill the user details as following", (datatable)=>{

    datatable.hashes().forEach(element => {

        checkout.setFirstName(element.firstName);
        checkout.setLastName(element.lastName);
        checkout.setPostalCode(element.zipCode);
    });

})

Then("I click Continue", ()=>{

    checkout.clickContinue();

})

Then("I click Finish", ()=>{

    checkout.clickFinish();

})


Then("I validate that the order is placed successfully", ()=>{

    checkout.validateSuccessOrder();

})

Then("I click Logout", ()=>{

    loginPage.clickLogout();

})


Then("I should not see {string} added", (item)=>{

    addItems.validateNoItemsadded(item)

})

