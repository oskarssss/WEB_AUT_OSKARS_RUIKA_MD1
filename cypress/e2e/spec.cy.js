
import { HomePage } from "../pageObjects/homePage"

describe('MD1_OSKARS_RUIKA', () => {

    it('passes', () => {
      cy.visit(' https://demoqa.com/selectable');
    })

    it("Grid test", () => {
      cy.visit(' https://demoqa.com/selectable');
      //Click on Grid button
      HomePage.gridButton.click();
      //Click on Two, Four, Six, Eight
      HomePage.numberBtn.contains("Two").click();
      HomePage.numberBtn.contains("Four").click();
      HomePage.numberBtn.contains("Six").click();
      HomePage.numberBtn.contains("Eight").click();
      //Validate that Two, Four, Six, Eight are highlighted
      HomePage.numberBtn.contains("Two").should('have.class', 'active');
      HomePage.numberBtn.contains("Four").should('have.class', 'active');
      HomePage.numberBtn.contains("Six").should('have.class', 'active');
      HomePage.numberBtn.contains("Eight").should('have.class', 'active');
      //Validate that One, Three, Five, Seven, Nine are not highlighted
      HomePage.numberBtn.contains("One").should('not.have.class', 'active');
      HomePage.numberBtn.contains("Three").should('not.have.class', 'active');
      HomePage.numberBtn.contains("Five").should('not.have.class', 'active');
      HomePage.numberBtn.contains("Seven").should('not.have.class', 'active');
      HomePage.numberBtn.contains("Nine").should('not.have.class', 'active');
    });
})