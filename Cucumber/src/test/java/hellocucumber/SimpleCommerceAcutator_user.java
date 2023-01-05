package hellocucumber;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;
import java.util.Random;
public class SimpleCommerceAcutator_user {
    private WebDriver driver;
    private WebDriverWait wait;

    public void initSession(String webDriver, String path){
        System.setProperty(webDriver, path);
        // new chrome driver object
        this.driver = new ChromeDriver();
        // new web driver wait -> waits until element are loaded (40 sec max)
        this.wait = new WebDriverWait(driver, Duration.ofSeconds(40));
        // launch website -> localhost
        driver.get("http://localhost:5000/");
        // maximize the window - some web apps look different in different sizes
        driver.manage().window().maximize();
        System.out.println("Driver setup finished for - " + driver.getTitle());
        this.accept_terms();
    }
    public void accept_terms(){
        driver.findElement(By.xpath("//*[@id=\"cookieConsent\"]/div/div/div/button")).click();
    }

    public void goToLogin(){
        // locate and click on web element -> login
        driver.findElement(By.xpath("/html/body/div[1]/div/ul/li[1]/a")).click();
    }

    public void enterLoginInfo(String Email, String password) {
        // locate the username input box and enter username
        // $x("//*[@id='username']")
        // driver.findElement(By.xpath("//*[@id='username']")).sendKeys(username);
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id='Email']"))).sendKeys(Email);

        // locate the password input box and enter password
        // $x("//*[@name='password' and @type='password']")
        driver.findElement(By.xpath("//*[@name='Password' and @type='password']")).sendKeys(password);

        // locate Log in button and press
        // $x("//*[@id='loginbtn']")
        driver.findElement(By.xpath("/html/body/div[4]/div/div[1]/section/form/div[5]/div/button")).click();
    }
    public void search_product(String product_name){
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@name='query']"))).sendKeys(product_name);
//        click on the searching bottom
        driver.findElement(By.xpath("/html/body/div[2]/div/div/div[2]/form/button/i")).click();
    }
    public void click_on_product(){
        driver.findElement(By.xpath("/html/body/div[4]/div/div[2]/div[2]/div/div/a/img")).click();
    }
    public void click_on_add_to_cart(){
        driver.findElement(By.xpath("/html/body/div[4]/div[1]/div[1]/div[2]/div[4]/form/button")).click();
    }
    public void add_to_cart_message(){
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"myModalLabel\"]")));
        driver.findElement(By.xpath("//*[@id=\"shopModal\"]/div/div/div[3]/button")).click();
    }

    public void loginSequence(String Email, String password){
        // locate and click on web element -> login
        goToLogin();

        // enter username and password -> press login
        enterLoginInfo(Email, password);

        // check for welcome message
//        teacherWelcomeMessage();
    }
    public void view_product_cart(){
        driver.findElement(By.xpath("/html/body/div[2]/div/div/div[3]/div/a/i")).click();
    }
    public void view_product_not_exist_message(){
//        view cart
        view_product_cart();
//        find the specific product in cart
//        driver.findElement(By.xpath("/html/body/div[4]/div/div[1]/table/tbody/tr/td[2]/h6"));
//        view message product does not exist
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("/html/body/div[4]/div/div[1]/table/tbody/tr/td[2]/span")));

    }
    public void terminateDriver(){
        // close all the driver windows
        // another option - to close a browser window: driver.close();
        driver.quit();

    }

}
