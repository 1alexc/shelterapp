import React from 'react'
import Footer from './Footer'

describe('<Footer />', () => {
  it('The Footer component renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Footer />)
  })
})