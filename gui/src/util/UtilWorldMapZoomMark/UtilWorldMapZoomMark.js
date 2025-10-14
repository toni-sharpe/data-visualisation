import {
  WORLD_MAP_ON_SCREEN_HEIGHT,
  WORLD_MAP_ON_SCREEN_WIDTH,
  WORLD_MAP_SVG_SCALE_HEIGHT,
  WORLD_MAP_SVG_SCALE_WIDTH,
} from 'util/Constant/BaseConstantList'
import { numberPrecision } from 'util/Util/Util'

export function calcVerticalZoomMarkHeight({ zoom }) {
  return (WORLD_MAP_ON_SCREEN_HEIGHT / zoom).toFixed(1)
}

export function calcVerticalZoomMarkTop({
  height,
  y,
  zoom,
}) {
  let top = numberPrecision({
    n: (
      (Math.abs(y))
      /
      (
        WORLD_MAP_SVG_SCALE_HEIGHT
        *
        zoom
      )
      *
      WORLD_MAP_ON_SCREEN_HEIGHT
    )
  })

  if (top + Number(height) > WORLD_MAP_ON_SCREEN_HEIGHT) {
    top = WORLD_MAP_ON_SCREEN_HEIGHT - height
  }

  return top
}

export function calcHorizontalZoomMarkWidth({ zoom }) {
  return (WORLD_MAP_ON_SCREEN_WIDTH / zoom).toFixed(1)
}

export function calcHorizontalZoomMarkLeft({
  width,
  x,
  zoom,
}) {
  const fullScreenWidthPerc = 100

  let left = numberPrecision({
    n: (
      Math.abs(x)
      /
      (
        WORLD_MAP_SVG_SCALE_WIDTH
        *
        zoom
      )
      *
      WORLD_MAP_ON_SCREEN_WIDTH
    )
    +
    (
      fullScreenWidthPerc
      -
      WORLD_MAP_ON_SCREEN_WIDTH
    )
    /
    2
  })

  if (left + Number(width) > fullScreenWidthPerc) {
    left = fullScreenWidthPerc - width
  }

  return left
}