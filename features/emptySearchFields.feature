Feature:Empty Search Field validation
    @tc1 @nightly @all
    Scenario: To verify the result of searching a blank search criteria
        Given I am on nopCommerceStrore Website's Home page
        When I hit enter with empty search field
        Then A popup with 'Please enter some search keyword' message is displayed