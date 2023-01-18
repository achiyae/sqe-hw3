
// /**
//  * The first story : Add product to the cart
//  */
defineEvent(SeleniumSession, "Login", function(session, e) {
  with (session) {
    click("//*[@id=\"cookieConsent\"]/div/div/div/button")
    click("//a[@href='/login']");
    writeText("//*[@id=\"Email\"]" , e.Email);
    writeText("//*[@id=\"Password\"]" , e.password);
    click("/html/body/div[4]/div/div[1]/section/form/div[5]/div/button");
  }

})

defineEvent(SeleniumSession, "SearchProduct", function(session, e) {
  session.writeText("//*[@id=\"Query\"]", e.name)
  session.click("/html/body/div[2]/div/div/div[2]/form/button/i")
})
defineEvent(SeleniumSession, "AddProductToCart", function(session, e) {
  session.click("/html/body/div[4]/div/div[2]/div[2]/div/div/a/div/h5");
  session.click("/html/body/div[4]/div[1]/div[1]/div[2]/div[4]/form/button");
  session.click("//*[@id=\"shopModal\"]/div/div/div[3]/a");
})

//
// /**
//  * The second story : Remove product from the store
//  */
defineEvent(SeleniumSession, "GoToProductPage", function(session, e) {
    // session.click("/html/body/div[1]/div/div[2]/ul/li[2]/ul/li[1]/a");
  session.click("//a[normalize-space()='Dashboard']");
  session.click("//a[normalize-space()='Catalog']");
  session.click("//a[@ui-sref='product']");
})
defineEvent(SeleniumSession, "SearchForProductToDelete", function(session, e) {
  session.writeText("/html/body/div[2]/div/table/thead/tr[2]/th[1]/div/input" , e.name);
})
defineEvent(SeleniumSession, "DeletProductFromTheStore", function(session, e) {
  session.waitForVisibility("//span[@class='glyphicon glyphicon-remove']")
  session.click("//span[@class='glyphicon glyphicon-remove']")
  session.click("/html/body/div[3]/div/div/div[2]/button[2]")
})
