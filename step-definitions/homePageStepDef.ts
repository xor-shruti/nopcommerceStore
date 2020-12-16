import { Given, When, Then, TableDefinition } from 'cucumber';
import { client } from 'nightwatch-api';
import {_} from 'lodash';


Given(/^I am on nopCommerceStrore Website's Home page$/, async () => {
  await client.url('https://frontend.nopcommerce.com/').maximizeWindow();
});
When(/^I enter '([^']*)' in search field$/, async (searchString: string) => {
  await client.page.homePage().enterSearchCriteria(client, searchString);
});
When(/^I click the search button$/, async () => {
  await client.page.homePage().hitSearchButton(client);
});
When(/^I check the Advanced Search option$/, async () => {
  await client.page.homePage().selectAdvancedSearchCheckbox(client);
});
When(/^I enter '([^']*)' as category$/, async (category: string) => {
  await client.page.homePage().selectCategory(client, category);
});
When(/^I enter '([^']*)' as manufacturer$/, async (manufacturer: string) => {
  await client.page.homePage().selectManufacturer(client, manufacturer);
});
When(/^I set the price range as '([^']*)' to '([^']*)' and click search button$/, async (priceRangeStart: number, priceRangeEnd: number) => {
  await client.page.homePage().selectPriceRange(client,priceRangeStart,priceRangeEnd);
});
When(/^I click on the '([^']*)' displayed$/, async (product: string) => {
  await client.page.homePage().validateAdvSearchResult(client,product);
});
When(/^I hit enter with empty search field$/, async () => {
  await client.page.homePage().emptySearch(client);
});
Then(/^the product page should be displayed with '([^']*)'$/, async (productDetails: string) => {
  await client.page.homePage().verifyProductDetails(client,productDetails);
});
Then(/^A popup with '([^']*)' message is displayed$/, async (alertMsg: string) => {
  await client.getAlertText((result) => {
    client.assert.equal(result.value, alertMsg);
});
await client.acceptAlert(); 
});
Then(/^the Sort By field should be displayed with the following Values$/, async (table: TableDefinition) => {
  let options = table.hashes();
  let optionsArray = [];
  for(let i=0;i<options.length;i++){
    optionsArray.push(Object.values(options[i]))
  }
await client.page.homePage().verifySortByOptions(client,optionsArray);
});
Then(/^A '([^']*)' product is displayed$/, async (productDetails: string) => {
  await client.page.homePage().validateSearchResult(client,productDetails);
});
Then(/^A message '([^']*)' is displayed$/, async (searchErrorMsg: string) => {
  await client.page.homePage().validateMinCharsInSearchErrorMsg(client,searchErrorMsg);
});
