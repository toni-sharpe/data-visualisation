const urlSlug = 'AntiBiasToolKit'

export default describe(`${urlSlug} - `, () => {
  it('vists Biased timing simulation', () => {
    cy.visit(urlSlug)
    cy.contains('Timing sim.').click()
  })
})
