Feature: Ecommerce Application Checkout Feature

    Shop Phones

    Scenario: Purchase Phones
    Given I open the Application
    When I add phones in the cart
    And I Checkout the page
    Then Phones should be successfully added
