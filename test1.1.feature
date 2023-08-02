Feature: Error in login process

  #Create a simple logging function that writes messages to a text file with a timestamp.
  
  @Testone
  Scenario: Error on empty fields
    When I click on 'enter'
    Then field 'email' should be with error
    And field 'password' should be with error

  @Testtwo
  Scenario: Wrong email
    When I type 'john.test@devpro.cdom' in 'email'
    And I type '123456' in 'password'
    And I click on 'enter'
    Then I should see 'E-mail is incorrect'

  @Testthree
  Scenario: Wrong password
    When I type 'john.test@devpro.cdom' in 'email'
    And I type '12345667' in 'password'
    And I click on 'enter'
    Then I should see 'Password is incorrect'

  @Testfour
  Scenario: Login successfully
    Given I have users:
      | name           | email             | password |
      | Vitor Batista  | vitor@keepfy.com  | abcdef   |
    When I type 'ricardo@devpro.com' in 'email'
    And I type 'abcdef' in 'password'
    And I click on 'enter'
    Then I shouldn't see 'Access your account'

