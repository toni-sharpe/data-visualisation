import i18next from 'util/i18next/i18next'
import React from 'react'

import HeadingAndTextPanel from 'components/HeadingAndTextPanel/HeadingAndTextPanel'
import SubPageWrapper from 'components/SubPageWrapper/SubPageWrapper'

const i18nBase = 'Background'

function Background({ data }) {
  return (
    <SubPageWrapper rowLayout={false}>
      <div className='column-layout space-children--wide-column-with-border'>
        <HeadingAndTextPanel
          heading={i18next.t(`${i18nBase}.heading1`)}
          text={<>
              <p>{i18next.t(`${i18nBase}.paragraph1`)}</p>
              <p>{i18next.t(`${i18nBase}.paragraph7`)}</p>
            </>
          }
        />
        <HeadingAndTextPanel
          heading={i18next.t(`${i18nBase}.heading2`)}
          text={i18next.t(`${i18nBase}.paragraph2`)}
        />
        <HeadingAndTextPanel
          heading={i18next.t(`${i18nBase}.heading3`)}
          text={i18next.t(`${i18nBase}.paragraph3`)}
        />
        <HeadingAndTextPanel
          heading={i18next.t(`${i18nBase}.heading4`)}
          text={i18next.t(`${i18nBase}.paragraph4`)}
        />
        <HeadingAndTextPanel
          heading={i18next.t(`${i18nBase}.heading5`)}
          text={i18next.t(`${i18nBase}.paragraph5`)}
        />
        <HeadingAndTextPanel
          heading={i18next.t(`${i18nBase}.heading6`)}
          text={i18next.t(`${i18nBase}.paragraph6`)}
        />
      </div>
    </SubPageWrapper>
  )
}

export default Background;
