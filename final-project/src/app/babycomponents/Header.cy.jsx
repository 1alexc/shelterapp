import React from 'react'
import Header from './Header'

describe('<Header />', () => {
  it('The Header component renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Header />)
  })
})

describe('<Header />', () => {
  it('The Header component includes a home/back button', () => {
    cy.mount(<Header />)
    // check that <Header> contains an element with an href containing "dashboard"
    cy.get('a[href*="dashboard"]')
  })
})