Feature: A set of scenarios for testing the "example" module

  Scenario Outline: Successful  adding product to cart
    Given User is on Home Page and Admin is on home page
    And User is login with UserEmail <UserEmail> and enters password:<Password>
    And Admin is login with "admin@simplcommerce.com" and password "1qazZAQ!"
    When User search for product name <product>
    And Admin search for product from catalog <product>
    And User clicks on the product
    And User clicks on "Add to cart" button
    And "The product has been added to your cart" message displays
    Then Message displayed adding successfully
    Examples:
      | UserEmail | Password       |product|
      |"nitay@gever.com"|"1995"|"Converse All Star Hi Plimsolls"|


#  Scenario Outline: Successful un publish product from store
###    todo maybe the given can be shorter like user see the product in cart. asking achiya
#    When Admin is navigate to dashboard tab
#    And Admin clicks on "catalog tab" and clicks on products option from catalog
#    And Admin search for product name: <product>
#    And Admin un publish the product from the catalog
#    And User navigate to cart
#    And "Not available any more" message displays in the cart
#    Then Message displayed un publish successful
#
##    And Admin delete the product from the catalog
##    And "Not availabe any more" note displays in the cart
##    Then Message dislayed the product has been deleted
#    Examples:
#    |product|
#    |"Converse All Star Hi Plimsolls"|
  Scenario: Admin successful deleting
    When Admin un publish the product from the catalog
    And User navigate to cart
    And "Not available any more" message displays in the cart
    Then Message displayed un publish successful