// DragGraph.story.js
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'

import severityCircleMapper from 'util/UtilPointData/severityCircleMapper'
import DragGraph from './DragGraph';

export default {
  component: DragGraph,
};

const divWrapper = { boxShadow: '0 0 100px 0 #000', height: '690px', width: '540px' }

const baseDragGraphProps = {
  dragGraphZoomList: [1, 2, 3, 4],
  graphKey: 'dragGraphStoryBook',
  heading: 'Graph Heading',
  includeExtreme: false,
  labelValList: [
    ['a', { cel:  13, length: 5 , nonSevere:  3, severe:  2 }],
    ['b', { cel: 101, length: 17, nonSevere:  6, severe: 11 }],
    ['c', { cel:  87, length: 7 , nonSevere:  6, severe:  1 }],
    ['d', { cel:  53, length: 23, nonSevere: 13, severe: 10 }],
    ['e', { cel:  54, length: 27, nonSevere: 13, severe: 14 }],
    ['f', { cel:  56, length: 23, nonSevere:  7, severe: 16 }],
    ['g', { cel:  87, length: 41, nonSevere: 27, severe: 14 }],
    ['h', { cel: 123, length: 11, nonSevere:  8, severe:  3 }],
    ['i', { cel:  87, length: 19, nonSevere: 18, severe:  1 }],
  ],
  pointDataMapper: severityCircleMapper,
  z: 1,
}

export const Primary = {
  render: () => {
    return (
      <div style={{...divWrapper}}>
        <DragGraph {...baseDragGraphProps} />
      </div>
    )
  }
};

export const DifferentZoom = {
  render: () => {
    const props = {
      ...baseDragGraphProps,
      dragGraphZoomList: [0.5, 1],
    }

    return (
      <div style={{...divWrapper}}>
        <DragGraph {...props} />
      </div>
    )
  }
};

export const IncludeExtremeAsDefault = {
  render: () => {
    const props = {
      ...baseDragGraphProps,
      includeExtreme: true,
    }

    return (
      <div style={{...divWrapper}}>
        <DragGraph {...props} />
      </div>
    )
  }
};

export const ScaleDifference = {
  render: () => {
    const props = {
      ...baseDragGraphProps,
      scale: 400,
      scaleR: 200,
    }

    return (
      <div style={{...divWrapper}}>
        <DragGraph {...props} />
      </div>
    )
  }
};

export const LabelPositioningUsingScale = {
  render: () => {
    const props = {
      ...baseDragGraphProps,
      scaleToLabelRatio: 3,
    }

    return (
      <div style={{...divWrapper}}>
        <DragGraph {...props} />
      </div>
    )
  }
};

export const HideExtremeButtonAndZoomLabelForSmallSpaces = {
  render: () => {
    const props = {
      ...baseDragGraphProps,
      showExtremeButton: false,
      showZoomLabel: false,
    }

    return (
      <div style={{...divWrapper}}>
        <DragGraph {...props} />
      </div>
    )
  }
};

export const TwoPoints = {
  render: () => {
    const props = {
      ...baseDragGraphProps,
      includeExtreme: true,
      labelValList: [
        ['a', { cel:  13, length: 7 , nonSevere:  3, severe:  4 }],
        ['b', { cel:  15, length: 13, nonSevere:  3, severe: 10 }],
      ]
    }
    return (
      <div style={{...divWrapper}}>
        <DragGraph {...props} />
      </div>
    )
  }
};

export const ThreePoints = {
  render: () => {
    const props = {
      ...baseDragGraphProps,
      includeExtreme: true,
      labelValList: [
        ['a', { cel:  23, length: 7 , nonSevere:  2, severe:  5 }],
        ['b', { cel:  24, length: 13, nonSevere:  1, severe: 12 }],
        ['c', { cel:  27, length: 9 , nonSevere:  3, severe:  6 }],
      ],
    }
    return (
      <div style={{...divWrapper}}>
        <DragGraph {...props} />
      </div>
    )
  }
};

export const FourPoints = {
  render: () => {
    const props = {
      ...baseDragGraphProps,
      includeExtreme: true,
      labelValList: [
        ['a', { cel:  45, length: 7 , nonSevere:  3, severe:  4 }],
        ['b', { cel:  23, length: 13, nonSevere: 11, severe:  2 }],
        ['c', { cel:  78, length: 3 , nonSevere:  3, severe:  0 }],
        ['d', { cel:  44, length: 5 , nonSevere:  3, severe:  2 }],
      ],
    }
    return (
      <div style={{...divWrapper}}>
        <DragGraph {...props} />
      </div>
    )
  }
};

