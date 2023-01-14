import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.WindowType;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.chrome.ChromeOptions;
import java.time.Duration;
import java.util.Random;

import static org.openqa.selenium.support.ui.ExpectedConditions.numberOfWindowsToBe;

public class MoodleActuator {

    private WebDriver driver;
    private WebDriverWait wait;

    // we need to download the server to our laptop if we need this code to work ab

    public void initSession(String webDriver, String path) {
        webDriver = "webdriver.chrome.driver";//declaring the web driver
        path = "C:\\Users\\Abdalla\\Desktop\\Demo_Test\\chromedriver.exe"; //the web driver location
        System.setProperty(webDriver, path);// C:\Users\Abdalla\Desktop\Demo_Test

        // new chrome driver object
        this.driver = new ChromeDriver();

        // new web driver wait -> waits until element are loaded (40 sec max)
        this.wait = new WebDriverWait(driver, Duration.ofSeconds(40));


        // launch website -> localhost
        driver.get("http://localhost/");

        // maximize the window - some web apps look different in different sizes
        driver.manage().window().maximize();


        System.out.println("Driver setup finished for - " + driver.getTitle());
    }

    public void goToLogin(){
        // locate and click on web element -> login
        driver.findElement(By.linkText("Log in")).click();
    }
}

//BRB after implementing the steps class
