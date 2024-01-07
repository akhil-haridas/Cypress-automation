/// <reference types="cypress" />

it("google-search", () => {
    cy.visit('https://google.com')
    cy.get("#APjFqb").type('cypress automation tool{Enter}')
})