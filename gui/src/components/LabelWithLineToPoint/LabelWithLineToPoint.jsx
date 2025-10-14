import PropTypes from 'prop-types'
import React from 'react'

import NumberOrStringPropType from 'prop-types/NumberOrString.prop-type'
import SvgXyPropType from 'prop-types/SvgXy.prop-type'
import {
  GRAPH_LEGEND_LABEL_VALUE_SPACING,
  GRAPH_LEGEND_HEIGHT,
  GRAPH_LEGEND_STROKE_WIDTH,
  GRAPH_LEGEND_WIDTH,
} from 'util/Constant/BaseConstantList'

import './LabelWithLineToPoint.scss'

function LabelWithLineToPoint({
  label,
  labelLineStart,
  labelWidth,
  linePivot,
  stroke,
  strokeWidth,
  targetPoint,
}) {
  const strokeDef = {
    stroke,
    strokeWidth,
  }

  return (
    <g key={label}>
      <text
        className='label-with-line-to-point'
        x={linePivot.x - 5}
        y={labelLineStart.y - 5}
        textAnchor='end'
        dominantBaseline='top'
      >
        {label}
      </text>
      <line
        {...strokeDef}
        x1={labelLineStart.x}
        y1={labelLineStart.y}
        x2={linePivot.x}
        y2={linePivot.y}
      />
      <line
        {...strokeDef}
        strokeOpacity={0.5}
        x1={linePivot.x}
        y1={linePivot.y}
        x2={targetPoint.x}
        y2={targetPoint.y}
      />
    </g>
)
}

LabelWithLineToPoint.defaultProps = {
  strokeWidth: 1,
  stroke: '#eee',
}

LabelWithLineToPoint.propTypes = {
  label: NumberOrStringPropType,
  labelLineStart: SvgXyPropType,
  labelWidth: PropTypes.number,
  linePivot: SvgXyPropType,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.number,
  targetPoint: SvgXyPropType,
}

export default LabelWithLineToPoint
