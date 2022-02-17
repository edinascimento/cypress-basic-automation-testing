const baseURL = "https://ticket-box.s3.eu-central-1.amazonaws.com/index.html"

describe("Tickets", () => {

  beforeEach(() => cy.visit(baseURL))

  it("has 'TICKETBOX' header's ", () => {

    const firstname = "Edipo";
    const lastname = "Nascimento";

    cy.get("#first-name").type(firstname);
    cy.get("#last-name").type(lastname);
    cy.get("#email").type("esntest@gmail.com");
    cy.get("#requests").type("Vegetarian")
    cy.get("#signature").type(`${firstname} ${lastname}`) 
  });
});