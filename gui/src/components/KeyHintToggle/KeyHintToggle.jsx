import i18next from 'util/i18next/i18next'

import Button from 'components/Button/Button'
import KeyHint from 'components/KeyHint/KeyHint'
import { toggleKeyHintList } from 'util/UtilKeyboard/UtilKeyboard'

import './KeyHintToggle.scss'

const i18nBase = 'KeyHintToggle'

function KeyHintToggle() {
  return (
    <div className='key-hint-toggle'>
      <KeyHint
        letter='k'
        positionStyle={{ top: '-12px', left: '-16px' }}
      />
      <Button
        onClick={toggleKeyHintList}
        label={i18next.t(`${i18nBase}.keyHint`)}
        size='medium'
      />
    </div>
  )
}

export default KeyHintToggle
