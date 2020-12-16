Feature:Minimum No of character letters required for search
    @tc2 @regression @all
    Scenario:
        Given I am on nopCommerceStrore Website's Home page
        When I enter 'LG' in search field
        And I click the search button
        Then A message 'Search term minimum length is 3 characters' is displayed