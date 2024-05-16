import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { getByLabelText, render, screen, waitFor } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'

import Home from './Home'

test('Home - ', async () => {
  render(
    <Home />
  )


  /*
   * Base screen tests, has it rendered
   */
  expect(screen.getByText('Purpose')).toBeTruthy()
  expect(screen.getByText('EN')).toBeTruthy()
  expect(screen.getByText('DE')).toBeTruthy()


  /*
   * Simple tests of on screen specifics, not always needed
   */
  expect(screen.getByText('Fundamentally I\'m using the three main languages of the browser: JS, CSS and HTML. I am purposefully not using any data visualisation packages like D3 or VictoryChart. I\'m referring often to the MDN docs provided by Mozilla Foundation, an exceptional organisation. The front-end is mostly responsive, again, data visualisation is challenging in this perspective too.')).toBeTruthy()
})

test('Home with AXE', async () => {
  expect.extend(toHaveNoViolations)

  const { container: home } = render(
    <Home />
  )

  expect(await axe(home)).toHaveNoViolations()
})
