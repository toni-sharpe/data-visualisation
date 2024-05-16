import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { getByLabelText, render, screen, waitFor } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'

import Summary from './Summary'

test('Summary', async () => {
  render(
    <Summary />
  )


  /*
   * Base screen tests, has it rendered
   */
  expect(screen.getByText('Page Summary')).toBeTruthy()
  expect(screen.getByText('Plots X against Y. Both axes can be selected by the user.')).toBeTruthy()
})

test('Summary with AXE', async () => {
  expect.extend(toHaveNoViolations)

  const { container: summary } = render(
    <Summary />
  )

  expect(await axe(summary)).toHaveNoViolations()
})
