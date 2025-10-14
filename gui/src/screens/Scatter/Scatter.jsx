import i18next from 'util/i18next/i18next'
import React, { useState } from 'react'

import AxisSelector from 'sections/AxisSelector/AxisSelector'
import PageDetailWrapper from 'components/PageDetailWrapper/PageDetailWrapper'
import ScatterChart from 'sections/ScatterChart/ScatterChart'
import ScatterDataPropType from 'prop-types/ScatterData.prop-type'
// import ScatterStatisticOutput from 'components/ScatterStatisticOutput/ScatterStatisticOutput'
// import calcKeyPairXy from 'util/UtilKeyPairXY/UtilKeyPairXY'
import { SCATTER_DEFAULT_X_Y } from 'util/Constant/BaseConstantList'

import './Scatter.scss'

const i18nBase = 'Scatter'

function Scatter({
  data,
  setGanttTogglelList,
  ganttToggleList,
}) {
  const [x, setX] = useState(SCATTER_DEFAULT_X_Y.x)
  const [y, setY] = useState(SCATTER_DEFAULT_X_Y.y)

  return (
    <PageDetailWrapper
      count={data?.length}
      i18nBase={i18nBase}
    >
      <div className='column-layout space-children--column-wide'>
        <div className='row-layout space-children'>
          <AxisSelector
            axis='y'
            currentAxisSelection={y}
            primaryMark={SCATTER_DEFAULT_X_Y.y}
            setCurrentAxisSelection={setY}
          />
          <div className='scatter__chart-wrapper'>
            <ScatterChart
              ariaLabel={i18next.t(`${i18nBase}.interactiveChart`)}
              keyPair={{ x: y, y: x }}
              scatterData={data}
              showStatData={false}
            />
          </div>
          <AxisSelector
            align='right'
            axis='x'
            currentAxisSelection={x}
            primaryMark={SCATTER_DEFAULT_X_Y.x}
            setCurrentAxisSelection={setX}
          />
        </div>
      </div>
    </PageDetailWrapper>
  );
}

Scatter.propTypes = {
  data: ScatterDataPropType
}


        // <ScatterStatisticOutput
        //   pointList={pointList}
        //   setGanttTogglelList={setGanttTogglelList}
        //   ganttToggleList={ganttToggleList}
        //   xKey={x}
        //   yKey={y}
        // />

export default Scatter;
