import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { inc, map, pipe, range } from 'ramda'

import {
  DEFAULT_DARK_GREY,
  DEFAULT_MEDIUM_GREY,
  GRAPH_LEGEND_WIDTH,
  LABEL_LINE_GRAPH_GAP,
  LINE_GRAPH_HORIZONTAL_SPACE,
  LINE_GRAPH_LABEL_WIDTH,
  LINE_GRAPH_LEGEND_HEIGHT,
  LINE_GRAPH_LEGEND_STROKE_WIDTH,
  LINE_GRAPH_LEGEND_TOP_OFFSET,
  LINE_GRAPH_TOP_PADDING,
} from 'util/Constant/BaseConstantList'
import { numberPrecision } from 'util/Util/Util'
import { calcAccessibleHue } from 'util/UtilHue/UtilHue'
import { calcMaxBasedDisplay } from 'util/UtilScale/UtilScaleGranularity'
import SvgLine from 'components/SvgLine/SvgLine'
import LabelWithLineToPoint from 'components/LabelWithLineToPoint/LabelWithLineToPoint'
import GraphLegend from 'components/GraphLegend/GraphLegend'
import SvgWrapper from 'components/SvgWrapper/SvgWrapper'
import { sortByKey } from 'util/UtilSort/UtilSort'

import './LineGraph.scss'

