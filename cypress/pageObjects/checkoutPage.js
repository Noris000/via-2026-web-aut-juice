import { BasePage } from "../pageObjects/basePage";

export class CheckoutPage extends BasePage {

  // Address Selection
  static get addressCards() {
    return cy.get("mat-card");
  }

  static get continueButton() {
    return cy.contains("button", "Continue");
  }

  // Delivery Method
    static get standardDelivery() {
        return cy.contains("mat-radio-button", "Standard Delivery");
    }

  // Payment Method
  static cardEnding(lastDigits) {
    return cy.contains("mat-radio-button", lastDigits);
  }

  // Order Summary
  static get placeOrderButton() {
    return cy.contains("button", "Place your order and pay");
  }

  // Confirmation
  static get confirmationMessage() {
    return cy.contains("Thank you for your purchase!");
  }

}