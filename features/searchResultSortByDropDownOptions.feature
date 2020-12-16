Feature:Search Result- Sort By Option DropDown Values Validation
    @tc9 @smoke @all
    Scenario: To verify the Sort By field drop down values
        Given I am on nopCommerceStrore Website's Home page
        When I enter 'running shoes' in search field
        And I click the search button
        And I check the Advanced Search option
        And I enter 'Apparel >> Shoes' as category
        And I enter 'Nike' as manufacturer
        And I set the price range as '0' to '100' and click search button
        Then the Sort By field should be displayed with the following Values
            | Values             |
            | Position           |
            | Name: A to Z       |
            | Name: Z to A       |
            | Price: Low to High |
            | Price: High to Low |
            | Created on         |