function LineGraph({
  ariaLabel,
  data,
  heading,
  graphWidth: gWidth,
  horizontalSpace,
  labelWidth,
  labelGraphGap,
  legendHeight,
  legendTopOffset,
  legendStrokeWidth,
  legendWidth,
  max,
  svgScale,
  xLabel,
  yLabel,
}) {
  const [currentHoveredLineId, setCurrentHoveredLineId] = useState()
  const horizontalTotal = horizontalSpace * 2
  const lessPrecise = 3
  const { highlight, show } = calcMaxBasedDisplay({ max })

  const graphHeight = Math.round(
    (
      Math.floor(max / highlight) * highlight
      +
      highlight * 2
    )
    +
    legendTopOffset
  )

  const graphWidth = gWidth || graphHeight

  let xi = 0
  let highLightLineList = []
  let markedLineList = []
  for (; xi <= graphHeight; xi = xi + show) {
    const markedLine = numberPrecision({ n: xi, lessPrecise })
    if (xi % highlight === 0) {
      highLightLineList.push(markedLine)
    }

    markedLineList.push(markedLine)
  }

  const lineCount = data.length

  const longest = pipe(
    map(([_, { length }]) => length),
    d => Math.max(...d),
  )(data)

  const xUnit = numberPrecision({ n: graphWidth / longest, lessPrecise })
  const yUnit = numberPrecision({ n: graphHeight / graphHeight, lessPrecise })
  const labelUnit = numberPrecision({ n: graphHeight / lineCount, lessPrecise })
  const yHighlight = numberPrecision({ n: graphHeight / (graphHeight / highlight), lessPrecise })
  const yLine = numberPrecision({ n: graphHeight / (graphHeight / show ), lessPrecise })
  const xAxisRange = range(0, longest)
  const sortedData = data.sort((a, b) => a[1][0].v >= b[1][0].v ? 1 : -1)

  const calcHue = calcAccessibleHue()
  const x = graphWidth + horizontalSpace
  const xBase = x + legendWidth / 2
  let legendDataList = []

  if (currentHoveredLineId || currentHoveredLineId === 0) {
    legendDataList = sortedData
      .map((value, i) => {
        const stroke = calcHue({ i, total: lineCount })

        return {
          label: value[0],
          stroke,
          value: value[1][currentHoveredLineId].v,
          x,
          xBase,
        }
      })
      .sort(sortByKey({ k: 'value' }))
  }

  return (
    <figure
      className='column-layout space-children--column line-graph'
      onMouseLeave={() => setCurrentHoveredLineId(undefined)}
    >
      <figcaption className='line-graph__heading'>{heading}</figcaption>
      <SvgWrapper
        ariaLabel={ariaLabel}
        extraClass='line-graph__svg'
        region
        svgScale={`0 0 ${graphWidth + horizontalTotal} ${graphHeight + LINE_GRAPH_TOP_PADDING}`}
      >
        <g transform={`translate(${horizontalSpace} 0)`}>
          { markedLineList.map((markedLine, i) => {
            const highlight = highLightLineList.includes(markedLine)
            const xPosition = graphWidth - xUnit
            const yPosition = graphHeight - markedLine

            return (
              <g key={`l-${i}`}>
                <line
                  x1={0}
                  y1={yPosition}
                  x2={xPosition}
                  y2={yPosition}
                  stroke={highlight
                    ? DEFAULT_DARK_GREY
                    : DEFAULT_MEDIUM_GREY
                  }
                  strokeOpacity={0.3}
                  strokeWidth={1}
                />
                <text
                  className={`line-graph__label ${highlight ? 'line-graph__label--highlight' : ''}`}
                  x={xPosition + 2}
                  y={yPosition}
                  textAnchor='start'
                  dominantBaseline='middle'
                >
                  {markedLine}
                </text>
              </g>
            )
          }) }
          { xAxisRange.map((_, i) => {
            return (
              <line
                x1={i * xUnit}
                y1={0}
                x2={i * xUnit}
                y2={graphHeight}
                stroke={DEFAULT_DARK_GREY}
                strokeOpacity={0.2}
                strokeWidth={1}
                key={i}
              />
            )
          }) }
          { sortedData.map(([label, valueList], i) => {
            const stroke = calcHue({ i, total: lineCount })
            const firstPoint = graphHeight - (i * labelUnit) - LINE_GRAPH_TOP_PADDING

            function valToY({ index }) {
              return graphHeight - (valueList[index].v * yUnit)
            }

            const strokeDef = {
              stroke,
              strokeWidth: 1,
            }

            const linePivot = { x: 0 - labelGraphGap, y: firstPoint }

            return (
              <g key={`s-${i}`}>
                <LabelWithLineToPoint
                  {...strokeDef}
                  label={label}
                  linePivot={linePivot}
                  labelLineStart={{ x: 0 - labelWidth - labelGraphGap, y: firstPoint }}
                  labelWidth={labelWidth}
                  targetPoint={{ x: 0, y: valToY({ index: 0 }) }}
                />
                { valueList.map((vl, j) => {
                  const k = j + 1
                  const x = j * xUnit
                  const y = valToY({ index: j })
                  const show = j === currentHoveredLineId

                  return valueList[k] && (
                    <line
                      {...strokeDef}
                      x1={x}
                      y1={y}
                      x2={k * xUnit}
                      y2={valToY({ index: k })}
                    />
                  )
                }) }
              </g>
            )
          })}
          { xAxisRange.map((_, i) => {
            return (
              <rect
                className='line-graph__data-target'
                height={graphHeight}
                key={`r-${i}`}
                onMouseEnter={() => setCurrentHoveredLineId(i)}
                width={xUnit - 4}
                x={(i * xUnit - xUnit / 2) + 2}
                y={0}
              />
            )
          }) }
        </g>
        { legendDataList
          &&
          legendDataList
            .map((labelData, i) => {
              return (
                <GraphLegend
                  {...labelData}
                  i={i}
                  legendTopOffset={legendTopOffset}
                />
              )
            })
        }
      </SvgWrapper>
    </figure>
  )
}

LineGraph.defaultProps = {
  horizontalSpace: LINE_GRAPH_HORIZONTAL_SPACE,
  labelGraphGap: LABEL_LINE_GRAPH_GAP,
  labelWidth: LINE_GRAPH_LABEL_WIDTH,
  legendStrokeWidth: LINE_GRAPH_LEGEND_STROKE_WIDTH,
  legendTopOffset: LINE_GRAPH_LEGEND_TOP_OFFSET,
  legendWidth: GRAPH_LEGEND_WIDTH,
}

LineGraph.propTypes = {
  ariaLabel: PropTypes.string,
  heading: PropTypes.string,
  horizontalSpace: PropTypes.number,
  labelGraphGap: PropTypes.number,
  labelWidth: PropTypes.number,
  legendStrokeWidth: PropTypes.number,
  legendTopOffset: PropTypes.number,
  xLabel: PropTypes.string,
  yLabel: PropTypes.string,
}

export default LineGraph
