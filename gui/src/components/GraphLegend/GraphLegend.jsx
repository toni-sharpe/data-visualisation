import PropTypes from 'prop-types'
import React from 'react'

import NumberOrStringPropType from 'prop-types/NumberOrString.prop-type'
import {
  GRAPH_LEGEND_LABEL_VALUE_SPACING,
  GRAPH_LEGEND_HEIGHT,
  GRAPH_LEGEND_STROKE_WIDTH,
  GRAPH_LEGEND_WIDTH,
} from 'util/Constant/BaseConstantList'

import './GraphLegend.scss'

function GraphLegend({
  h,
  i,
  label,
  labelValueSpacing,
  legendTopOffset,
  stroke,
  strokeWidth,
  value,
  w,
  x,
  xBase,
}) {
  const y = (h + strokeWidth) * i + legendTopOffset
  const yBase = y + (h / 2)
  const lineY = y + h + (strokeWidth / 2)

  return (
    <g key={`legend-${i}`}>
      <rect
        fill='#fff'
        height={h}
        width={w}
        x={x}
        y={y}
      />
      <line
        stroke={stroke}
        strokeWidth={strokeWidth}
        x1={x}
        y1={lineY}
        x2={x + w}
        y2={lineY}
      />
      { label && (
        <text
          className='graph-legend'
          dominantBaseline='middle'
          textAnchor={value ? 'end' : 'middle'}
          x={xBase - (value ? labelValueSpacing : 0)}
          y={yBase}
        >
          {label}
        </text>
      ) }
      { value && (
        <text
          className='graph-legend'
          dominantBaseline='middle'
          textAnchor={label ? 'start' : 'middle'}
          x={xBase + (label ? labelValueSpacing : 0)}
          y={yBase}
        >
          {value}
        </text>
      ) }
    </g>
  )
}

GraphLegend.defaultProps = {
  h: GRAPH_LEGEND_HEIGHT,
  labelValueSpacing: GRAPH_LEGEND_LABEL_VALUE_SPACING,
  legendTopOffset: 0,
  strokeWidth: GRAPH_LEGEND_STROKE_WIDTH,
  w: GRAPH_LEGEND_WIDTH,
}

GraphLegend.propTypes = {
  h: PropTypes.number,
  i: PropTypes.number,
  label: PropTypes.string,
  labelValueSpacing: PropTypes.number,
  legendTopOffset: PropTypes.number,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.number,
  value: NumberOrStringPropType,
  w: PropTypes.number,
  x: PropTypes.number,
  xBase: PropTypes.number,
  y: PropTypes.number,
  yBase: PropTypes.number,
}

export default GraphLegend
