import { BasePage } from "../pageObjects/basePage";

export class HomePage extends BasePage {
  static get url() {
    return "/#/";
  }

  static get dismissButton() {
    return cy.get("[aria-label='Close Welcome Banner']");
  }

  static get meWantItButton() {
    return cy.get("[aria-label='dismiss cookie message']");
  }
  
  static get accountButton()
  {
    return cy.get("#navbarAccount")
  }

  static get loginButton()
  {
    return cy.get("#navbarLoginButton")
  }

  static get userProfileButton()
  {
    return cy.get("button[aria-label='Go to user profile']")
  }

  static get searchButton()
  {
    return cy.get("#searchQuery")
  }

  static get searchField()
  {
    return cy.get("#mat-input-1")
  }

  static get productCards()
  {
    return cy.get("[aria-label='Click for more information about the product']")
  }

    static get productCard()
  {
    return cy.get("[class*='mdc-dialog__content']")
  }

  static get reviewsPanelHeader() {
    return cy.contains('mat-expansion-panel-header', 'Reviews');
  }

  static get reviewField() {
    return cy.get('textarea[aria-label="Text field to review a product"]');
  }

  static get submitReviewButton() {
    return cy.get('button[aria-label="Send the review"]');
  }

  static get itemsPerPageSelect() {
    return cy.get('mat-select[id^="mat-select-"]');
  }

  static get itemsPerPageOptions() {
    return cy.get('mat-option');
  }

  static get productCardCount() {
    return cy.get("[aria-label='Click for more information about the product']");
  }

  static get addToBasketButton() {
    return cy.get("button[aria-label='Add to Basket']");
  }

  static get basketButton() {
    return cy.get("button[aria-label='Show the shopping cart']");
  }

  static get checkoutButton() {
    return cy.contains("button", "Checkout");
  }

  static get addressCards() {
    return cy.get("mat-card");
  }

  static get continueButton() {
    return cy.contains("button", "Continue");
  }

  static get standardDelivery() {
    return cy.contains("mat-radio-button", "Standard Delivery");
  }

static cardEnding(lastDigits) {

  return cy.contains("mat-cell.cdk-column-Number", lastDigits)
          .closest("mat-row")
          .find("mat-radio-button")
          .click({ force: true });
}

  static get placeOrderButton() {
    return cy.contains("button", "Place your order and pay");
  }

  static get confirmationMessage() {
    return cy.contains("Thank you for your purchase!");
  }

  static deliveryOption(optionText) {
    return cy.contains("mat-radio-button", optionText, { matchCase: false });
  }

static clickAccount() {
  cy.contains("span.mdc-button__label", "Account").click({ force: true });
}

static openOrdersAndPaymentMenu() {
  cy.get('button[aria-label="Show Orders and Payment Menu"]').click({ force: true });
}
static goToSavedAddresses() {
  cy.contains('button[routerlink="/address/saved"]', "My saved addresses")
    .click({ force: true });
}

static goToPaymentOptions() {
  cy.get('.cdk-overlay-container')
    .contains('button[routerlink="/saved-payment-methods"]', 'My Payment Options')
    .click({ force: true });
}

}