export const FivePoints = {
  render: () => {
    const props = {
      ...baseDragGraphProps,
      includeExtreme: true,
      labelValList: [
        ['a', { cel:  12, length: 19, nonSevere:  3, severe: 13 }],
        ['b', { cel:  14, length: 23, nonSevere: 17, severe:  6 }],
        ['c', { cel:  16, length: 41, nonSevere: 33, severe:  8 }],
        ['d', { cel:  98, length: 31, nonSevere: 23, severe:  8 }],
        ['e', { cel: 102, length: 29, nonSevere: 23, severe:  6 }]
      ],
    }
    return (
      <div style={{...divWrapper}}>
        <DragGraph {...props} />
      </div>
    )
  }
};

export const LotsOfPoints = {
  render: () => {
    const props = {
      ...baseDragGraphProps,
      includeExtreme: true,
      labelValList: [
        ['a', { cel:  12, length: 19, nonSevere: 16, severe:  3 }],
        ['b', { cel:  19, length: 23, nonSevere: 20, severe:  3 }],
        ['c', { cel:  14, length: 41, nonSevere: 40, severe:  1 }],
        ['d', { cel:  23, length: 31, nonSevere: 11, severe: 10 }],
        ['e', { cel:  16, length: 29, nonSevere: 10, severe: 19 }],
        ['f', { cel:  41, length:  5, nonSevere:  3, severe:  2 }],
        ['g', { cel:  98, length: 17, nonSevere: 12, severe:  5 }],
        ['h', { cel:  31, length:  7, nonSevere:  3, severe:  4 }],
        ['i', { cel: 102, length: 23, nonSevere: 15, severe:  8 }],
        ['j', { cel:  29, length: 27, nonSevere: 15, severe: 12 }],
        ['k', { cel:  41, length: 23, nonSevere: 15, severe:  8 }],
        ['l', { cel:  31, length: 41, nonSevere: 34, severe:  7 }],
        ['m', { cel:  29, length: 11, nonSevere:  7, severe:  4 }],
        ['n', { cel:  39, length: 19, nonSevere:  7, severe: 12 }],
        ['o', { cel:  51, length: 11, nonSevere:  8, severe:  3 }],
        ['p', { cel:  33, length: 39, nonSevere: 30, severe:  9 }],
        ['q', { cel:  27, length: 51, nonSevere: 45, severe:  6 }],
        ['r', { cel:  43, length:  7, nonSevere:  4, severe:  3 }],
        ['s', { cel: 101, length:  7, nonSevere:  2, severe:  5 }],
        ['t', { cel: 103, length: 33, nonSevere: 20, severe: 13 }],
        ['u', { cel:  11, length: 27, nonSevere:  7, severe: 20 }],
        ['v', { cel:  19, length: 43, nonSevere: 29, severe: 14 }],
      ],
    }
    return (
      <div style={{...divWrapper}}>
        <DragGraph {...props} />
      </div>
    )
  }
};

export const BigRange = {
  render: () => {
    const props = {
      ...baseDragGraphProps,
      includeExtreme: true,
      labelValList: [
        ['a', { cel:   1, length: 19,   nonSevere:  3, severe: 10 }],
        ['b', { cel:   1, length: 1001, nonSevere:  3, severe: 10 }],
        ['c', { cel:   1, length: 1,    nonSevere:  3, severe: 10 }],
        ['d', { cel:   1, length: 517,  nonSevere:  3, severe: 10 }],
        ['e', { cel:   1, length: 307,  nonSevere:  3, severe: 10 }],
        ['f', { cel:   1, length: 219,  nonSevere:  3, severe: 10 }],
        ['g', { cel:   1, length: 137,  nonSevere:  3, severe: 10 }],
        ['h', { cel:   1, length: 998,  nonSevere:  3, severe: 10 }],
      ],
    }
    return (
      <div style={{...divWrapper}}>
        <DragGraph {...props} />
      </div>
    )
  }
};

export const NoData = {
  render: () => {
    const props = {
      ...baseDragGraphProps,
      labelValList: undefined,
    }
    return (
      <DragGraph {...props} />
    )
  }
};

