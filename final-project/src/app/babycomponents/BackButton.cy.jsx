import React from 'react'
import BackButton from './BackButton'

describe('<BackButton />', () => {
  it('The Back Button component renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<BackButton />)
  })
})