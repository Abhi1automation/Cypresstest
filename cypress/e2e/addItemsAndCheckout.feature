Feature: Adding items to cart and complete the checkout process
   

Scenario: Login to application and add Items to cart and validate successful order placed
  Given I launch the saucedemo website
  When I log in as following
     |userName      |password     |
     |standard_user |secret_sauce |
  Then I click on Login button
  And I should be able to see the Swag Labs header
  And I add 'saucelabsBackpack' to cart
  And I click the Shopping cart
  And I validate the items added in cart is 'saucelabsBackpack'
  And I click on Checkout
  And I fill the user details as following
      |firstName|lastName|zipCode|
      | Test    | User   | 1234  |
  And I click Continue
  And I click Finish
  And I validate that the order is placed successfully


  Scenario: Login to application and add Items to cart and validate that one user item is not added to another user
  Given I launch the saucedemo website
  When I log in as following
     |userName      |password     |
     |standard_user |secret_sauce |
  Then I click on Login button
  And I should be able to see the Swag Labs header
  And I add 'saucelabsBackpack' to cart
  And I click Logout
  When I log in as following
     |userName      |password     |
     |standard_user |secret_sauce |
  Then I click on Login button
  And I click the Shopping cart
  And I should not see 'saucelabsBackpack' added 
  