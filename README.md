# Playwright Portfolio

A collection of automated tests (checks that run automatically to verify a website works) built with Playwright as part of my QA (Quality Assurance) learning journey.

# Project Summary

This project demonstrates:

- Use of the Page Object Model (POM) for maintainable test structure
- Custom fixtures for a reusable test setup
- Data-driven testing with the use of for loops and arrays
- API testing with response validation
- Cross-browser testing across Chromium, Firefox, and Safari
- CI (Continuous Integration) via GitHub Actions

I created UI tests for https://the-internet.herokuapp.com/ and API tests for https://jsonplaceholder.typicode.com/posts/1. They are common tests that a QA would use to build a robust test suite. The following areas have been covered Login, checkboxes, downloads and API responses

---

# Project Setup

## 1. Install Homebrew (Mac package manager — required before Node.js)

Run this in your terminal:
`/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`

## 2. Install Node.js

`brew install node`

## 3. Clone the repository

`git clone https://github.com/RemiJac01/playwright-portfolio.git`

## 4. Navigate into the project folder

`cd playwright-portfolio`

## 5. Install Playwright

`npm init playwright@latest`

## 6. Run the tests

`npx playwright test`

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

## Week 4 — Fixtures

- Learned what a fixture is and how it differs from beforeEach
- Built a custom `loggedInPage` fixture that logs a user in automatically before a test starts
- Learned when to use a fixture vs when a test needs to verify the login process itself
- Refactored the logout test to use the fixture, removing duplicate login steps
- Renamed a misleading test name to better reflect what it actually verifies

## Week 5 — Data-driven testing

- Expanded invalid login test data table with SQL (Structured Query Language) injection test cases
- Learned about security testing and why it matters in real QA work
- Built a new `download.spec.js` test file from scratch
- Learned when to separate tests into their own test blocks (one test = one thing verified)
- Used a `for` loop with an array to check multiple file names are visible on a page
- Debugged a real-world scenario where a test site changed its content, causing test failures

## Week 6 — API Testing

- Learned what an API (Application Programming Interface) is and how it differs from UI (User Interface) testing
- Used Playwright's `request` object to send a GET (retrieve data) request to JSONPlaceholder
- Asserted the response status code returns 200 (OK)
- Parsed the JSON (JavaScript Object Notation) response body and asserted specific field values
- Learned the advantage of API testing — faster, more direct, no browser needed
- Introduced to the concept of the test pyramid — many API tests, fewer UI tests

## Week 7 — Portfolio polish

- Added a project setup guide to the README so anyone can clone and run the project
- Added a project summary highlighting key technical skills demonstrated
- Added meaningful comments to tests where they add genuine value
- Learned the principle that good test names often make comments unnecessary
- Decided to expand the portfolio with a new separate repo for e-commerce testing
