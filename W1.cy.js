describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://automationteststore.com/')
    cy.get('#customer_menu_top').click();
    cy.get('[title="Continue"]').click();
    cy.get('#AccountFrm_firstname').type('6789gj');
    cy.get('#AccountFrm_lastname').type('Murachova');
    cy.get('#AccountFrm_email').type('7979@example.net');
    cy.get('#AccountFrm_telephone').type('067452789035');
    cy.get('#AccountFrm_fax').type('8981947');
    cy.get('#AccountFrm_company').type('UYIIOOO');
    cy.get('#AccountFrm_address_1').type('Von Gurckestraat');
    cy.get('#AccountFrm_city').type('Amsterdam');
    cy.get('#AccountFrm_zone_id').select('Aberdeen');
    cy.get('#AccountFrm_postcode').type('18000');
    cy.get('#AccountFrm_country_id').select('United Kingdom');
    cy.get('#AccountFrm_loginname').type('v46xample.net');
    cy.get('#AccountFrm_password').type('12345');
    cy.get('#AccountFrm_confirm').type('12345');
    cy.get('#AccountFrm_newsletter0').click();
    cy.get('#AccountFrm_agree').click();
    cy.get('[title="Continue"]').click();

    cy.get('.heading2').should('contain', 'My Account');


  })
})