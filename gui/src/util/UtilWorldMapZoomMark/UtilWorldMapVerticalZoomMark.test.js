import { WORLD_MAP_ON_SCREEN_HEIGHT } from 'util/Constant/BaseConstantList'

import {
  calcVerticalZoomMarkHeight,
  calcVerticalZoomMarkTop,
} from './UtilWorldMapZoomMark'

test('calcVerticalZoomMarkHeight() should return correct height when zoom is 2', () => {
  const zoom = 2
  expect(calcVerticalZoomMarkHeight({ zoom })).toBe('38.5')
})

test('calcVerticalZoomMarkHeight() should return correct height when zoom is 1', () => {
  const zoom = 1
  expect(calcVerticalZoomMarkHeight({ zoom })).toBe('77.0')
})

test('calcVerticalZoomMarkHeight() should return correct height when zoom is 0.5', () => {
  const zoom = 0.5
  expect(calcVerticalZoomMarkHeight({ zoom })).toBe('154.0')
})

test('should return correct top value when y is positive and zoom is 2', () => {
  const y = 20
  const zoom = 2
  expect(calcVerticalZoomMarkTop({ y, zoom })).toBe(1.61088)
})

test('should return correct top value when y is negative and zoom is 1', () => {
  const y = -30
  const zoom = 1
  expect(calcVerticalZoomMarkTop({ y, zoom })).toBe(4.83264)
})

test('should return correct top value when y is positive and zoom is 0.5', () => {
  const y = 40
  const zoom = 0.5
  expect(calcVerticalZoomMarkTop({ y, zoom })).toBe(12.887)
})

test('should not allow width and left to be greater than map width', () => {
  const height = WORLD_MAP_ON_SCREEN_HEIGHT + 1 // guarantees calc will be over the set height value
  const y = 40
  const zoom = 0.5
  // -1 is expected, left should be mapheight - height
  expect(calcVerticalZoomMarkTop({ height, y, zoom })).toBe(-1)
})
