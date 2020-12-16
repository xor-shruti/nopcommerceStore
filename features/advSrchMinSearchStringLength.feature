Feature:Advanced Search - Minimum No of character letters required for search
@tc6 @regression @all
    Scenario: To verify the minimum length of the search string for advanced search
        Given I am on nopCommerceStrore Website's Home page
        When I enter 'UC' in search field
        And I click the search button
        And I check the Advanced Search option
        And I enter 'Apparel' as category
        And I enter 'All' as manufacturer
        And I set the price range as '20' to '60' and click search button
        Then A message 'Search term minimum length is 3 characters' is displayed