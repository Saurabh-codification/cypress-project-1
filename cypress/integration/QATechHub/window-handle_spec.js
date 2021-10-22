/// <reference types="cypress" />

describe ("Verify Multiple Tab open", () => {

    beforeEach(()=> {

        cy.visit("https://test.qatechhub.com/window-handling/")

    })

    it("Verify Tab scenario", function() {

        cy.contains("Click Here").should("have.attr", "target").and("equal", "_blank")

        cy.contains("Click Here").should("have.attr", "href").and("equal", "https://qatechhub.com")

        cy.contains("Click Here").invoke('removeAttr', 'target').click()

        cy.url().should('contain', "qatechhub.com")
        
    })
})