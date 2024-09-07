class ProductsPage {
  // Definición de elementos
  private productSelector = '[data-test="inventory-item-name"]';

  // Método para seleccionar un producto
  public selectProduct(productName: string): void {
    cy.get(this.productSelector).contains(productName).click();
  }
}

export default new ProductsPage();
