import React from 'react'
import { render } from '@testing-library/react'
import App from './App'
import DisplayInputs from './containers/DisplayInputs'

test('Header component with data-testid="header" should load', () => {
  const { getByTestId } = render(<App />)
  const headerComponent = getByTestId('header')
  expect(headerComponent).toBeInTheDocument()
})

test('DisplayInputs component with data-testid="DisplayInputs" should load', () => {
  const { getByTestId } = render(<App />)
  const DisplayInputsComponent = getByTestId('DisplayInputs')
  expect(DisplayInputsComponent).toBeInTheDocument()
})

test('DisplayResults component with data-testid="DisplayResults" should load', () => {
  const { getByTestId } = render(<DisplayInputs />)
  const DisplayResultsComponent = getByTestId('DisplayResults')
  expect(DisplayResultsComponent).toBeInTheDocument()
})
