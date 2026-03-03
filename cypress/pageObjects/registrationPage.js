import { BasePage } from "../pageObjects/basePage";

export class RegistrationPage extends BasePage 
{
    static get emailField()
    {
        return cy.get("#emailControl")
    }

    static get passwordField()
    {
        return cy.get("#passwordControl")
    }

    static get repeatPasswordField()
    {
        return cy.get("#repeatPasswordControl")
    }

    static get sequrityQuestionMenu()
    {
        return cy.get("[name='securityQuestion']")
    }

    static get dropdownMenuOptions()
    {
        return cy.get("[role='option']")
    }

    static get securityAnswerField()
    {
        return cy.get("#securityAnswerControl")
    }

    static get registrationButton()
    {
        return cy.get("#registerButton")
    }
}