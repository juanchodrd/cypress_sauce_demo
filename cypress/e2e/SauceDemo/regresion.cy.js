///<reference types="cypress"/>
import * as utils from "../../support/utils";
import "../../support/commands";
import LoginPage from "../../pages/LoginPage";
import ProductsPage from "../../pages/ProductsPage";
import DetailProductPage from "../../pages/DetailProductPage";

describe("Casos regresivos", function () {
  beforeEach(function () {
    cy.log("ENVIRONMENT: " + Cypress.env("ENV"));
    // cy.viewport(1920, 1080)
    cy.visit(utils.getUrl());
  });

  it("Application up", { tags: ["@production"] }, function () {
    cy.contains("Swag Labs");
  });

  it("Login", { tags: ["@production"] }, function () {
    LoginPage.enterUsername("standard_user");
    LoginPage.enterPassword("secret_sauce");
    LoginPage.submitLogin();
    cy.url().should("include", "inventory.html");
  });

  it("Seleccionar producto", { tags: ["@production"] }, function () {
    let producto = "Sauce Labs Backpack";

    LoginPage.login("standard_user", "secret_sauce");
    cy.url().should("include", "inventory.html");
    ProductsPage.selectProduct(producto);
    cy.url().should("include", "inventory-item.html?id=");
    DetailProductPage.validateProductTitle(producto);
  });

  it("Añadir producto al carrito", { tags: ["@production"] }, function () {
    LoginPage.login("standard_user", "secret_sauce");
    cy.url().should("include", "inventory.html");
    ProductsPage.selectProduct("Sauce Labs Backpack");
    DetailProductPage.addToCart();
  });

  afterEach(function () {});
});
