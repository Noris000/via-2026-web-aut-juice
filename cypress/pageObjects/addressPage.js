import { BasePage } from "../pageObjects/basePage";

export class AddressPage extends BasePage {

    // Saved addresses list
  static addNewAddressButton() {
    return cy.contains("button", "Add New Address");
  }

  static addressCards() {
    return cy.get("mat-card");
  }

  // Address form fields (correct selectors)
  static countryField() {
    return cy.get("input[placeholder='Please provide a country.']");
  }

  static nameField() {
    return cy.get("input[placeholder='Please provide a name.']");
  }

  static mobileField() {
    return cy.get("input[placeholder='Please provide a mobile number.']");
  }

  static zipField() {
    return cy.get("input[placeholder='Please provide a ZIP code.']");
  }

  static addressField() {
    return cy.get("textarea[placeholder='Please provide an address.']");
  }

  static cityField() {
    return cy.get("input[placeholder='Please provide a city.']");
  }

  static stateField() {
    return cy.get("input[placeholder='Please provide a state.']");
  }

  static submitButton() {
    return cy.contains("button", "Submit");
  }

  // Helper to fill the form
  static fillAddressForm({ country, name, mobile, zip, address, city, state }) {
    this.countryField().type(country);
    this.nameField().type(name);
    this.mobileField().type(mobile);
    this.zipField().type(zip);
    this.addressField().type(address);
    this.cityField().type(city);
    this.stateField().type(state);
  }
}