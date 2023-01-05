package hellocucumber;

import io.cucumber.java.en.*;

import org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Order;

import java.util.List;

public class StepDefinitions {

    private static SimpleCommerceAcutator_user user;
    private static SimpleCommerceAcutator_Admin admin;
    private String webDriver = "webdriver.chrome.driver";
    private String path = "C:\\Users\\nita1\\IdeaProjects\\sqe-hw3-main\\Selenium\\chromedriver.exe";
    public void simple_commerece(){
        user= new SimpleCommerceAcutator_user();
        user.initSession(webDriver,path);
        admin= new SimpleCommerceAcutator_Admin();
        admin.initSession(webDriver,path);
    }

    // $$*TODO* explain what this step does$$
    @Given("^User is on Home Page and Admin is on home page$")
    public void init() {
        simple_commerece();
    }
    @Given("User is login with UserEmail {string} and enters password:{string}")
    public void enterLoginInfo(String email,String password){
        user.loginSequence(email,password);
    }
    @Given("Admin is login with {string} and password {string}")
    public void enterLoginInfro_admin(String email,String password){
        admin.loginSequence(email,password);
    }
    //
//
//    // $$*TODO* explain what this step does$$
    @When("User search for product name {string}")
    public void allStepDefinitionsAreImplemented(String product_name) {
        user.search_product(product_name);

    }
    @When("Admin search for product from catalog {string}")
    public void searching_from_catalog(String product_name){
        admin.go_dashboard_tab();
        admin.press_catalog_tab();
        admin.press_products_option_from_catalog_tab();
        admin.search_from_catalog(product_name);
    }
    @When("User clicks on the product")
    public void click_on_product(){
        user.click_on_product();
    }
    @When("^User clicks on \"Add to cart\" button$")
    public void add_tocart(){
        user.click_on_add_to_cart();
    }
    @When("^\"The product has been added to your cart\" message displays$")
    public void message_dispaly(){
        user.add_to_cart_message();

    }
    //    // $$*TODO* explain what this step does$$
    @Then("Message displayed adding successfully")
    public void theScenarioPasses() {
        System.out.println("Adding Successfully");
    }
    //    @When("^Admin is navigate to dashboard tab$")
//    public void navigate_dashboard() {
//        admin.go_dashboard_tab();
//    }
//    @When("^Admin clicks on \"catalog tab\" and clicks on products option from catalog$")
//    public void click_catalog() {
//        admin.press_catalog_tab();
//        admin.press_products_option_from_catalog_tab();
//    }
//    @When("Admin search for product name: {string}")
//    public void search_product(String product_name){
//        admin.search_from_catalog(product_name);
//    }
//
//
    @When("Admin un publish the product from the catalog")
    public void unpublish_product(){
        admin.un_publish_product_from_store();
    }
    @When("User navigate to cart")
    public void navigate_to_cart(){
        user.view_product_cart();
    }
    //
    @When("\"Not available any more\" message displays in the cart")
    public void not_available(){
        user.view_product_not_exist_message();
    }
    @Then("Message displayed un publish successful")
    public void message_success(){
        System.out.println("Successful un publish");
//        terminate();
    }
//    public void terminate(){
//        user.terminateDriver();
//
//        admin.terminateDriver();
//    }





}
