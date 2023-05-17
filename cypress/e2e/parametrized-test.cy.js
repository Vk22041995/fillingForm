describe('Multiple tests', () => {
  const testForm = (testData1, testData2) =>

  function () {
  cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com');
  cy.get(':nth-child(3) > nb-card-body > .theme-preview').click();
  cy.get('a.ng-tns-c141-9').click();
  cy.get('.menu-item.ng-tns-c141-11 > .ng-star-inserted > .menu-title').click();
  cy.get('a.sidebar-toggle[href="#"]').click();
  cy.get('#inputEmail1').type(`${testData1}`);
  cy.get('#inputPassword2').type(`${testData2}`);
  cy.get(':nth-child(2) > label > .inner-circle').click();
  cy.get(':nth-child(2) > :nth-child(1) > :nth-child(1) > nb-card-body > .ng-untouched > :nth-child(4) > .offset-sm-3 > .appearance-filled').click();
  };

it('fillingForm', testForm('vlad', 'test'));
})