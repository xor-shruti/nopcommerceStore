Feature:Full Functional Flow - valid
    @tc12 @smoke @all
    Scenario: Full Functional Flow - valid input
        Given I am on nopCommerceStrore Website's Home page
        When I enter 'running shoes' in search field
        And I click the search button
        And I check the Advanced Search option
        And I enter 'Apparel >> Shoes' as category
        And I enter 'Nike' as manufacturer
        And I set the price range as '0' to '100' and click search button
        And I click on the 'Running Shoes' displayed
        Then the product page should be displayed with 'Nike Floral Roshe Customized Running Shoes'