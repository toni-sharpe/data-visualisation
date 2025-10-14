import PropTypes from 'prop-types'
import React from 'react'

import Button from 'components/Button/Button'
import { secondaryNavProps } from 'util/UtilNav/UtilNav'

function SecondaryNavButtonList({
  currentPanel,
  i18nBase,
  panelList,
  setCurrentPanel,
}) {
  return panelList.map((k, i) => {
    return (
      <li key={k}>
        <Button
          extraClass={i === 0 ? 'js-menu-2-first' : null}
          {
            ...secondaryNavProps({
              currentPanel,
              i18nBase,
              k,
              setCurrentPanel,
            })
          }
        />
      </li>
    )
  })
}

SecondaryNavButtonList.propTypes = {
  currentPanel: PropTypes.string,
  i18nBase: PropTypes.string,
  panelList: PropTypes.arrayOf(PropTypes.string),
  setCurrentPanel: PropTypes.func,
}

export default SecondaryNavButtonList
