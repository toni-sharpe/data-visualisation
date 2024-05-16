// WorldMap.story.js
import { useEffect, useState } from 'react'

import baseApiCall from 'api-calls/BaseApiCall'
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'

import WorldMap from './WorldMap';

export default {
  component: WorldMap,
};

const data = await baseApiCall({
  endPoint: 'WorldMap',
  setData: null,
})

export const RegularPage = {
  render: () => {
    return (
      <WorldMap data={data} />
    )
  }
};
