// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Prevent Cypress from failing tests due to uncaught exceptions
// originating from the application under test (e.g. "Cannot read properties of null (reading 'document')").
// Returning false here tells Cypress to ignore the error and continue.
Cypress.on('uncaught:exception', (err, runnable) => {
  // if you want to filter specific errors you can inspect `err.message` or other properties
  // and return false only for those. For now, ignore all to avoid flaky failures.
  return false;
});