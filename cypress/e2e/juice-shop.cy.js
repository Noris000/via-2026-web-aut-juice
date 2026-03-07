import { HomePage } from "../pageObjects/HomePage";
import { LoginPage } from "../pageObjects/loginPage";
import { RegistrationPage } from "../pageObjects/registrationPage";
import { CheckoutPage } from "../pageObjects/CheckoutPage";
import { AddressPage } from "../pageObjects/addressPage";
import { SavedPaymentMethodsPage } from "../pageObjects/savedPaymentMethodsPage";

describe("Juice-shop scenarios", () => {
  context("Without auto login", () => {
    beforeEach(() => {
      HomePage.visit();
      HomePage.dismissButton.click();
      HomePage.meWantItButton.click();
    });

    it("Login", () => {
      // Click Account button
      HomePage.accountButton.click();
      // Click Login button
      HomePage.loginButton.click();
      // Set email value to "demo"
      LoginPage.emailField.type("demo");
      // Set password value to "demo"
      LoginPage.passwordField.type("demo");
      // Click Log in
      LoginPage.loginButton.click();
      // Click Account button
      HomePage.accountButton.click();
      // Validate that "demo" account name appears in the menu section
      HomePage.userProfileButton.should('contain.text', 'demo');
    });

    it("Registration", () => {
      // Click Account button
      HomePage.accountButton.click();
      // Login button9
      HomePage.loginButton.click();
      // Click "Not yet a customer?"
      LoginPage.notYetCustomerButton.click();
      // Find - how to generate random number in JS
      // Use that number to genarate unique email address, e.g.: email_7584@ebox.com
      const email = `email_${Math.floor(Math.random() * 10000)}@ebox.com`;
      const password = 'randomPassword0_+';
      // Save that email address to some variable
      RegistrationPage.emailField.type(email);
      // Fill in password field and repeat password field with same password
      RegistrationPage.passwordField.type(password);
      RegistrationPage.repeatPasswordField.type(password);
      // Click on Security Question menu
      RegistrationPage.sequrityQuestionMenu.click();
      // Select  "Name of your favorite pet?"
      RegistrationPage.dropdownMenuOptions.contains("Name of your favorite pet?").click();
      // Fill in answer
      RegistrationPage.securityAnswerField.type("Dog");
      // Click Register button
      RegistrationPage.registrationButton.click();
      // Set email value to previously created email
      LoginPage.emailField.type(email);
      // Set password value to previously used password value
      LoginPage.passwordField.type(password);
      // Click login button
      LoginPage.loginButton.click();
      // Click Account button
      HomePage.accountButton.click();
      // Validate that account name (with previously created email address) appears in the menu section
      HomePage.userProfileButton.should('contain.text', email);
    });
  });

  context("With auto login", () => {
    beforeEach(() => {
      cy.login("demo", "demo");
      HomePage.visit();
    });

    it("Search and validate Lemon", () => {
      // Click on search icon
      HomePage.searchButton.click();
      // Search for Lemon
      HomePage.searchField.type("Lemon{enter}");
      // Select a product card - Lemon Juice (500ml)
      HomePage.productCards.contains("Lemon Juice (500ml)").click();
      // Validate that the card (should) contains "Sour but full of vitamins."
      HomePage.productCard.should("contain.text", "Sour but full of vitamins.")
    });

    // Create scenario - Search 500ml and validate Lemon, while having multiple cards
    it("Search 500ml and validate Lemon, while having multiple cards", () => {
    // Click on search icon
    HomePage.searchButton.click();
    // Search for 500ml
    HomePage.searchField.type("500ml{enter}");
    // Select a product card - Lemon Juice (500ml)
    HomePage.productCards.contains("Lemon Juice (500ml)").click();
    // Validate that the card (should) contains "Sour but full of vitamins."
    HomePage.productCard.should("contain.text", "Sour but full of vitamins.")
    })

    // Create scenario - Search 500ml and validate cards
    it("Search 500ml and validate cards", () => {
    // Click on search icon
    HomePage.searchButton.click();
    // Search for 500ml
    HomePage.searchField.type("500ml{enter}");
    // Select a product card - Eggfruit Juice (500ml)
    HomePage.productCards.contains("Eggfruit Juice (500ml)").click();
    // Validate that the card (should) contains "Now with even more exotic flavour."
    HomePage.productCard.should("contain.text", "Now with even more exotic flavour.")
    // Close the card
    HomePage.productCard.find("button[aria-label='Close Dialog']").click();
    // Select a product card - Lemon Juice (500ml)
    HomePage.productCards.contains("Lemon Juice (500ml)").click();
    // Validate that the card (should) contains "Sour but full of vitamins."
    HomePage.productCard.should("contain.text", "Sour but full of vitamins.")
    // Close the card
    HomePage.productCard.find("button[aria-label='Close Dialog']").click();
    // Select a product card - Strawberry Juice (500ml)
    HomePage.productCards.contains("Strawberry Juice (500ml)").click();
    // Validate that the card (should) contains "Sweet & tasty!"
    HomePage.productCard.should("contain.text", "Sweet & tasty!")
    })

    // Create scenario - Read a review
    it("Read a review", () => {
      // Click on search icon
      HomePage.searchButton.click();
      // Search for King
      HomePage.searchField.type("King{enter}");
      // Select a product card - OWASP Juice Shop "King of the Hill" Facemask
      HomePage.productCards.contains("OWASP Juice Shop \"King of the Hill\" Facemask").click();
      // Click expand reviews button/icon (wait for reviews to appear)
      HomePage.reviewsPanelHeader.click();
      // wait for review text to appear
      cy.contains('K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!').should('be.visible');
    });

    // Create scenario - Add a review
    it("Add a review", () => {
      // Click on search icon
      HomePage.searchButton.click();
      // Search for Raspberry
      HomePage.searchField.type("Raspberry{enter}");
      // Select a product card - Raspberry Juice (1000ml)
      HomePage.productCards.contains("Raspberry Juice (1000ml)").click();
      // Type in review and submit
      HomePage.reviewField.type("Tastes like metal");
      HomePage.submitReviewButton.click();
      // Expand reviews and validate review text is visible
      HomePage.reviewsPanelHeader.click();
      cy.contains("Tastes like metal").should('be.visible');
    });
    
    // Create scenario - Validate product card amount
    it("Validate product card amount and paginator", () => {
      // initially should show 12 cards by default
      HomePage.productCardCount.should('have.length', 12);
      // change items per page to 24
      HomePage.itemsPerPageSelect.scrollIntoView().click({force: true});
      HomePage.itemsPerPageOptions.contains('24').click();
      // verify 24 cards appear (if enough products)
      HomePage.productCardCount.should('have.length', 24);
      // change items per page to 36
      HomePage.itemsPerPageSelect.scrollIntoView().click({force: true});
      HomePage.itemsPerPageOptions.contains('36').click();
      // on last page there may be 35 or 36 cards depending on dataset
      HomePage.productCardCount.its('length').should('be.oneOf', [35, 36]);
    });

it("Buy Girlie T-shirt", () => {
  // Visit home page
  HomePage.visit();

  // Search for "Girlie"
  HomePage.searchButton.click();
  HomePage.searchField.type("Girlie{enter}");

  // Open product card and ensure it’s visible
  HomePage.productCards.contains("Girlie").click();
  HomePage.productCard.should("be.visible");

  // Close modal if overlay appears
  cy.get("body").then(($body) => {
    if ($body.find("button[aria-label='Close Dialog']").length > 0) {
      cy.get("button[aria-label='Close Dialog']").click({ force: true });
    }
  });

  // Wait for overlay backdrop to disappear
  cy.get(".cdk-overlay-backdrop").should("not.exist");

  // Add product to basket
  HomePage.addToBasketButton.click({ force: true });

  // Go to basket
  HomePage.basketButton.click();

  // Proceed to checkout
  HomePage.checkoutButton.click();

  // Select address containing "United Fakedom"
  HomePage.addressCards.contains("United Fakedom").click();
  HomePage.continueButton.click();

  cy.get("mat-radio-button.mat-mdc-radio-button", { timeout: 10000 })
    .first()
    .should("be.visible")
    .click({ force: true });

  // Continue to payment
  HomePage.continueButton.click();

  // Select the card ending 5678 using the sibling cell
  HomePage.cardEnding("5678"); // clicks the radio button in the same row
  HomePage.continueButton.click();

  // Place order
  HomePage.placeOrderButton.click();

  // Validate confirmation message is visible
  HomePage.confirmationMessage.should("be.visible");
});


//Adress scenario
it("Add a new address", () => {
  HomePage.visit();
    // Click on Account
  HomePage.clickAccount();
    // Click on Orders & Payment
  HomePage.openOrdersAndPaymentMenu();
    // Click on My saved addresses
  HomePage.goToSavedAddresses();
    // Create page object - SavedAddressesPage
    // Click on Add New Address
  AddressPage.addNewAddressButton().click();
    // Fill in the necessary information
  AddressPage.fillAddressForm({
    country: "United Fakedom",
    name: "John Doe",
    mobile: "5551234567",
    zip: "12345",
    address: "123 Main St",
    city: "Faketown",
    state: "Fakestate"
  });
    // Click Submit button
  AddressPage.submitButton().click();
    // Validate that previously added address is visible
  AddressPage.addressCards().contains("123 Main St").should("be.visible");
});


    // Create scenario - Add payment option
it.only("Add a new payment option", () => {
  HomePage.visit();
    // Click on Account
  HomePage.clickAccount();
    // Click on Orders & Payment
  HomePage.openOrdersAndPaymentMenu();
    // Click on My payment options  
  HomePage.goToPaymentOptions();
    // Create page object - SavedPaymentMethodsPage
        // Click Add new card
  SavedPaymentMethodsPage.addNewCardButton().click({ force: true });

  // Wait for panel to expand
  cy.get('.mat-expansion-panel-content')
    .should('be.visible');

  // Fill form
  SavedPaymentMethodsPage.fillCardForm({
    name: "John Doe",
    number: "4111111111111111",
    month: 7,
    year: 2090
  });

    // Click Submit button
  SavedPaymentMethodsPage.submitButton().click();
    // Validate that the card shows up in the list
  SavedPaymentMethodsPage.savedCards()
    .contains("4111")
    .should("be.visible");
});
  });
    });
