class DetailProductPage {
  // Definición de elementos
  private cartSelector = '[data-test="add-to-cart"]';
  private productTitleSelector = '[data-test="inventory-item-name"]';

  // Método para añadir producto al carrito
  public addToCart(): void {
    cy.get(this.cartSelector).click();
  }

  // Método para validar el título del producto
  validateProductTitle(expectedTitle: String) {
    cy.get(this.productTitleSelector).should("contain", expectedTitle);
  }
}

export default new DetailProductPage();
