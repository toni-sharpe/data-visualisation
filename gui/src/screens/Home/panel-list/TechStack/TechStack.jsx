import i18next from 'util/i18next/i18next'
import React from 'react'
import { range } from 'ramda'

import { TECH_STACK_COUNT } from 'util/Constant/BaseConstantList'
import HeadingAndTextPanel from 'components/HeadingAndTextPanel/HeadingAndTextPanel'
import SubPageWrapper from 'components/SubPageWrapper/SubPageWrapper'

const i18nBase = 'TechStack'

function TechStack() {
  return (
    <SubPageWrapper heading={i18next.t('Home.techStackPanelLabel')}>
      <HeadingAndTextPanel
        text={(
          <>
            <p>{i18next.t(`${i18nBase}.paragraph6`)}</p>
            <ul className='home__tech-stack-list space-children--column'>
              { range(1, TECH_STACK_COUNT + 1).map(i => {
                return (
                  <li key={i}>
                    <b>
                      {i18next.t(`${i18nBase}.techStack__${i}__Label`)}
                    </b>
                    {i18next.t(`${i18nBase}.techStack__${i}`)}
                  </li>)
              }) }
            </ul>
          </>
        )}
      />
    </SubPageWrapper>
  )
}

export default TechStack;
