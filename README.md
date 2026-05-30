# Playwright Framework
![Playwright Tests](https://github.com/AbhinavMittal1202/playwright-framework/actions/workflows/playwright.yml/badge.svg)
A production-grade test automation framework built with Playwright and TypeScript.

## Tech Stack
- Playwright
- TypeScript
- Node.js

## Framework Structure
playwright-framework/
├── pages/          # Page Object classes
├── tests/e2e/      # Test specs
├── test-data/      # Test data
├── utils/          # Helper functions
└── playwright.config.ts

## Design Decisions
- **Page Object Model** — locators and actions separated from test logic
- **TypeScript** — type safety across the entire framework
- **Test data separation** — credentials and data kept outside test files

## How to Run

### Install dependencies
npm install

### Install browsers
npx playwright install

### Run all tests
npx playwright test

### View report
npx playwright show-report

## Author
Abhinav Mittal — Senior SDET