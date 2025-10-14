import i18next from 'util/i18next/i18next'
import { type } from 'ramda'
import React, { useState } from 'react'

import Button from 'components/Button/Button'
import DragGraph from 'sections/DragGraph/DragGraph'
import BlockGraph from 'sections/BlockGraph/BlockGraph'
import severityCircleMapper from 'util/UtilPointData/severityCircleMapper'

import './GraphSet.scss'

function GraphSet({
  graphKey,
  labelValList,
}) {
  const [graphTab, setGraphTab] = useState('drag')

  const heading = i18next.t(`GraphSet.${type(graphKey) === 'Array' ? 'boolean_set' : graphKey}`)

  return (
    <div className='graph-set__wrapper'>
      <ol className='graph-set__tab-list'>
        <li>
          <Button
            ariaLabel={`tab to select drag graph for ${heading}`}
            label='Drag'
            onClick={() => setGraphTab('drag')}
            isSelected={graphTab === 'drag'}
           />
        </li>
        <li>
          <Button
            ariaLabel={`tab to select block graph for ${heading}`}
            label='Block'
            onClick={() => setGraphTab('block')}
            isSelected={graphTab === 'block'}
           />
        </li>
      </ol>
      { graphTab === 'drag' && (
        <DragGraph
          graphKey={graphKey}
          heading={heading}
          key={graphKey}
          labelValList={labelValList}
          pointDataMapper={severityCircleMapper}
        />
      ) }
      { graphTab === 'block' && (
        <BlockGraph
          labelValList={labelValList}
          heading={heading}
        />
      ) }
    </div>
  )
}

export default GraphSet
