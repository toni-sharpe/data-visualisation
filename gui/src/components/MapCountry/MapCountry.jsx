
import i18next from 'util/i18next/i18next'
import PropTypes from 'prop-types'
import React from 'react'
import { type } from 'ramda'

import { CIRCLE_COUNTRY_RADIUS } from 'util/Constant/BaseConstantList'
import { isCountryCircle } from 'util/UtilMapCountry/UtilMapCountry'
import { calcPolygonCoordString } from 'util/UtilSvg/UtilSvg'
import SvgText from 'components/SvgText/SvgText'
import SvgCircle from 'components/SvgCircle/SvgCircle'
import MapAreaCenterPoint from 'components/MapAreaCenterPoint/MapAreaCenterPoint'
import SvgXyPropType from 'prop-types/SvgXy.prop-type'
import BorderCoordListPropType from 'prop-types/BorderCoordList.prop-type'
import { getLocalStorage } from 'util/UtilLocalStorage/UtilLocalStorage'

import './MapCountry.scss'

const i18nKey = 'MapCountry'

function MapCountry({
  borderCoordList,
  c,
  countryId,
  countryCode,
  countryName,
  extraClass,
  fill,
  stroke,
  isHovered,
  isSelected,
  labelC,
  showCountryId,
  zoom,
}) {
  const isCircle = isCountryCircle({
    borderCoordList,
    countryName,
  })

  const currentLanguage = getLocalStorage({ k: 'currentLanguage' })

  const translatedCountryName = currentLanguage === 'de'
    ? i18next.t(`${i18nKey}.${countryId}`)
    : null

  const selectedClass = isSelected ? ' is-selected' : ''
  const hoveredClass = isHovered ? ' is-hovered' : ''
  const className = `map-country${selectedClass}${hoveredClass}`
  const labelClassName = `map-country__name${selectedClass}${hoveredClass}`

  const border = isCircle && type(c, 'Object')
    ? (
      <SvgCircle
        extraClass={`${className} ${extraClass}`}
        fill={fill || '#efe'}
        stroke={stroke || '#888'}
        r={zoom * CIRCLE_COUNTRY_RADIUS}
        c={c}
      />
    )
    : (
    <polygon
      className={`${className} ${extraClass}`}
      fill={fill || '#efe'}
      stroke={stroke || '#888'}
      points={calcPolygonCoordString({
        coordList: borderCoordList.map(([a, b]) => {
          return [a * zoom , b * zoom]
        }
      )})}
      strokeOpacity={1}
    />
  )

  const label = zoom > 2
    ? (
      <SvgText
        extraClass={labelClassName}
        style={{ font: `bold ${zoom + 4 + zoom * 0.8}px sans-serif` }}
        text={`${showCountryId ? `[${countryId}]--` : '' }${translatedCountryName || labelC?.countryName || countryName}`}
        x={labelC?.x || c.x}
        y={labelC?.y || c.y}
      />
    )
    : zoom > 1
      ? (
        <SvgText
          extraClass={labelClassName}
          style={{ font: `bold ${zoom + 4 + zoom * 0.8}px sans-serif` }}
          text={countryCode}
          x={labelC?.x || c.x}
          y={labelC?.y || c.y}
        />
      )
      : (
      <MapAreaCenterPoint
        c={c}
        r={1}
      />
    )

  return [border, label]
}

MapCountry.defaultProps = {
  labelC: undefined,
  showCountryId: false,
}

MapCountry.propTypes = {
  borderCoordList: BorderCoordListPropType,
  c: SvgXyPropType,
  countryId: PropTypes.number,
  countryCode: PropTypes.string,
  countryName: PropTypes.string,
  fill: PropTypes.string,
  isSelected: PropTypes.bool,
  isHovered: PropTypes.bool,
  labelC: SvgXyPropType,
  showCountryId: PropTypes.bool,
  zoom: PropTypes.number,
}

export default MapCountry
