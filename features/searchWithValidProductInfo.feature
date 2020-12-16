Feature:Search Functionality with valid product information
    @tc3 @smoke @all
    Scenario: To verify search with valid values
        Given I am on nopCommerceStrore Website's Home page
        When I enter 'Nokia' in search field
        And I click the search button
        Then A 'Nokia Lumia 1020' product is displayed