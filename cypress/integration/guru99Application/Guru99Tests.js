/// <reference types="cypress" />

describe ("Verify Guru99 Application Functionalities", function() {

    it("Verify Homepage Test", function() {
      
        cy.visit("http://demo.guru99.com/v4");

        cy.title().should('eq', 'Guru99 Bank Home Page');
    })

    it("Verify login Test", function() {

        cy.visit("http://demo.guru99.com/v4");

        cy.xpath("//input[@name='uid']").type('mngr360012')
        //cy.get("input[name='uid']").type("mngr360012");

        cy.get("input[name='password']").type("jYpUzYs");

        cy.get("input[name='btnLogin']").click();

        

    })

    

})