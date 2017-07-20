@watch
Feature: Count kitties

  As a visitor of an awesome website, I should see kitties. 😺

  Scenario:
    Given I open https://www.metaspora.org/meteor-react-testing/
    Then there should be 3 cats

  Scenario:
    Given I open https://www.metaspora.org/meteor-react-testing/
    When I add a kitty named Moni
    Then there should be 4 cats
