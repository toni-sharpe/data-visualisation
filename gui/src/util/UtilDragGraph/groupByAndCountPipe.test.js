import { groupByAndCountPipe } from './UtilDragGraphGrouping'

const groupByAndCountPipeFn = groupByAndCountPipe({ k: 'testKey' })

test('groupByAndCountPipe() drops any empty string groups', () => {
  const result = groupByAndCountPipeFn([
    { testKey: 'a', data: 1, op_rating:  9, outcome: 'NSV' },
    { testKey: 'a', data: 2, op_rating:  5, outcome: 'NSV' },
    { testKey: 'b', data: 3, op_rating: 11, outcome: 'SEV' },
    { testKey: '',  data: 4, op_rating: 13, outcome: 'SEV' },
  ])
  expect(result).toEqual([[
    'a', {
      cel: 7,
      dcb: 0,
      dcbPerc: 0,
      length: 2,
      nonSevere: 2,
      nonSeverePerc: 100,
      rgb: [
        0,
        100,
        125,
      ],
      severe: 0,
      severePerc: 0,
    }
  ], [
    'b', {
      cel: 11,
      dcb: 0,
      dcbPerc: 0,
      length: 1,
      nonSevere: 0,
      nonSeverePerc: 0,
      rgb: [
        0,
        250,
        0,
      ],
      severe: 1,
      severePerc: 100,
    }
  ]])
})

test('groupByAndCountPipe() drops any null groups', () => {
  const result = groupByAndCountPipeFn([
    { testKey:  'a', data: 1, op_rating:     9, outcome: 'NSV' },
    { testKey: null, data: 2, op_rating:     5, outcome: 'NSV' },
    { testKey: null, data: 3, op_rating:    11, outcome: 'NSV' },
    { testKey:  'a', data: 4, op_rating:  null, outcome: 'NSV' },
    { testKey:  'c', data: 5, op_rating:     5, outcome: 'NSV' },
    { testKey:  'c', data: 6, op_rating:    11, outcome: 'NSV' },
    { testKey:  'c', data: 7, op_rating:    13, outcome: 'SEV' },
  ])
  expect(result).toEqual([[
    'a', {
      cel: 4.5,
      dcb: 0,
      dcbPerc: 0,
      length: 2,
      nonSevere: 2,
      nonSeverePerc: 100,
      rgb: [
        0,
        100,
        125,
      ],
      severe: 0,
      severePerc: 0,
    }
  ], [
    'c', {
      cel: 9.66667,
      dcb: 0,
      dcbPerc: 0,
      length: 3,
      nonSevere: 2,
      nonSeverePerc: 67,
      rgb: [
        0,
        149.5,
        83.75,
      ],
      severe: 1,
      severePerc: 33,
    }
  ]])
})

test('groupByAndCountPipe() counts all groups when keys are present', () => {
  const result = groupByAndCountPipeFn([
    { testKey: 'a', data:  1, op_rating:   100, outcome: 'NSV'  },
    { testKey: 'd', data:  2, op_rating:    51, outcome: 'NSV'  },
    { testKey: 'd', data:  3, op_rating:    53, outcome: 'NSV'  },
    { testKey: 'b', data:  4, op_rating:     9, outcome: 'NSV'  },
    { testKey: 'd', data:  5, op_rating:     5, outcome: 'SEV'  },
    { testKey: 'c', data:  6, op_rating:    11, outcome: 'NSV'  },
    { testKey: 'c', data:  7, op_rating:    19, outcome: 'NSV'  },
    { testKey: 'c', data:  8, op_rating:    23, outcome: 'NSV'  },
    { testKey: 'c', data:  9, op_rating:    31, outcome: 'NSV'  },
    { testKey: 'f', data: 10, op_rating:    37, outcome: 'NSV'   },
  ])
  // note they are added as found, so d is second
  expect(result).toEqual([[
    'a', {
      cel: 100,
      dcb: 0,
      dcbPerc: 0,
      length: 1,
      nonSevere: 1,
      nonSeverePerc: 100,
      rgb: [
        0,
        100,
        125,
      ],
      severe: 0,
      severePerc: 0,
    }
  ], [
    'd', {
      cel: 36.3333,
      dcb: 0,
      dcbPerc: 0,
      length: 3,
      nonSevere: 2,
      nonSeverePerc: 67,
      rgb: [
        0,
        149.5,
        83.75,
      ],
      severe: 1,
      severePerc: 33,
    }
  ], [
    'b', {
      cel: 9,
      dcb: 0,
      dcbPerc: 0,
      length: 1,
      nonSevere: 1,
      nonSeverePerc: 100,
      rgb: [
        0,
        100,
        125,
      ],
      severe: 0,
      severePerc: 0,
    }
  ], [
    'c', {
      cel: 21,
      dcb: 0,
      dcbPerc: 0,
      length: 4,
      nonSevere: 4,
      nonSeverePerc: 100,
      rgb: [
        0,
        100,
        125,
      ],
      severe: 0,
      severePerc: 0,
    }
  ], [
    'f', {
      cel: 37,
      dcb: 0,
      dcbPerc: 0,
      length: 1,
      nonSevere: 1,
      nonSeverePerc: 100,
      rgb: [
        0,
        100,
        125,
      ],
      severe: 0,
      severePerc: 0,
    }]
  ])
})
