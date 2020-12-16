import { NightwatchBrowser } from 'nightwatch';


const commands = {
    async emptySearch(browser: NightwatchBrowser){
        await browser
        .waitForElementVisible("iframe", 10000)
        .frame(0)
        .click(homePage.elements.searchButton)   
    },
    async enterSearchCriteria(browser: NightwatchBrowser, searchString: string){
        await browser
        .waitForElementVisible("iframe", 10000)
        .frame(0)
        .setValue(homePage.elements.searchField, searchString)
        .frame(null);
    },
    async hitSearchButton(browser: NightwatchBrowser){
        await browser
        .waitForElementVisible("iframe", 10000)
        .frame(0)
        .click(homePage.elements.searchButton)
        .frame(null);
    },
    async selectAdvancedSearchCheckbox(browser: NightwatchBrowser){
        await browser
        .waitForElementVisible("iframe", 10000)
        .frame(0)
        .click(homePage.elements.advancedSearchCheckBox)
        .frame(null);
    },
    async selectCategory(browser: NightwatchBrowser, option: string){
        await browser
        .waitForElementVisible("iframe", 10000)
        .frame(0)
        .click(homePage.elements.categoryDropDown)
        .setValue(homePage.elements.categoryDropDown, option)
        .frame(null);
    },
    async selectManufacturer(browser: NightwatchBrowser, option: string){
        await browser
        .waitForElementVisible("iframe", 10000)
        .frame(0)
        .click(homePage.elements.manufacturerDropDown)
        .setValue(homePage.elements.manufacturerDropDown, option)
        .frame(null);
    },
    async selectPriceRange(browser: NightwatchBrowser,priceRangeStart: number,priceRangeEnd: number){
        await browser
        .waitForElementVisible("iframe", 10000)
        .frame(0)
        .click(homePage.elements.priceRangeStart)
        .setValue(homePage.elements.priceRangeStart, priceRangeStart)
        .click(homePage.elements.priceRangeEnd)
        .setValue(homePage.elements.priceRangeEnd, priceRangeEnd)
        .moveToElement(homePage.elements.searchButton,10,10)
        .click(homePage.elements.searchButton)
        .acceptAlert()
        .frame(null);
    },
    async validateAdvSearchResult(browser: NightwatchBrowser, product: string) {
        await browser
        .waitForElementVisible("iframe", 10000)
        .frame(0);
       await browser
            .expect.element(homePage.elements.productSearchResult).text.to.contain(product)
         await browser.elements('xpath', homePage.elements.productSearchResultImage, (elements) => {
                let element = null;
                element = elements.value[1].ELEMENT;
                browser.moveTo(element).mouseButtonClick('left');
        });

    },
    async verifyProductDetails(browser: NightwatchBrowser, productDetails: string){
        await browser.expect.element(homePage.elements.productTitle).text.to.equal(productDetails)

        await browser.expect.element(homePage.elements.addToCartButton).to.be.present
    },
    async verifySortByOptions(browser: NightwatchBrowser, optionValue: []){
        await browser
        .click(homePage.elements.sortByOptionDropDown);

        await browser.elements('css selector', 'select#products-orderby>option', (elements)=>{
        for (let i = 0; i < elements.value.length; i++){
            browser.elementIdText(elements.value[i].ELEMENT, result => {
                browser.assert.equal(result.value, optionValue[i]);
            });
        } 
        });
        await browser.frame(null);
    },
    async validateSearchResult(browser: NightwatchBrowser, product: string) {
        await browser
        .waitForElementVisible("iframe", 10000)
        .frame(0);
       await browser
            .expect.element(homePage.elements.productSearchResult).text.to.contain(product)
    },
    async validateMinCharsInSearchErrorMsg(browser: NightwatchBrowser, searchErrorMsg: string) {
        await browser
        .waitForElementVisible("iframe", 10000)
        .frame(0);
       await browser
            .expect.element(homePage.elements.minCharsInSearchErrorMsg).text.to.equal(searchErrorMsg)
    }
}

export interface homePageObject {
    elements: {
        searchField: string,
        searchButton: string,
        advancedSearchCheckBox: string,
        categoryDropDown: string,
        manufacturerDropDown: string,
        priceRangeStart: string;
        priceRangeEnd: string;
        productSearchResult: string;
        productSearchResultImage: string;
        productTitle: string;
        addToCartButton: string;
        sortByOptionDropDown: string;
        minCharsInSearchErrorMsg: string;
    },
    commands: any;
}

const homePage: homePageObject = {
    elements: {
        searchField: '#small-searchterms',
        searchButton: 'form > input+input',
        advancedSearchCheckBox:'input#adv',
        categoryDropDown: 'select#cid',
        manufacturerDropDown: 'select#mid',
        priceRangeStart: '#pf',
        priceRangeEnd: '#pt',
        productSearchResult: 'h2.product-title a',
        productSearchResultImage: "//img[contains(@title,'Running Shoes')]",
        productTitle:'.product-name h1',
        addToCartButton: '#add-to-cart-button-24',
        sortByOptionDropDown: 'select#products-orderby',
        minCharsInSearchErrorMsg: '.search-results'
    },
    commands: [commands]
};

module.exports = homePage;