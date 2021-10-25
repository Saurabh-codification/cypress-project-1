/// <reference types="cypress" />

describe ("Drag and Drop Example", function() {

    beforeEach(()=>{
        cy.visit("https://jqueryui.com/droppable/")
    })

    it("Switch to frame and Drag and Drop", ()=> {
        cy.get(".demo-frame").then(frame => {

            const body = frame.contents().find("body")

            cy.wrap(body).as("frameBody")

        })

        cy.get("@frameBody").find("#draggable").trigger("mousedown", {which: 1})

        cy.get("@frameBody").find("#droppable").trigger("mousemove").trigger("mouseup", {force: true})

        cy.get("@frameBody").find("#droppable").should("contain", "Dropped!")

    } )
})