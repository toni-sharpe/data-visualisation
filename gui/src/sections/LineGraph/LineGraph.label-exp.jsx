import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { inc, map, pipe, range } from 'ramda'

import { LINE_CHART_VAL_SPACER } from 'util/Constant/BaseConstantList'
import { numberPrecision } from 'util/Util/Util'
import { calcAccessibleHue } from 'util/UtilHue/UtilHue'
import { calcMaxBasedDisplay } from 'util/UtilScale/UtilScaleGranularity'
import SvgLine from 'components/SvgLine/SvgLine'
import SvgWrapper from 'components/SvgWrapper/SvgWrapper'

import './LineGraph.scss'

function LineGraph({
  ariaLabel,
  data,
  heading,
  max,
  svgScale,
  xLabel,
  yLabel,
}) {
  const [currentHoveredLineId, setCurrentHoveredLineId] = useState()
  const scale = calcMaxBasedDisplay({ max })

  const fullHeight = (Math.floor(max / scale.highlight) * scale.highlight + scale.highlight * 2) + 30

  let x = 0
  let highLightLineList = []
  let lineList = []
  for (; x <= fullHeight; x = x + scale.show) {
    lineList.push(x)
    if (x % scale.highlight === 0) {
      highLightLineList.push(x)
    }
  }

  const lineCount = data.length

  const longest = pipe(
    map(([_, { length }]) => length),
    d => Math.max(...d),
  )(data)

  const lessPrecise = 3
  const xUnit = numberPrecision({ n: fullHeight / longest, lessPrecise })
  const yUnit = numberPrecision({ n: fullHeight / fullHeight, lessPrecise })
  const labelUnit = numberPrecision({ n: fullHeight / lineCount, lessPrecise })
  const yHighlight = numberPrecision({ n: fullHeight / (fullHeight / scale.highlight), lessPrecise })
  const yLine = numberPrecision({ n: fullHeight / (fullHeight / scale.show ), lessPrecise })
  const xAxisRange = range(0, longest)
  const sortedData = data.sort((a, b) => a[1][0].v >= b[1][0].v ? 1 : -1)

  const calcHue = calcAccessibleHue()

  const valList = {}

  const labelList = currentHoveredLineId && sortedData
    .map(([lineLabel, valueList], i) => {
      return valueList
        .map((vl, j) => {
          return j === currentHoveredLineId ? vl.v : null
        })
        .filter(Boolean)
    })
    .map((value, i) => {
      const stroke = calcHue({ i, total: lineCount })
      const xBase = currentHoveredLineId * xUnit + 200
      const yBase = fullHeight - value
      const iR = i % 14

      const left = [0, 2, 5].includes(iR)
      const right = [1, 4, 6].includes(iR)
      const top = [0, 3, 6].includes(iR)
      const upTop = [8,10,12].includes(iR)
      const bottom = [2, 4, 7].includes(iR)
      const downBottom = [9,11,13].includes(iR)

      const x = left
        ? xBase - LINE_CHART_VAL_SPACER
        : right
          ? xBase + LINE_CHART_VAL_SPACER
          : xBase

      const y = top || upTop
        ? yBase - LINE_CHART_VAL_SPACER - (upTop ? LINE_CHART_VAL_SPACER : 0)
        : bottom || downBottom
          ? yBase + LINE_CHART_VAL_SPACER + (downBottom ? LINE_CHART_VAL_SPACER : 0)
          : yBase

      const textAnchor = left
        ? 'end'
        : right
          ? 'start'
          : 'middle'

      const dominantBaseline = top
        ? 'text-top'
        : bottom
          ? 'hanging'
          : 'middle'

      const w = 24

      const h = 14

      const topX = x - (w / 2)
      const bottomX = topX + h
      const leftY = y - (h / 2)

      return [
        [],
        {
          bottomX,
          dominantBaseline,
          h,
          leftY,
          stroke,
          textAnchor,
          topX,
          value,
          w,
          x,
          xBase,
          y,
        }
      ]
    })
    .map(([renderList, valList], i) => {
      if (valList) {
        const { h, leftY, topX, w } = valList

        renderList.push(
          <rect
            fill='#fff'
            height={h}
            key={`${topX}-${i}`}
            width={w}
            x={topX}
            y={leftY}
          />
        )
      }

      return [renderList, valList]
    })
    .map(([renderList, valList], i) => {
      if (valList) {
        const {
          dominantBaseline,
          textAnchor,
          value,
          x,
          y,
        } = valList

        renderList.push(
          <text
            className='line-graph__point-label'
            key={`${i}-${value}`}
            x={x}
            y={y}
            fill='#000'
            textAnchor={textAnchor}
            dominantBaseline={dominantBaseline}
          >
            {value}
          </text>
        )
      }

      return [renderList, valList]
    })
    .map(([renderList, valList], i) => {
      if (valList) {
        const {
          bottomX,
          leftY,
          stroke,
          value,
          w,
          h,
          xBase,
        } = valList

        renderList.push(
          <g>
            <line
              stroke={stroke}
              x1={bottomX - w / 2}
              y1={leftY + h}
              x2={bottomX + w / 2}
              y2={leftY + h}
            />
            <circle
              cx={xBase}
              cy={fullHeight - value * yUnit}
              fill={stroke}
              r={3}
            />
          </g>
        )
      }

      return renderList
    })

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
        svgScale={`0 20 ${fullHeight + 400} ${fullHeight}`}
      >
        <g transform='translate(200 0)'>
          { lineList.map(l => {
            const highlight = highLightLineList.includes(l)
            return (
              <g key={l}>
                <line
                  x1={0}
                  y1={fullHeight - l}
                  x2={fullHeight - 42}
                  y2={fullHeight - l}
                  stroke={highlight ? '#333' : '#eee'}
                  strokeWidth={1}
                />
                <text
                  className={`line-graph__label ${highlight ? 'line-graph__label--highlight' : ''}`}
                  x={fullHeight - 35}
                  y={fullHeight - l}
                  textAnchor='start'
                  dominantBaseline='middle'
                >
                  {l}
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
                y2={fullHeight}
                stroke='#ccc'
                strokeWidth={1}
                key={i}
              />
            )
          }) }
          { sortedData.map(([lineLabel, valueList], i) => {
            const stroke = calcHue({ i, total: lineCount })
            const firstPoint = fullHeight - (i * labelUnit) - 30

            function valToY({ index }) {
              return fullHeight - (valueList[index].v * yUnit)
            }

            const strokeDef = {
              stroke,
              strokeWidth: 1,
            }

            return (
              <g key={`s-${i}`}>
                <text
                  className='line-graph__label'
                  x={-105}
                  y={firstPoint - 5}
                  textAnchor='end'
                  dominantBaseline='top'
                >
                  {lineLabel}
                </text>
                <line
                  {...strokeDef}
                  x1={-100}
                  y1={firstPoint}
                  x2={0}
                  y2={valToY({ index: 0 })}
                />
                <line
                  {...strokeDef}
                  x1={-190}
                  y1={firstPoint}
                  x2={-100}
                  y2={firstPoint}
                />
                { valueList.map((vl, j) => {
                  const k = j + 1
                  const x = j * xUnit
                  const y = valToY({ index: j })
                  const show = j === currentHoveredLineId

                  return valueList[k] && (
                    <g key={`s-${j}`}>
                      <line
                        {...strokeDef}
                        x1={x}
                        y1={y}
                        x2={k * xUnit}
                        y2={valToY({ index: k })}
                      />
                    </g>
                  )
                }) }
              </g>
            )
          })}
          { xAxisRange.map((_, i) => {
            return (
              <rect
                className='line-graph__data-target'
                height={fullHeight}
                key={`r-${i}`}
                onMouseEnter={() => setCurrentHoveredLineId(i)}
                width={xUnit - 4}
                x={(i * xUnit - xUnit / 2) + 2}
                y={0}
              />
            )
          }) }
        </g>
        { labelList && labelList.map(label => (<g>{label}</g>)) }
      </SvgWrapper>
    </figure>
  )
}

LineGraph.propTypes = {
  ariaLabel: PropTypes.string,
  heading: PropTypes.string,
  xLabel: PropTypes.string,
  yLabel: PropTypes.string,
}

export default LineGraph
