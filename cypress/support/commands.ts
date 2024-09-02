/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
declare global {
  namespace Cypress {
    interface Chainable {
      getFixtures: (environment: string) => void;
    }
  }
}

import * as utils from "./utils";

Cypress.Commands.add("getFixtures", (environment) => {
  switch (environment) {
    case "development":
      cy.fixture("/datainputs/datainputs_development").as("data");
      break;

    case "staging":
      cy.fixture("/datainputs/datainputs_staging").as("data");
      break;

    case "production":
      cy.fixture("/datainputs/datainputs_production").as("data");
      break;

    default:
      cy.log("ENVIRONMENT NO CONFIGURADO");
  }
});
