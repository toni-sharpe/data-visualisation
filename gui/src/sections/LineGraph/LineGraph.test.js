import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { getByRole, render, screen, waitFor } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'

import { SingleHistogramData } from 'example-data/Histogram.example-data'

import LineGraph from './LineGraph'


const baseLineGraphProps = {
  ariaLabel: 'Testing the aria label',
  data: [
    ['labelA', [{ v: 17, l: 'pointA' }]],
    ['labelB', [{ v: 11, l: 'pointB' }]],
    ['labelC', [{ v: 19, l: 'pointC' }]],
  ],
  heading: 'Heading for LG',
  max: 1,
  svgScale: 100,
  xLabel: 'xLabel',
  yLabel: 'yLabel',
}


test('LineGraph', async () => {
  render(
    <LineGraph
      {...baseLineGraphProps}
    />
  )

  expect(screen.getByText('Heading for LG')).toBeTruthy()
  expect(screen.getByLabelText('Testing the aria label')).toBeTruthy()

  expect(screen.getByText('labelA')).toBeTruthy()
  expect(screen.getByText('labelB')).toBeTruthy()
  expect(screen.getByText('labelC')).toBeTruthy()
})


test('LineGraph with AXE', async () => {
  expect.extend(toHaveNoViolations)

  const { container: histogramBarList } = render(
    <LineGraph
      {...baseLineGraphProps}
    />
  )

  expect(await axe(histogramBarList)).toHaveNoViolations()
})
