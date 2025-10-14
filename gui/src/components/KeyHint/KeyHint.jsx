import PropTypes from 'prop-types'
import React from 'react'

import KeyHintLetterPropType from 'prop-types/KeyHintLetter.prop-type'
import KeyHintPositionStylePropType from 'prop-types/KeyHintPositionStyle.prop-type'

import './KeyHint.scss'

function KeyHint({
  isShown,
  letter,
  positionStyle,
}) {
  const classList = `js-key-hint-${letter} key-hint ${isShown ? '' : 'hide'}`

  return (
    <div
      className={classList}
      style={positionStyle}
    >
      <span>{letter}</span>
    </div>
  )
}

KeyHint.defaultProps = {
  isShown: false,
}

KeyHint.propTypes = {
  isShown: PropTypes.bool,
  letter: KeyHintLetterPropType,
  positionStyle: KeyHintPositionStylePropType,
}

export default KeyHint;
