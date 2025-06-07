# 🧪 QA Cypress Tests

Repository of automated UI tests using the Cypress framework. Includes login simulations, e-commerce navigation, and mocked REST API validations.

## 📁 Project structure

QA-Cypress-Tests/
  - cypress/
    - e2e/
      - login_test.cy.js              # Login flow simulation (username + password)
      - ecommerce_cart.cy.js          # Add-to-cart flow in an e-commerce site
      - api_mocking.cy.js             # Mocked API test with intercept
    - fixtures/                         # Optional data fixtures (not used yet)
    - support/                          # Default Cypress commands & support files
  - archive/                              # Moved unnecessary files to keep the repo clean
    - cypress_example.cy.js
    - cypress/ (duplicated folder)
    - downloads/ (empty folder)
    - .gitkeep
  - node_modules/                         # Cypress dependencies
  - cypress.config.js                     # Cypress configuration file
  - package.json                          # Project metadata and dependencies
  - package-lock.json                     # Package lock file
  - README.md                             # Main documentation (ES)
  - README_En.md                          # Main documentation (EN)

---

## 🛠️ Technologies & Tools

- [Cypress](https://www.cypress.io/) 14.x
- Node.js 22.x
- Visual Studio Code
- Git & GitHub
- Git Bash (CLI)
- Ladder Test Structured A, B and C

---

## 🛠️ Tests included

✅ login_test.cy.js
- Simulates login with username and password
- Validates success and error messages

✅ ecommerce_cart.cy.js
- Simulates navigating to an e-commerce section
- Adds an item to the cart and confirms it

✅ api_mocking.cy.js
- Intercepts a real GET request and returns a mocked response
- Validates if the intercepted comment is displayed correctly

---

## 📦 Cypress version
Tested with Cypress v14.4.1 using Chrome browser.

---

## 📎 Notes
- All tests are written in JavaScript.
- Project structure was adapted for readability.
- Extra or redundant files were moved to the `archive/` folder.
- The `.gitignore` file is set up to avoid pushing reports or cache.

---

## 🚀 Project Status

✅ Finished and funtional
🧠 Solid learnings in Cypress
🎯 Ready to scale E2E Automations

---

## 📌 Autor

**Luis Ortiz**
[GitHub](https://github.com/Lale11Ortiz) – [LinkedIn](https://www.linkedin.com/in/luis-ortiz-qa)
**#OpenToWork | QA Automation Engineer**