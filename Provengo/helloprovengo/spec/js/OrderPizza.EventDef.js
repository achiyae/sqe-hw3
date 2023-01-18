// /* @Provengo summon selenium */
//
// const products = ["Esprit Ruffle Shirt","T-Shirt with Sleeve","Pieces Metallic Printed","Square Neck Back"]
//
// /**
//  * The first story : Add product to the cart
//  */
defineEvent(SeleniumSession, "LoginAdmin", function(session, e) {
  with (session) {
    // click("//a[@href='/login']");
    writeText("//*[@id=\"Email\"]" , e.Email);
    writeText("//*[@id=\"Password\"]" , e.password);
    click("/html/body/div[4]/div/div[1]/section/form/div[5]/div/button");
  }

})
defineEvent(SeleniumSession, "AddTampleteToTheStore", function(session, e) {
  session.click("/html/body/div[4]/div/form/div/div[3]/button");
})
defineEvent(SeleniumSession, "LogoutAdmin", function(session, e) {
  session.click("//button[normalize-space()='Log off']");
})



//button[normalize-space()='Log off']
//
defineEvent(SeleniumSession, "RegisterAndConnectUser", function(session, e) {
  session.click("//a[@href='/register']");
  session.writeText("//*[@id=\"Email\"]" , e.Email);
  session.writeText("//*[@id=\"FullName\"]" , e.username);
  session.writeText("//*[@id=\"Password\"]" , e.password);
  session.writeText("//*[@id=\"ConfirmPassword\"]" , e.password);
  session.click("/html/body/div[4]/div/div[1]/form/div[6]/div/button");

})


//
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
  session.click("127.0.0.1:5000/admin#!/product");
})
defineEvent(SeleniumSession, "SearchForProductToDelete", function(session, e) {
  session.writeText("/html/body/div[2]/div/table/thead/tr[2]/th[1]/div/input" , e.name);
  assertText("/html/body/div[2]/div/table/thead/tr[3]/th", "1 records found")
})
defineEvent(SeleniumSession, "DeletProductFromTheStore", function(session, e) {
  session.click("/html/body/div[2]/div/table/tbody[1]/tr/td[10]/button[2]/span")
  session.click("/html/body/div[3]/div/div/div[2]/button[2]")
  assertText("/div/button", "Esprit Ruffle Shirt has been deleted")
})
