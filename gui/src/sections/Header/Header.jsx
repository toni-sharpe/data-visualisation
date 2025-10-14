import i18next from 'util/i18next/i18next'
import React, { useState } from 'react'
import PropTypes from 'prop-types'

import MenuButton from 'components/MenuButton/MenuButton'
import CurrentFilterListPropType from 'prop-types/CurrentFilterList.prop-type'
import CurrentUrlPropType from 'prop-types/CurrentUrl.prop-type'
import FilterButtonList from 'sections/FilterButtonList/FilterButtonList'
import Menu from 'sections/Menu/Menu'
import { ORDERED_FILTERS } from 'util/Constant/BaseConstantList'
import { getJsonLocalStorage, setJsonLocalStorage } from 'util/UtilLocalStorage/UtilLocalStorage'
import { onKeyDownRegionHandler } from 'util/UtilKeyboard/UtilKeyboard'

import './Header.scss'

const i18nBase = 'Header'

function Header({
  currentFilterList,
  currentUrl,
  setCurrentFilterList,
}) {
  const persisted = getJsonLocalStorage({ k: 'menuOpen' })
  const [isOpen, setIsOpen] = useState(persisted || false)

  const openClass = isOpen ? 'open' : ''

  return (
    <div
      onKeyDown={onKeyDownRegionHandler()}
      tabIndex='0'
    >
      { !isOpen && (
        <div className='ui-header-bar__main-button'>
          <MenuButton
            label={i18next.t(`${i18nBase}.openMenu`)}
            onClick={() => {
              setIsOpen(true)
              setJsonLocalStorage({ k: 'menuOpen', v: true })
            }}
          />
        </div>
      ) }
      { isOpen && (
        <div className='ui-header-bar__main-button'>
          <MenuButton
            label={i18next.t(`${i18nBase}.close`)}
            onClick={() => {
              setIsOpen(false)
              setJsonLocalStorage({ k: 'menuOpen', v: false })
            }}
            title={i18next.t(`${i18nBase}.close`)}
          />
        </div>
      ) }
      <header
        className={`js-header ui-header-bar ${openClass}`}
        data-testid='ui-header'
      >
        {
          <div className='ui-header-bar__close-x-button'>
            <MenuButton
              label='X'
              onClick={() => {
                setIsOpen(false)
                setJsonLocalStorage({ k: 'menuOpen', v: false })
              }}
              title={i18next.t(`${i18nBase}.close`)}
            />
          </div>
        }
        <div className='ui-header-bar__nav-and-filter'>
          <Menu currentUrl={currentUrl} />
          <FilterButtonList
            currentFilterList={currentFilterList}
            currentUrl={currentUrl}
            setCurrentFilterList={setCurrentFilterList}
          />
        </div>
      </header>
    </div>
  )  
}

Header.defaultProps = {
  currentFilterList: ORDERED_FILTERS,
  currentUrl: 'scatter',
}

Header.propTypes = {
  currentFilterList: CurrentFilterListPropType,
  currentUrl: CurrentUrlPropType,
  setCurrentFilterList: PropTypes.func,
}

export default Header;
