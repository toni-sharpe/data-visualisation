import i18next from 'util/i18next/i18next'
import PropTypes from 'prop-types'
import React from 'react'

import Button from 'components/Button/Button'
import KeyHint from 'components/KeyHint/KeyHint'
import GraphOffsetPropType from 'prop-types/GraphOffset.prop-type'
import {
  WORLD_MAP_ZOOM_LIST,
  WORLD_MAP_SVG_ZOOM_DEFAULT,
} from 'util/Constant/BaseConstantList'
import ResetGraphButton from 'components/ResetGraphButton/ResetGraphButton'
import ZoomButton from 'components/ZoomButton/ZoomButton'
import {
  calcNewGraphOffset,
  onWestEventHandler,
  onEastEventHandler,
  onNorthEventHandler,
  onSouthEventHandler,
} from 'util/UtilMapControlList/UtilMapControlList'
import { onKeyDownRegionHandler } from 'util/UtilKeyboard/UtilKeyboard'

import './MapSvgControlList.scss'

const i18nBase = 'MapSvgControlList'

function MapSvgControlList({
  graphKey,
  graphOffset,
  persisted,
  setGraphOffset,
  setZoom,
  zoom,
  zoomDefault,
}) {
  const [x, y] = graphOffset

  const movementButtonCommonProps = {
    isDisabled: zoom === 1 && x === 0 && y === 0,
    size: 'medium',
  }

  const eventHandlerProps = {
    graphKey,
    graphOffset,
    persisted,
    setGraphOffset,
    setZoom,
    zoom,
  }

  return (
    <div
      aria-label='world map move and zoom'
      role='region'
    >
      <ul
        className='map-svg-control-list'
        onKeyDown={onKeyDownRegionHandler({ zoom })}
        tabIndex='0'
      >
        <li>
          <ol className='row-layout space-children'>
            <li className='map-svg-control-list__scroll-key-hint'>
              <KeyHint letter='s' positionStyle={{ top: '3px', left: '-16px' }} />
            </li>
            <li>
              <Button
                {...movementButtonCommonProps}
                extraClass='js-map-scroll js-west'
                label=' ← West'
                onClick={() => onWestEventHandler(eventHandlerProps)}
              />
            </li>
            <li>
              <Button
                {...movementButtonCommonProps}
                extraClass='js-map-scroll js-north'
                label='↑ North'
                onClick={() => onNorthEventHandler(eventHandlerProps)}
              />
            </li>
            <li>
              <Button
                {...movementButtonCommonProps}
                extraClass='js-map-scroll js-east'
                label='East →'
                onClick={() => onEastEventHandler(eventHandlerProps)}
              />
            </li>
            <li>
              <Button
                {...movementButtonCommonProps}
                extraClass='js-map-scroll js-south'
                label='↓ South'
                onClick={() => onSouthEventHandler(eventHandlerProps)}
              />
            </li>
          </ol>
        </li>
        <li>
          <ol
            className='map-svg-control-list__zoom'
          >
            <li>
              <KeyHint letter='z' positionStyle={{ top: '8px', left: '-4px' }} />
            </li>
            <li className='js-zoom-label map-svg-control-list__zoom-label'>
              <span>{i18next.t(`${i18nBase}.zoom`)}:</span>
            </li>
            <li className='map-svg-control-list__zoom-buttons row-layout space-children'>
              { WORLD_MAP_ZOOM_LIST.map(zoomTo => {
                return (
                  <ZoomButton
                    calcNewGraphOffset={() => {
                      return zoomTo === 1
                        ? [0, 0]
                        : calcNewGraphOffset({
                            x,
                            y,
                            zoomTo,
                            zoomFrom: zoom
                          })
                    }}
                    graphKey={graphKey}
                    k={zoomTo}
                    key={`${zoomTo}-zoom`}
                    persisted={persisted}
                    setGraphOffset={setGraphOffset}
                    setZoom={setZoom}
                    zoom={zoom}
                    zoomTo={zoomTo}
                  />
                )
              }) }
              <ResetGraphButton
                graphKey={graphKey}
                graphOffset={[0, 0]}
                setGraphOffset={setGraphOffset}
                setZoom={setZoom}
                zoom={zoom}
                zoomDefault={zoomDefault}
              />
            </li>
          </ol>
        </li>
      </ul>
    </div>
  )
}

MapSvgControlList.defaultProps = {
  graphKey: 'blankMap',
  graphOffset: [0,0],
  zoom: 1,
  zoomDefault: WORLD_MAP_SVG_ZOOM_DEFAULT,
}

MapSvgControlList.propTypes = {
  graphKey: PropTypes.string,
  graphOffset: GraphOffsetPropType,
  persisted: PropTypes.object,
  setGraphOffset: PropTypes.func,
  setZoom: PropTypes.func,
  zoom: PropTypes.number,
  zoomDefault: PropTypes.number,
}

export default MapSvgControlList
