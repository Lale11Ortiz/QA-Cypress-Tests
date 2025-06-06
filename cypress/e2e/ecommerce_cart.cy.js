describe('🛒 Flujo e-commerce: login + agregar al carrito', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
  })

  it('Login exitoso con usuario válido', () => {
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

    // Verificamos redirección al inventario
    cy.url().should('include', '/inventory')
  })

  it('Agrega un producto al carrito y verifica', () => {
    // Login
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

    // Agregar producto
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()

    // Ir al carrito
    cy.get('.shopping_cart_link').click()

    // Verificar que el producto está en el carrito
    cy.get('.inventory_item_name').should('contain', 'Sauce Labs Backpack')
  })
})