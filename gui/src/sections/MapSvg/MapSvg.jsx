import PropTypes from 'prop-types'
import {
  filter,
  keys,
  mergeDeepRight,
  pipe,
  reduce,
  toPairs,
} from 'ramda'
import React, { useState } from 'react'

import SvgScalePropType from 'prop-types/SvgScale.prop-type'
import {
  WORLD_MAP_FOCUS_ZONE,
  WORLD_MAP_SVG_SCALE,
} from 'util/Constant/BaseConstantList'
import {
  buildMapCountryElement,
  calcMapPolygonCoordGroup,
  calcZoomC,
  onMapCountryClickHandler,
} from 'util/UtilMapCountry/UtilMapCountry'
import { handleOnKeyDownScroll } from 'util/UtilMapControlList/UtilMapControlList'
import { onKeyDownRegionHandler } from 'util/UtilKeyboard/UtilKeyboard'

import MapCountry from 'components/MapCountry/MapCountry'
import MapEdgeBuffer from 'components/MapEdgeBuffer/MapEdgeBuffer'
import MapSvgControlList from 'sections/MapSvgControlList/MapSvgControlList'
import MapZoomMarkHorizontal from 'components/MapZoomMarkHorizontal/MapZoomMarkHorizontal'
import MapZoomMarkVertical from 'components/MapZoomMarkVertical/MapZoomMarkVertical'
import SvgWrapper from 'components/SvgWrapper/SvgWrapper'
import { getJsonLocalStorage } from 'util/UtilLocalStorage/UtilLocalStorage'

import './MapSvg.scss'

function MapSvg({
  currentYear,
  graphKey,
  mapDetailData,
  selectedCountryMapFn,
  showFocusZone,
  showLabelList,
  svgScale,
  worldBorderList,
}) {
  const persisted = getJsonLocalStorage({ k: graphKey })

  const [currentCountryIdList, setCurrentCountryList] = useState(persisted?.currentCountryIdList || [])
  const [currentHoveredCountryId, setCurrentHoveredCountryId] = useState()
  const [graphOffset, setGraphOffset] = useState(persisted?.graphOffset || [0, 0])
  const [zoom, setZoom] = useState(persisted?.zoom || 1)

  const borderList = []
  const labelList = []

  const baseWorldBorderList = worldBorderList[0]

  const worldBorderUpdateYearList = pipe(
    keys,
    filter(year => year <= currentYear),
    reduce((a, c) => mergeDeepRight(a, worldBorderList[c]), baseWorldBorderList),
    toPairs,
  )(worldBorderList)

  worldBorderUpdateYearList.forEach(function([
    countryId, {
      countryBorder,
      countryCenter,
      countryCode,
      countryName,
      labelCenter,
    }
  ]) {
    return (countryBorder || [null]).forEach(function(subBorder) {
      const { borderCoordList, countryC } = calcMapPolygonCoordGroup({
        countryCenter,
        subBorder,
      })

      const {
        fill,
        stroke,
      } = mapDetailData[countryId] && mapDetailData[countryId][1]
          ? mapDetailData[countryId][1]
          : {}

      const [b, l] = MapCountry({
        borderCoordList,
        c: calcZoomC({ c: countryC, zoom }),
        countryId,
        countryCode,
        countryName,
        fill,
        stroke,
        isHovered: currentHoveredCountryId === countryId,
        isSelected: currentCountryIdList.includes(countryId),
        labelC: labelCenter && !countryC.label
          ? { ...calcZoomC({ c: labelCenter, zoom }), countryName }
          : countryC.label
            ? { ...calcZoomC({ c: countryC.label, zoom }), countryName: countryC.label.countryName }
            : null,
        showCountryId: false,
        zoom,
      })

      const onClick = onMapCountryClickHandler({
        countryId,
        currentCountryIdList,
        graphKey,
        persisted,
        setCurrentCountryList,
      })

      borderList.push({ b, countryId, onClick })
      labelList.push({ l, countryId, onClick })
    })
  })

  return (
    <figure
      className='map-svg'
      onKeyDown={({ keyCode }) => handleOnKeyDownScroll({
        graphKey,
        graphOffset,
        keyCode,
        persisted,
        setGraphOffset,
        setZoom,
        zoom,
      })}
    >
      <div
        onKeyDown={onKeyDownRegionHandler()}
        tabIndex='0'
      >
        <MapZoomMarkHorizontal
          orientation='top'
          showFocusZone={showFocusZone}
          x={graphOffset[0]}
          zoom={zoom}
        />
        <div className='row-layout'>
          <MapZoomMarkVertical
            orientation='left'
            showFocusZone={showFocusZone}
            y={graphOffset[1]}
            zoom={zoom}
          />
          <SvgWrapper
            ariaLabel='world map'
            extraClass='map-svg__svg'
            k='world-map-svg'
            region
            svgScale={`${svgScale}`}
          >
            <defs>
              <pattern id="star" viewBox="0,0,10,10" patternUnits="userSpaceOnUse" width="1%" height="1%">
                <circle
                  cx='5'
                  cy='5'
                  r='6'
                  fill='#44e'
                  fillOpacity='0.3'
                  strokeWidth='6'
                  stroke='#fff'
                  strokeOpacity='0.9'
                />
              </pattern>
            </defs>
            <MapEdgeBuffer
              graphOffset={graphOffset}
              zoom={zoom}
            />
            <g key='guides' transform={`translate(${graphOffset})`}>
              { borderList.map(({ b, countryId, onClick }, i) => {
                return (
                  <g {...buildMapCountryElement({
                    b,
                    countryId,
                    i,
                    onClick,
                    setCurrentHoveredCountryId,
                  })} />
                )
              })}
              { showLabelList && labelList.map(({ countryId, l, onClick }, i) => {
                return (
                  <g {...buildMapCountryElement({
                    countryId,
                    i,
                    onClick,
                    setCurrentHoveredCountryId
                  })}>
                    {l}
                  </g>
                )
              })}
            </g>
          </SvgWrapper>
          <MapZoomMarkVertical
            orientation='right'
            showFocusZone={showFocusZone}
            y={graphOffset[1]}
            zoom={zoom}
          />
        </div>
        <MapZoomMarkHorizontal
          orientation='bottom'
          showFocusZone={showFocusZone}
          x={graphOffset[0]}
          zoom={zoom}
        />
      </div>
      <MapSvgControlList
        graphKey={graphKey}
        graphOffset={graphOffset}
        persisted={persisted}
        setGraphOffset={setGraphOffset}
        setZoom={setZoom}
        zoom={zoom}
      />
    </figure>
  )
}

MapSvg.defaultProps = {
  currentYear: 0,
  graphKey: 'blankMap',
  showLabelList: true,
  showFocusZone: WORLD_MAP_FOCUS_ZONE,
  svgScale: WORLD_MAP_SVG_SCALE,
}

MapSvg.propTypes = {
  currentYear: PropTypes.number,
  graphKey: PropTypes.string,
  showFocusZone: PropTypes.bool,
  showLabelList: PropTypes.bool,
  svgScale: SvgScalePropType,
  worldBorderList: PropTypes.object,
}

export default MapSvg
