import React from 'react'

import PageDetailWrapper from 'components/PageDetailWrapper/PageDetailWrapper'
import { groupByAndCountPipe } from 'util/UtilDragGraph/UtilDragGraphGrouping'
import GraphSet from 'sections/GraphSet/GraphSet'

import './SVG.scss'

const i18nBase = 'SVG'

function SVG({ data }) {
  if (!data || data.length === 0) { return null; }

  const graphKeyList = [
    'ce_4',
    'outcome_type',
    'etiology',
    'ct_1',
    'ce_1',
    'ct_2',
    'ps_level',
    'poc',
    'condr',
    'src_hm',
    'outlier',
    'ct_3', [
      'ct_4',
      'ct_5',
      'ce_2',
      'ce_3',
      'ct_6',
      'ct_7',
    ]
  ]

  return (
    <PageDetailWrapper
      i18nBase={i18nBase}
    >
      <div className='svg__graph-list'>
        { graphKeyList.map((graphKey, i) => {
          const labelValList = groupByAndCountPipe({ k: graphKey })(data)
          return (
            <GraphSet
              graphKey={graphKey}
              key={graphKey}
              labelValList={labelValList}
            />
          )
        }) }
      </div>
    </PageDetailWrapper>
  );
}

export default SVG;
