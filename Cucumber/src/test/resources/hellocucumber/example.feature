Feature: A set of scenarios for testing the "example" module

  Scenario: Testing how a case where a user adds a product to the cart
    Given an example scenario
    When all step definitions are implemented
    Then the scenario passes

  Scenario: Successful logged in
    Given User is on home Page
    When User Navigate to LogIn Page
    And User enters UserName <UserName> and Password <Password>
    And Welcome back, <WelcomeWord>! message displays
    Then Message displayed Login Successful

  Scenario: Student enters the Course Section
    Given a student is loggedIn
    And Courses Home Page
    When User Navigate to Course Name
    Then a page of the Course Site must be oppened

  Scenario: Student views a comment
    Given a student is loggedIn
    And the student is viewing an assignment
    When the student clicks on the "View Comments" button
    Then the student should see a list of comments on the assignment

  Scenario: Teacher deletes a comment
    Given a teacher is logged in
    And the teacher is viewing an assignment with comments
    When the teacher clicks on the "Remove" button for a comment
    Then the comment should be removed from the assignment
    And a message should be displayed confirming the deletion