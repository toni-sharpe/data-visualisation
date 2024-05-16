import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { axe, toHaveNoViolations } from 'jest-axe'

import { ROOT_MENU_SLUGS } from 'util/Constant/BaseConstantList'

import Menu from './Menu'

test('Menu', async () => {
  render(
    <Menu
      currentUrl='TimeLine'
    />
  )

  // Menu items exist, selected is aria marked
  const ariaOther = { current: false }
  const ariaCurrent = { current: 'page' }


  /*
   * Roles
   */
  expect(screen.getByRole('navigation')).toBeTruthy()
  expect(screen.getAllByRole('menuitem').length).toEqual(ROOT_MENU_SLUGS.length)


  /*
   * Menu items
   */
  expect(screen.getByText('Purpose', ariaOther)).toBeTruthy()
  expect(screen.getByText('Scatter Plot', ariaOther)).toBeTruthy()
  expect(screen.getByText('Time Line', ariaOther)).toBeTruthy()
  expect(screen.getByText('Histogram', ariaOther)).toBeTruthy()
  expect(screen.getByText('SVG', ariaOther)).toBeTruthy()
  expect(screen.getByText('World Map', ariaOther)).toBeTruthy()
})


test('Menu with AXE', async () => {
  expect.extend(toHaveNoViolations)

  const { container: menu } = render(
    <Menu
      currentUrl='TimeLine'
    />
  )

  expect(await axe(menu)).toHaveNoViolations()
})
