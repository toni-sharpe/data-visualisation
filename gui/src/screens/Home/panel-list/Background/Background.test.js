import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { getByLabelText, render, screen, waitFor } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'

import Background from './Background'

test('Background - ', async () => {
  render(
    <Background data={[]} />
  )


  /*
   * Base screen tests, has it rendered
   */
  expect(screen.getByText('Introduction')).toBeTruthy()
  expect(screen.getByText('Accessibility')).toBeTruthy()
  expect(screen.getByText('Performance')).toBeTruthy()
  expect(screen.getByText('Developer experience (DX)')).toBeTruthy()
  expect(screen.getByText('Why continue with data visualisation?')).toBeTruthy()
  expect(screen.getByText('A few other notes')).toBeTruthy()
  expect(screen.getByText('Fundamentally I\'m using the three main languages of the browser: JS, CSS and HTML. I am purposefully not using any data visualisation packages like D3 or VictoryChart. I\'m referring often to the MDN docs provided by Mozilla Foundation, an exceptional organisation. The front-end is mostly responsive, again, data visualisation is challenging in this perspective too.')).toBeTruthy()
})

test('Background with AXE', async () => {
  expect.extend(toHaveNoViolations)

  const { container: background } = render(
    <Background data={[]} />
  )

  expect(await axe(background)).toHaveNoViolations()
})
