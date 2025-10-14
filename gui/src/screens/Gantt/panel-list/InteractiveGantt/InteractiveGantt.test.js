import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { getByLabelText, render, screen, waitFor } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'

import APIGanttData from 'example-data/APIGantt.example-data'
import { labelListDefault } from 'prop-types/GanttScale.prop-type'

import InteractiveGantt from './InteractiveGantt'

test('InteractiveGantt - ', async () => {
  render(<InteractiveGantt data={APIGanttData} />)

  expect(screen.getByText('Bars')).toBeTruthy()
  expect(screen.getByText('Groupings')).toBeTruthy()


  /*
   * Check pressed on stats means disabled on group by
   */
  const statsButton = screen.getByLabelText('PS 2 shown on stats axis')
  await userEvent.click(statsButton)
  expect(screen.getAllByRole(
    'button', {
      disabled: true,
      name: 'PS 2 shown on group by axis'
    }
  ).length).toEqual(1)
  expect(screen.getAllByRole(
    'button', {
      pressed: true,
      name: 'PS 2 shown on stats axis'
    }
  ).length).toEqual(1)


  /*
   * Check pressed on group by will disable the button on stats
   */
  const groupByButton = screen.getByLabelText('PS 3 shown on group by axis')
  await userEvent.click(groupByButton)
  expect(screen.getAllByRole(
    'button', {
      disabled: true,
      name: 'PS 3 shown on stats axis'
    }
  ).length).toEqual(1)
  expect(screen.getAllByRole(
    'button', {
      pressed: true,
      name: 'PS 3 shown on group by axis'
    }
  ).length).toEqual(1)


  /*
   * Click a different stats button and check that means the group by button from the first test
   * is re-enabled
   */
  const nextStatsButton = screen.getByLabelText('PS 1 shown on stats axis')
  await userEvent.click(nextStatsButton)
  expect(screen.getAllByRole(
    'button', {
      disabled: false,
      name: 'PS 2 shown on group by axis'
    }
  ).length).toEqual(1)
})

test('InteractiveGantt with AXE', async () => {
  expect.extend(toHaveNoViolations)

  const { container: interactiveGantt } = render(
    <InteractiveGantt data={APIGanttData} />
  )

  expect(await axe(interactiveGantt)).toHaveNoViolations()
})
