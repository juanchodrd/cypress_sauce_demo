class LoginPage {
  // Definición de elementos
  private usernameInput = '[data-test="username"]';
  private passwordInput = '[data-test="password"]';
  private loginSubmitButton = '[data-test="login-button"]';

  // Método para ingresar el nombre de usuario
  public enterUsername(value: string): void {
    cy.get(this.usernameInput).type(value);
  }

  // Método para ingresar la contraseña
  public enterPassword(value: string): void {
    cy.get(this.passwordInput).type(value);
  }

  // Método para hacer clic en el botón de login
  public submitLogin(): void {
    cy.get(this.loginSubmitButton).click();
  }

  // Método que encapsula el flujo de login
  public login(username: string, password: string): void {
    this.enterUsername(username);
    this.enterPassword(password);
    this.submitLogin();
  }
}

export default new LoginPage();
