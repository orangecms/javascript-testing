@watch
Feature: Count kitties

  As a visitor of an awesome website, I should see kitties. 😺

  Scenario:
    Given I open the main site
    When I count the cat pics
    Then there should be 3

  Scenario:
    Given I open the main site
    When I add a kitty named Moni
    And I count the cat pics
    Then there should be 4
