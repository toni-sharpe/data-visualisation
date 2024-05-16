import PropTypes from 'prop-types'
import React from 'react'

import Button from 'components/Button/Button'
import { setJsonLocalStorage } from 'util/UtilLocalStorage/UtilLocalStorage'

import './ResetGraphButton.scss'

function ResetGraphButton({
  buttonSize,
  extraStateFn,
  graphKey,
  graphOffset: [ox, oy],
  persisted,
  setGraphOffset,
  setZoom,
  zoomDefault,
  zoom,
}) {
  const isDisabled = ox === 0 && oy === 0 && zoom === zoomDefault

  return (
    <Button
      extraClass={!isDisabled ? 'reset-zoom-button__active' : ''}
      isDisabled={isDisabled}
      k='resetZoomButton'
      label={isDisabled ? '-' : 'X'}
      onClick={() => {
        setZoom(zoomDefault)
        setGraphOffset([0, 0])
        setJsonLocalStorage({
          k: graphKey,
          v: {
            ...persisted,
            graphOffset: [ox, oy],
            zoom: zoomDefault
          }
        })
        extraStateFn && extraStateFn()
      }}
      size={buttonSize}
    />
  )
}

ResetGraphButton.defaultProps = {
  buttonSize: 'medium',
  zoomDefault: 1,
}

ResetGraphButton.propTypes = {
  extraStateFn: PropTypes.func,
  graphOffset: PropTypes.array,
  setGraphOffset: PropTypes.func,
  setZoom: PropTypes.func,
  buttonSize: PropTypes.string,
  zoomDefault: PropTypes.number,
  zoom: PropTypes.number,
}

export default ResetGraphButton
