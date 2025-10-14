import i18next from 'util/i18next/i18next'
import PropTypes from 'prop-types'
import React from 'react'

import Button from 'components/Button/Button'
import { setJsonLocalStorage } from 'util/UtilLocalStorage/UtilLocalStorage'

const i18nBase = 'ZoomButton'

function ZoomButton({
  buttonSize,
  calcNewGraphOffset,
  graphKey,
  persisted,
  setGraphOffset,
  setZoom,
  zoom,
  zoomTo,
}) {
  const isSelected = zoom === zoomTo

  return (
    <Button
      extraClass={`js-zoom-${zoomTo}`}
      isSelected={isSelected}
      label={i18next.t(`${i18nBase}.${zoomTo}`)}
      size={buttonSize}
      onClick={() => {
        const newGraphOffset = calcNewGraphOffset
          ? calcNewGraphOffset()
          : persisted.graphOffset
        setGraphOffset(newGraphOffset)
        setZoom(zoomTo)
        setJsonLocalStorage({ k: graphKey, v: { ...persisted, graphOffset: newGraphOffset, zoom: zoomTo } })
      }}
    />
  )
}

ZoomButton.defaultProps = {
  buttonSize: 'medium',
  calcNewGraphOffset: undefined,
  isSelected: false,
  persisted: {},
}

ZoomButton.propTypes = {
  buttonSize: PropTypes.string,
  calcNewGraphOffset: PropTypes.func,
  graphKey: PropTypes.string,
  persisted: PropTypes.object,
  setGraphOffset: PropTypes.func,
  setZoom: PropTypes.func,
  zoom: PropTypes.number,
  zoomTo: PropTypes.number,
}

export default ZoomButton
