/* @provengo summon selenium */

/**
 *
 *
 *
 *
 */


story('Add product to the cart', function (){
    with(new SeleniumSession().start('http://127.0.0.1:5000/login')){
        loginAdmin({Email: 'admin@simplcommerce.com' , password: '1qazZAQ!'})
        addTampleteToTheStore()
        logoutAdmin()
        registerAndConnectUser({Email: 'usere1aeqfsdfsd2df@user.com' ,username: 'ewqufdsfserasdasdw_222' ,password: '123456'})
        searchProduct({name: "Esprit Ruffle Shirt"})
        addProductToCart()
    }
    }
    )

story('Remove product from the store', function (){
      with(new SeleniumSession().start('http://127.0.0.1:5000/login')){
        loginAdmin({Email: 'admin@simplcommerce.com' , password: '1qazZAQ!'})
        goToProductPage()
        searchForProductToDelete({name: "Esprit Ruffle Shirt"})
        deletProductFromTheStore()

      }
    }
)




























// /***********************************************************************************
//  * Login to the store as a regular user.
//  *
//  * Parameters:
//  *   username: string - The user that logs in
//  *   password: string - The password of that user
//  ************************************************************************************/
// defineEvent(SeleniumSession, "Login", function (session, event) {
//     with (session) {
//         click("//a[contains(text(),'Sign In')]");
//         writeText('//input[@id="email"]', event.username);
//         writeText('//input[@id="pass"]', event.password);
//         click('//button[@id="send2"]');
//
//         if (event.expectedWelcome)
//             waitForVisibility("//span[text()='" + event.expectedWelcome + "']", 20000)
//     }
// });
//
//
// /***********************************************************************************
//  * Login to the store as an admin user.
//  *
//  * Parameters:
//  *   username: string - The user that logs in
//  *   password: string - The password of that user
//  ************************************************************************************/
// defineEvent(SeleniumSession, "AdminLogin", function (session, event) {
//     with (session) {
//         writeText('//input[@id="username"]', event.username);
//         writeText('//input[@id="login"]', event.password);
//         click("//span[text()='Sign in']");
//     }
// });
//
// /***********************************************************************************
//  * Logout a regular user.
//  *
//  ************************************************************************************/
// defineEvent(SeleniumSession, "Logout", function (session, event) {
//     with (session) if (type() == "Selenium") {
//         click("//span[@class='customer-name']//button");
//         click("//a[normalize-space()='Sign Out']");
//     }
// });
//
// /***********************************************************************************
//  * Register a  user.
//  *
//  * Parameters:
//  *   s: string              - The name of the session in which we want this event to take place
//  *   firsntame : string     - The name of the new user
//  *   lastname : string      - The surname of the new user
//  *   email_address : string - An email address for the user. Must be unique.
//  *   password : string      - Password for the new user.
//  ************************************************************************************/
// defineEvent(SeleniumSession, "Register", function (session, event) {
//     with (session) {
//         click("//a[@href='http://localhost/customer/account/create/']");
//         writeText('//input[@id="firstname"]', event.firstname);
//         writeText('//input[@id="lastname"]', event.lastname);
//         writeText('//input[@id="email_address"]', event.email_address);
//         writeText('//input[@id="password"]', event.password);
//         writeText('//input[@id="password-confirmation"]', event.password);
//         click('//button[@type="submit" and contains(concat(" ",normalize-space(@class)," ")," action ") and contains(concat(" ",normalize-space(@class)," ")," submit ")]');
//         assertText("//div[@data-ui-id='message-success']//div[1]", "Thank you for registering with Main Website Store.")
//     }
// });
//
//
// /***********************************************************************************
//  * Add an item to the cart of the currently logged-in user.
//  *
//  * Parameters:
//  *   s: string                  - The name of the session in which we want this event to take place.
//  *   category : string          - The category of the product that we want to add.
//  *   subCategory : string       - The sub-category of the product that we want to add.
//  *   product : string           - The  product that we want to add.
//  *   options : array of strings - A list of options for the product.
//  *   quantity: number, optional - The number of items to add.
//  ************************************************************************************/
// defineEvent(SeleniumSession, "AddToCart", function (session, event) {
//     with (session) {
//
//         click("//span[text()='" + event.category + "']");
//         click("(//span[text()='" + event.category + "'])/following::span[text()='" + event.subCategory + "']/following::a[text()[normalize-space()='" + event.subSubCategory + "']]");
//
//         selectByValue("//div[@class='toolbar toolbar-products']/following::select[@id='limiter']", '36')
//
//         moveToElement("(//img[@alt='" + event.product + "'])[last()]")
//         waitForClickability("(//img[@alt='" + event.product + "'])[last()]", 20000);
//         click("(//img[@alt='" + event.product + "'])[last()]");
//
//         for (let opt in event.options) {
//             // Click the options
//             click("//div[@data-option-label='" + event.options[opt] + "']");
//
//             // Verify that it was selected
//             waitForVisibility("//div[@data-option-label='" + event.options[opt] + "' and contains(@class,'selected')]", 20000);
//         }
//         if (event.quantity) {
//             writeText("//input[@title='Qty']", event.quantity, true);
//         }
//
//         if (event.expected_image) {
//             waitForVisibility("//img[contains(@src, '" + event.expected_image + "')]", 20000);
//         }
//         click("//button[@id='product-addtocart-button']/span");
//         waitForVisibility("//div[@data-ui-id='message-success']//div[1]", 20000);
//         assertText("//div[@data-ui-id='message-success']//div[1]", "You added " + event.product + " to your shopping cart.");
//     }
// })
//
//
// /***********************************************************************************
//  * Remove an item from the cart of the currently logged-in user.
//  *
//  * Parameters:
//  *   s: string        - The name of the session in which we want this event to take place.
//  *   product : string - The  product that we want to remove.
//  ************************************************************************************/
// defineEvent(SeleniumSession, "RemoveFromCart", function (session, event) {
//     with (session) {
//         click("//a[@class='action showcart']");
//         click("//a[text()[normalize-space()='" + event.product + "']]/following::a[@class='action delete']");
//         click("//div[text()='Are you sure you would like to remove this item from the shopping cart?']/following::span[text()='OK']");
//         waitForInvisibility("//div[contains(@class,'block block-minicart')]//img[@alt='" + event.product + "']", 20000);
//         click("//button[@id='btn-minicart-close']");
//     }
// });
//
// /***********************************************************************************
//  * Check that a product exists in the cart of the currently logged-in user.
//  *
//  * Parameters:
//  *   s: string -      - The name of the session in which we want this event to take place.
//  *   product : string - The  product that we want to remove.
//  ************************************************************************************/
// defineEvent(SeleniumSession, "CheckExistenceOfProductInCart", function (session, event) {
//     with (session) {
//         click("//a[@class='action showcart']");
//         waitForVisibility("//div[contains(@class,'block block-minicart')]//img[@alt='" + event.product + "']", 20000);
//         click("//button[@id='btn-minicart-close']");
//     }
// });
//
//
// /***********************************************************************************
//  * Check-out the items in the cart of the currently logged-in user.
//  *
//  * Parameters:
//  *   s: string                                              - The name of the session in which we want this event to take place.
//  *   verifyItems : array of strings, optional               - A list of items that we expect to see in the cart.
//  *   verifyNonexistenceOfItems : array of strings, optional - A list of items that we expect not to see in the cart.
//  *   shippingMethod : string, optional                      - The shopping method that we want to use for this order.
//  ************************************************************************************/
// defineEvent(SeleniumSession, "CheckOut", function (session, event) {
//     with (session) {
//         click("//a[@class='action showcart']");
//         click("//button[@title='Proceed to Checkout']");
//
//         if (event.verifyItems || event.verifyNonexistenceOfItems) {
//             waitForClickability("//div[contains(@class,'items-in-cart')]//div", 200000);
//             waitForClickability("//div[contains(@class,'items-in-cart')]//div", 200000);
//             click("//div[contains(@class,'items-in-cart')]//div");
//         }
//
//         if (event.verifyItems) {
//             for (item in event.verifyItems) {
//                 waitForVisibility("//img[@alt='" + event.verifyItems[item] + "']", 20000);
//             }
//         }
//
//         if (event.verifyNonexistenceOfItems) {
//             for (item in event.verifyNonexistenceOfItems) {
//                 waitForInvisibility("//img[@alt='" + event.verifyNonexistenceOfItems[item] + "']", 20000);
//             }
//         }
//
//         if (event.shippingMethod) {
//             waitForClickability("//td[text()='" + event.shippingMethod + "']", 20000);
//             click("//td[text()='" + event.shippingMethod + "']");
//         }
//
//         click("//span[text()='Next']");
//
//         if (event.verifyItems) {
//             for (item in event.verifyItems) {
//                 waitForVisibility("//img[@alt='" + event.verifyItems[item] + "']", 20000);
//             }
//         }
//         if (event.verifyNonexistenceOfItems) {
//             for (item in event.verifyNonexistenceOfItems) {
//                 waitForInvisibility("//img[@alt='" + event.verifyNonexistenceOfItems[item] + "']", 20000);
//             }
//         }
//
//
//         waitForClickability("//button[contains(@class,'action primary')]", 20000);
//         runCode("jQuery(document.querySelectorAll('button[class*=\"action primary\"]')).click()");
//         waitForVisibility("//p[text()='Your order number is: ']", 20000);
//         click("//span[text()='Continue Shopping']");
//     }
// });

