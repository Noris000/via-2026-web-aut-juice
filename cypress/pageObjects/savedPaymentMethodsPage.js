import { BasePage } from "../pageObjects/basePage";

export class SavedPaymentMethodsPage extends BasePage {

 static addNewCardButton() {
    return cy.contains('mat-panel-title', 'Add new card');
  }

  static nameField() {
    return cy.get('#mat-input-2');
  }

  static cardNumberField() {
    return cy.get('#mat-input-3');
  }

  static expiryMonthSelect() {
    return cy.get('#mat-input-4');
  }

  static expiryYearSelect() {
    return cy.get('#mat-input-5');
  }

  static submitButton() {
    return cy.contains('button', 'Submit');
  }

  static savedCards() {
    return cy.get('mat-card');
  }

  static fillCardForm({ name, number, month, year }) {
    this.nameField().type(name);
    this.cardNumberField().type(number);
    this.expiryMonthSelect().select(month.toString());
    this.expiryYearSelect().select(year.toString());
  }
}