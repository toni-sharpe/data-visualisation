import { getByRole, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { axe, toHaveNoViolations } from 'jest-axe'

import DragGraph from './DragGraph';

const baseDragGraphProps = {
  color: 'green',
  graphKey: 'dragGraphTest',
  heading: 'Graph Heading',
  labelValList: [
    ['a', { cel:  13, length: 5 , nonSevere:  3, severe:  2 }],
    ['b', { cel: 101, length: 17, nonSevere:  6, severe: 11 }],
    ['c', { cel:  87, length: 7 , nonSevere:  6, severe:  1 }],
    ['d', { cel:  53, length: 23, nonSevere: 13, severe: 10 }],
    ['e', { cel:  54, length: 27, nonSevere: 13, severe: 14 }],
    ['f', { cel:  56, length: 23, nonSevere:  7, severe: 16 }],
    ['g', { cel:  87, length: 41, nonSevere: 27, severe: 14 }],
    ['h', { cel: 123, length: 11, nonSevere:  8, severe:  3 }],
    ['i', { cel:  87, length: 19, nonSevere: 18, severe:  1 }],
  ]
}

test('DragGraph', () => {
  const dragGraph = render(
    <DragGraph {...baseDragGraphProps} />
  )
})

test('DragGraph has the control buttons', () => {
  const dragGraph = render(
    <DragGraph {...baseDragGraphProps} />
  )

  expect(screen.getByText('+')).toBeTruthy()
  expect(screen.getByText('Outcome')).toBeTruthy()
  expect(screen.getByText('1')).toBeTruthy()
  expect(screen.getByText('30')).toBeTruthy()
  expect(screen.getByText('50')).toBeTruthy()
})

test('DragGraph with no data', () => {
  const props = {
    ...baseDragGraphProps,
    labelValList: undefined,
  }

  render(
    <DragGraph {...props} />
  )

  expect(screen.getByText('This drag graph config has zero results')).toBeTruthy()
})

test('DragGraph with empty array', () => {
  const props = {
    ...baseDragGraphProps,
    labelValList: [],
  }

  render(
    <DragGraph {...props} />
  )

  expect(screen.getByText('This drag graph config has zero results')).toBeTruthy()
})

test('DragGraph with [1] only array', () => {
  const props = {
    ...baseDragGraphProps,
    labelValList: [],
  }

  render(
    <DragGraph {...props} />
  )

  expect(screen.getByText('This drag graph config has zero results')).toBeTruthy()
})

test('DragGraph with AXE', async () => {
  expect.extend(toHaveNoViolations)

  const { container: dragGraph } = render(
    <DragGraph {...baseDragGraphProps} />
  )

  expect(await axe(dragGraph)).toHaveNoViolations()
})
