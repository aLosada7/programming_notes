# Testing

## Types of Test

* Unit Test - Test one piece of code (e.g. a function)
* Integration Test - Multiple test running together
* Acceptance Test - User interaction within the app

## Tradeoffs

* Don't re-write test after refactoring (always if possible)
* _**Test behaviour** instead of implementation**-
* Test must remain the same (if the app requirements do not change)
* Easy diagnosis of failing tests
* It's difficult to find the failure when using Integration tests
* You cannot use TDD with snapshots