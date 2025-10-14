import i18next from 'util/i18next/i18next'
import PropTypes from 'prop-types'
import React from 'react'

import Button from 'components/Button/Button'
import { setJsonLocalStorage } from 'util/UtilLocalStorage/UtilLocalStorage'

const i18nBase = 'DragGraphButton'

function DragGraphButton({
  ariaLabel,
  buttonSize,
  graphKey,
  isDisabled,
  isSelected,
  k,
  persisted,
  newValue,
  onClick,
}) {
  return (
    <Button
      ariaLabel={ariaLabel}
      isSelected={isSelected}
      isDisabled={isDisabled}
      size={buttonSize}
      title={ariaLabel}
      label={i18next.t(`${i18nBase}.${k}`)}
      onClick={() => {
          persisted && setJsonLocalStorage({ k: graphKey, v: {
            ...persisted,
          [k]: newValue,
        } })
        onClick(newValue)
      }}
    />
  )
}

DragGraphButton.defaultProps = {
  buttonSize: 'medium',
}

DragGraphButton.propTypes = {
  ariaLabel: PropTypes.string,
  heading: PropTypes.string,
  scaleDetail: PropTypes.string,
  onClick: PropTypes.func,
}

export default DragGraphButton
