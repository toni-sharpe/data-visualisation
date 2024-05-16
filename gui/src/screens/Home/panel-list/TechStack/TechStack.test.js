import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { getByLabelText, render, screen, waitFor } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'

import TechStack from './TechStack'

test('TechStack - ', async () => {
  render(
    <TechStack />
  )


  /*
   * Base screen tests, has it rendered
   */
  expect(screen.getByText('Tech Stack')).toBeTruthy()
  expect(screen.getByText('I\'m using this page to list not just the tools and techniques but also some of the things related to accessibility, developer experience and performance. Listed alphabetically and not to be considered complete given the fluid nature of the main concerns and technologies. The list is quite fine-grained and detailed and ranges from some of the most well known things in web tech to my own ideas that might even be novel.')).toBeTruthy()


  /*
   * Simple tests of on screen specifics, not always needed
   */
})

test('TechStack with AXE', async () => {
  expect.extend(toHaveNoViolations)

  const { container: techStack } = render(
    <TechStack />
  )

  expect(await axe(techStack)).toHaveNoViolations()
})
