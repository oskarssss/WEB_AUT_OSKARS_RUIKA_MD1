import { BasePage } from "./basePage";

export class HomePage extends BasePage {
    static get gridButton() {
        return cy.get('#demo-tab-grid');
    }

    static get numberBtn() {
        return cy.get(".list-group-item");
    }
}