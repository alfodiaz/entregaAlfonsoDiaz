// __tests__/hidden-message.js
// these imports are something you'd normally configure Jest to import for you
// automatically. Learn more in the setup docs: https://testing-library.com/docs/react-testing-library/setup#cleanup
import '@testing-library/jest-dom'
// NOTE: jest-dom adds handy assertions to Jest and is recommended, but not required

import * as React from 'react'
import {render, fireEvent, screen} from '@testing-library/react'

import App from '../App'

test('Test home text to be in document', () => {
  const testMessage = 'Buttons of material-ui framework'
  render(<App></App>)

  expect(screen.getByText(testMessage)).toBeInTheDocument()
})