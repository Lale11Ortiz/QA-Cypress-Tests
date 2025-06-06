describe('Login Test en The Internet', () => {
  it('Debería iniciar sesión correctamente con credenciales válidas', () => {
    cy.visit('https://the-internet.herokuapp.com/login');

    // Ingresar usuario y contraseña
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');

    // Clic en botón de Login
    cy.get('button[type="submit"]').click();

    // Verificar que aparezca el mensaje de éxito
    cy.get('#flash').should('contain.text', 'You logged into a secure area!');
  });

  it('Debería mostrar error con credenciales inválidas', () => {
    cy.visit('https://the-internet.herokuapp.com/login');

    // Usuario o contraseña incorrectos
    cy.get('#username').type('usuario_invalido');
    cy.get('#password').type('contraseña_invalida');
    cy.get('button[type="submit"]').click();

    // Verifica mensaje de error
    cy.get('#flash').should('contain.text', 'Your username is invalid!');
  });
});