describe('🔌 Simulación real de API con intercept', () => {
  it('Intercepta /comments/1 y devuelve un comentario simulado', () => {
    cy.intercept('GET', 'https://jsonplaceholder.cypress.io/comments/1', {
      statusCode: 200,
      body: {
        postId: 1,
        id: 1,
        name: 'Mocked QA Comment',
        email: 'tester@qa.dev',
        body: 'Este es un comentario interceptado por Cypress 🚀',
      },
    }).as('getComment');

    cy.visit('https://example.cypress.io/commands/network-requests');

    // Hacemos click en el botón que dispara la petición real
    cy.get('.network-btn').click();

    // Ahora verificamos que el comentario se haya mostrado en la UI
    cy.get('.network-comment').should('contain.text', 'Este es un comentario interceptado por Cypress 🚀');
  });
});