describe('Buscar en el sitio de ejemplo de Cypress', () => {
  it('debería navegar y verificar contenido', () => {
    cy.visit('https://example.cypress.io');

    // Hacer hover sobre el botón "Commands"
    cy.contains('Commands').trigger('mouseover');

    // Ahora sí, click forzado en el enlace oculto "Querying"
    cy.contains('Querying').click({ force: true });

    // Verifica que el h1 contenga la palabra "Querying"
    cy.get('h1').should('contain.text', 'Querying');
  });
});