# Playwright Portfolio

A collection of automated tests (checks that run automatically to verify a website works) built with Playwright as part of my QA (Quality Assurance) learning journey.

---

## Week 1 — Getting started

- Set up Playwright, VS Code and GitHub from scratch
- Recorded a test using Codegen (a tool that writes test code as you click)
- Wrote tests from scratch covering:
  - Login with valid credentials
  - Login with invalid credentials
  - Logout
  - Checkbox interactions
  - Homepage title check
  - TodoMVC (a to-do list app used for practice) interactions

## Tech used

- Playwright — test automation framework
- JavaScript — the programming language the tests are written in
- GitHub Actions — CI (Continuous Integration) that runs tests automatically on every push

## Week 2 — Organising tests

- Learned `beforeEach` to remove repeated code across tests
- Learned `describe` to group related tests together in the report
- Learned `test.only` and `test.skip` for controlling which tests run
- Added smoke tags (`@smoke`) to critical tests so they can be run independently

## Week 3 — Page Object Model and loops

- Built first Page Object Model (POM) for the login page
- Refactored login tests to use the POM, removing repeated locators
- Learned the YAGNI principle (You Aren't Gonna Need It) — only add structure when it's actually needed
- Replaced a hardcoded test with a `for` loop that dynamically checks every checkbox on the page
