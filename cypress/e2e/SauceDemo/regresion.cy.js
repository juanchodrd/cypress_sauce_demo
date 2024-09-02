///<reference types="cypress"/>
import * as utils from "../../support/utils";
import "../../support/commands";
import LoginPage from "../../pages/LoginPage";

describe("Casos regresivos", function () {
  beforeEach(function () {
    cy.log("ENVIRONMENT: " + Cypress.env("ENV"));
    // cy.viewport(1920, 1080)
    cy.visit(utils.getUrl());
  });

  it("Application up", { tags: ["@production"] }, function () {
    cy.contains("Swag Labs");
  });

  it.only("Login", { tags: ["@production"] }, function () {
    LoginPage.enterUsername("standard_user");
    LoginPage.enterPassword("secret_sauce");
    LoginPage.submitLogin();
    cy.url().should("include", "inventory.html");
  });

  afterEach(function () {});
});
