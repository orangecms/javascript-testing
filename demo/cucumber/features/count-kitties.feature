@watch
Feature: Count kitties

  As a visitor of an awesome website, I should see kitties. 😺

  Scenario:
    Given I open the main site
    When I hit reset
    Then there should be 3 cats