export const NotAnArray = {
  render: () => {
    const props = {
      ...baseDragGraphProps,
      labelValList: 1,
    }
    return (
      <DragGraph {...props} />
    )
  }
};

export const NotEnoughData = {
  render: () => {
    const props = {
      ...baseDragGraphProps,
      labelValList: [1],
    }
    return (
      <DragGraph {...props} />
    )
  }
};

export const LayersOfPoints = {
  render: () => {
    const props = {
      ...baseDragGraphProps,
      includeExtreme: true,
      useDepth: true,
      scale: 1200,
      scaleR: 600,
      labelValList:
        [
          ['34a',    { cel:  34, length: 19, nonSevere: 16, severe:  3 }],
          ['19b',    { cel:  19, length: 11, nonSevere: 20, severe:  3 }],
          ['14c',    { cel:  14, length: 12, nonSevere: 40, severe:  1 }],
          ['23d',    { cel:  23, length: 51, nonSevere: 11, severe: 10 }],
          ['16e',    { cel:  16, length: 29, nonSevere: 10, severe: 19 }],
          ['41f',    { cel:  41, length:  5, nonSevere:  3, severe:  2 }],
          ['98g',    { cel:  98, length: 17, nonSevere: 12, severe:  5 }],
          ['31h',    { cel:  31, length:  7, nonSevere:  3, severe:  4 }],
          ['102i',   { cel: 102, length: 23, nonSevere: 15, severe:  8 }],
          ['29j',    { cel:  29, length: 27, nonSevere: 11, severe: 12 }],
          ['41k',    { cel:  41, length: 23, nonSevere: 15, severe:  8 }],
          ['31l',    { cel:  31, length: 41, nonSevere: 40, severe:  7 }],
          ['29m',    { cel:  29, length: 11, nonSevere:  7, severe:  4 }],
          ['39n',    { cel:  39, length: 19, nonSevere:  7, severe: 12 }],
          ['51o',    { cel:  51, length: 11, nonSevere:  8, severe:  3 }],
          ['33p',    { cel:  33, length: 39, nonSevere: 30, severe:  9 }],
          ['12aa',   { cel:  12, length: 19, nonSevere: 16, severe:  3 }],
          ['19bb',   { cel:  19, length: 23, nonSevere: 20, severe:  3 }],
          ['14cc',   { cel:  14, length: 41, nonSevere: 40, severe:  1 }],
          ['29dd',   { cel:  29, length: 31, nonSevere: 11, severe: 10 }],
          ['16ee',   { cel:  16, length: 29, nonSevere: 10, severe: 19 }],
          ['41ff',   { cel:  41, length:  5, nonSevere:  3, severe:  2 }],
          ['98gg',   { cel:  98, length: 17, nonSevere: 12, severe:  5 }],
          ['31hh',   { cel:  31, length:  7, nonSevere:  3, severe:  4 }],
          ['102ii',  { cel: 102, length: 23, nonSevere: 15, severe:  8 }],
          ['29jj',   { cel:  29, length: 27, nonSevere: 15, severe: 12 }],
          ['41kk',   { cel:  41, length: 23, nonSevere: 15, severe:  8 }],
          ['31ll',   { cel:  31, length: 41, nonSevere: 34, severe:  7 }],
          ['29mm',   { cel:  29, length: 11, nonSevere:  7, severe:  4 }],
          ['39nn',   { cel:  39, length: 19, nonSevere:  7, severe: 98 }],
          ['51oo',   { cel:  51, length: 11, nonSevere:  8, severe: 11 }],
          ['33pp',   { cel:  33, length: 39, nonSevere: 30, severe:  9 }],
          ['23aaa',  { cel:  23, length: 19, nonSevere: 16, severe:  3 }],
          ['20bbb',  { cel:  20, length: 23, nonSevere: 20, severe:  3 }],
          ['14ccc',  { cel:  14, length: 41, nonSevere: 40, severe:  1 }],
          ['10ddd',  { cel:  10, length: 31, nonSevere: 11, severe: 10 }],
          ['16eee',  { cel:  16, length: 29, nonSevere: 10, severe: 19 }],
          ['41fff',  { cel:  41, length:  5, nonSevere:  3, severe:  2 }],
          ['98ggg',  { cel:  98, length: 17, nonSevere: 12, severe:  5 }],
          ['31hhh',  { cel:  31, length:  7, nonSevere:  3, severe:  4 }],
          ['102iii', { cel: 102, length: 23, nonSevere: 15, severe:  8 }],
          ['29jjj',  { cel:  29, length: 27, nonSevere: 15, severe: 12 }],
          ['41kkk',  { cel:  41, length: 23, nonSevere: 15, severe:  8 }],
          ['31lll',  { cel:  31, length: 41, nonSevere: 34, severe:  7 }],
          ['29mmm',  { cel:  29, length: 16, nonSevere:  7, severe:  4 }],
          ['39nnn',  { cel:  39, length: 19, nonSevere:  7, severe: 12 }],
          ['51ooo',  { cel:  51, length: 11, nonSevere:  8, severe:  3 }],
          ['33ppp',  { cel:  33, length: 39, nonSevere: 30, severe:  9 }],
          ['12aaa4', { cel:  12, length: 29, nonSevere: 16, severe:  3 }],
          ['19bbb4', { cel:  19, length: 23, nonSevere: 20, severe:  3 }],
          ['14ccc4', { cel:  14, length: 41, nonSevere: 40, severe:  1 }],
          ['23ddd4', { cel:  23, length: 31, nonSevere: 11, severe: 10 }],
          ['16eee4', { cel:  16, length: 29, nonSevere: 10, severe: 19 }],
          ['3fff4',  { cel:   3, length:  5, nonSevere:  3, severe:  2 }],
          ['98ggg4', { cel:  98, length: 17, nonSevere: 12, severe:  5 }],
          ['31lll4', { cel:  31, length: 41, nonSevere: 34, severe:  7 }],
          ['237aa',  { cel:  23, length: 19, nonSevere: 16, severe:  3 }],
          ['197',    { cel:  19, length: 11, nonSevere: 20, severe:  3 }],
          ['11mmm4', { cel:  11, length: 51, nonSevere:  7, severe:  4 }],
          ['417k',   { cel:  41, length: 23, nonSevere: 15, severe:  8 }],
          ['33ppp4', { cel:  33, length: 39, nonSevere: 30, severe:  9 }],
          ['167e',   { cel:  16, length: 29, nonSevere: 10, severe: 19 }],
          ['237',    { cel:  23, length: 51, nonSevere: 11, severe: 10 }],
          ['517o',   { cel:  51, length: 11, nonSevere:  8, severe: 11 }],
          ['417f',   { cel:  41, length:  5, nonSevere:  3, severe:  2 }],
          ['297j',   { cel:  29, length: 27, nonSevere: 15, severe: 12 }],
          ['317l',   { cel:  31, length: 41, nonSevere: 34, severe:  7 }],
          ['29iii4', { cel:  29, length: 23, nonSevere: 15, severe:  8 }],
          ['397n',   { cel:  39, length: 19, nonSevere:  7, severe: 98 }],
          ['337p',   { cel:  33, length: 39, nonSevere: 30, severe:  9 }],
          ['987g',   { cel:  98, length: 17, nonSevere: 12, severe:  5 }],
          ['39nnn4', { cel:  39, length: 19, nonSevere:  7, severe: 12 }],
          ['147',    { cel:  14, length: 12, nonSevere: 40, severe:  1 }],
          ['41kkk4', { cel:  41, length: 23, nonSevere: 15, severe:  8 }],
          ['29jjj4', { cel:  29, length: 27, nonSevere: 15, severe: 12 }],
          ['417',    { cel:  41, length:  5, nonSevere:  3, severe:  2 }],
          ['167',    { cel:  16, length: 29, nonSevere: 10, severe: 19 }],
          ['317h',   { cel:  31, length:  7, nonSevere:  3, severe:  4 }],
          ['31hhh4', { cel:  31, length:  7, nonSevere:  3, severe:  4 }],
          ['1027i',  { cel: 102, length: 23, nonSevere: 15, severe:  8 }],
          ['51ooo4', { cel:  51, length: 11, nonSevere:  8, severe:  3 }],
          ['297m',   { cel:  29, length: 11, nonSevere:  7, severe:  4 }],
          ['297d',   { cel:  29, length: 31, nonSevere: 11, severe: 10 }],
          ['147c',   { cel:  14, length: 41, nonSevere: 40, severe:  1 }],
          ['197b',   { cel:  19, length: 23, nonSevere: 20, severe:  3 }],
          ['127a',   { cel:  12, length: 19, nonSevere: 16, severe:  3 }],
          ['337',    { cel:  33, length: 39, nonSevere: 30, severe:  9 }],
          ['517',    { cel:  51, length: 11, nonSevere:  8, severe:  3 }],
          ['397',    { cel:  39, length: 19, nonSevere:  7, severe: 12 }],
          ['297',    { cel:  29, length: 11, nonSevere:  7, severe:  4 }],
          ['317',    { cel:  31, length: 41, nonSevere: 40, severe:  7 }],
          ['417',    { cel:  41, length: 23, nonSevere: 15, severe:  8 }],
          ['297',    { cel:  29, length: 27, nonSevere: 11, severe: 12 }],
          ['1027',   { cel: 102, length: 23, nonSevere: 15, severe:  8 }],
          ['317',    { cel:  31, length:  7, nonSevere:  3, severe:  4 }],
          ['987',    { cel:  98, length: 17, nonSevere: 12, severe:  5 }],
          ['207bb',  { cel:  20, length: 23, nonSevere: 20, severe:  3 }],
          ['147cc',  { cel:  14, length: 41, nonSevere: 40, severe:  1 }],
          ['107dd',  { cel:  10, length: 31, nonSevere: 11, severe: 10 }],
          ['167ee',  { cel:  16, length: 29, nonSevere: 10, severe: 19 }],
          ['417ff',  { cel:  41, length:  5, nonSevere:  3, severe:  2 }],
          ['987gg',  { cel:  98, length: 17, nonSevere: 12, severe:  5 }],
          ['317hh',  { cel:  31, length:  7, nonSevere:  3, severe:  4 }],
          ['1027ii', { cel: 102, length: 23, nonSevere: 15, severe:  8 }],
          ['297jj',  { cel:  29, length: 27, nonSevere: 15, severe: 12 }],
          ['417kk',  { cel:  41, length: 23, nonSevere: 15, severe:  8 }],
          ['317ll',  { cel:  31, length: 41, nonSevere: 34, severe:  7 }],
          ['297mm',  { cel:  29, length: 16, nonSevere:  7, severe:  4 }],
          ['397nn',  { cel:  39, length: 19, nonSevere:  7, severe: 12 }],
          ['517oo',  { cel:  51, length: 11, nonSevere:  8, severe:  3 }],
          ['337pp',  { cel:  33, length: 39, nonSevere: 30, severe:  9 }],
          ['127aa4', { cel:  12, length: 29, nonSevere: 16, severe:  3 }],
          ['197bb4', { cel:  19, length: 23, nonSevere: 20, severe:  3 }],
          ['147cc4', { cel:  14, length: 41, nonSevere: 40, severe:  1 }],
          ['237dd4', { cel:  23, length: 31, nonSevere: 11, severe: 10 }],
          ['167ee4', { cel:  16, length: 29, nonSevere: 10, severe: 19 }],
          ['37ff4',  { cel:   3, length:  5, nonSevere:  3, severe:  2 }],
          ['987gg4', { cel:  98, length: 17, nonSevere: 12, severe:  5 }],
          ['317hh4', { cel:  31, length:  7, nonSevere:  3, severe:  4 }],
          ['297ii4', { cel:  29, length: 23, nonSevere: 15, severe:  8 }],
          ['297jj4', { cel:  29, length: 27, nonSevere: 15, severe: 12 }],
          ['417kk4', { cel:  41, length: 23, nonSevere: 15, severe:  8 }],
          ['317ll4', { cel:  31, length: 41, nonSevere: 34, severe:  7 }],
          ['117mm4', { cel:  11, length: 51, nonSevere:  7, severe:  4 }],
          ['397nn4', { cel:  39, length: 19, nonSevere:  7, severe: 12 }],
          ['517oo4', { cel:  51, length: 11, nonSevere:  8, severe:  3 }],
          ['337pp4', { cel:  33, length: 39, nonSevere: 30, severe:  9 }],
        ]
      }
    return (
      <div style={{...{ boxShadow: '0 0 100px 0 #000', height: '1200px', width: '1200px' }}}>
        <DragGraph {...props} />
      </div>
    )
  }
};

