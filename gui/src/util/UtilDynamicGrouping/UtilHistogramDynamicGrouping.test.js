import { reduce } from 'ramda'

import {
  currentPathogenesisStepList,
  currentGroupBy,
  maxGroupBy,
  groupList,
  builtGroupList,
  pathoGenList,
  groupedPathologicalEventList,
  groupedByCorrectGroupByKey,
  histogramRawData,
  histogramReadyData,
} from './UtilHistogramDynamicGrouping.example-data'

import {
  pathogenesisToGroupMapper,
  restrictDataPointsToGroupList,
  groupByPathogenStep,
  groupPathologicalEventList,
  reducePathogenStepListToGroupBy,
  groupByProvidedGroupList
} from './UtilHistogramDynamicGrouping'


/*
 * pathogenesisToGroupMapper()
 */
test('pathogenesisToGroupMapper() - throws error if a function is not provided', () => {
  const errorText = 'dataFn must be provided to pathogenesisToGroupMapper and must be a function'
  expect(() => pathogenesisToGroupMapper()).toThrow(errorText)
  expect(() => pathogenesisToGroupMapper({})).toThrow(errorText)
  expect(() => pathogenesisToGroupMapper({ dataFn: 'not a func' })).toThrow(errorText)
})

test('pathogenesisToGroupMapper - provides a mapper that applies our function and gives a count [count, result]', () => {
  const mapper = pathogenesisToGroupMapper({ dataFn: ({ pathogenesisStepData }) => pathogenesisStepData.reduce((acc, curr) => acc + curr, 0)})
  const testData =
  [['a', {
    x: [
      { x:  0, y: 4 },
      { x: 13, y: 3 },
      { x:  5, y: 5 },
      { x: 17, y: 4 },
      { x:  1, y: 1 }
    ]
  }],
  ['b', {
    y: [
      { x: 30, y: 0 },
      { x:  0, y: 0, z: 6 },
      { x:  0, y: 4, z: 1 },
    ]
  }]]
  expect(testData.map(mapper)).toEqual([['a', {x: [5, 36]}], ['b', {y: [3, 4]}]])
})


/*
 * restrictDataPointsToGroupList()
 */
test('restrictDataPointsToGroupList() - removes everything but groupBy, pathoGenStep and things in range', () => {
  const dataPrimer = restrictDataPointsToGroupList({
    currentGroupBy: 'different',
    maxGroupBy: 200,
    pathoGenStep: 'test',
  })
  expect(dataPrimer([{ test:  180, different:   null }])).toEqual([])
  expect(dataPrimer([{ test: null, different: 'test' }])).toEqual([])
  expect(dataPrimer([{ test:  210, different: 'test' }])).toEqual([])
  expect(dataPrimer([{ test:  180, different: 'test', another: 'thing' }])).toEqual([{ test: 180, different: 'test'}])
})


/*
 * groupByPathogenStep()
 */
test('groupByPathogenStep()', () => {
  const grouperFn = groupByPathogenStep({ currentGroupBy, groupList })
  expect(grouperFn({ test_1: 0 })).toEqual('0-10')
  expect(grouperFn({ test_1: 10 })).toEqual('0-10')
  expect(grouperFn({ test_1: 10.0001 })).toEqual('10-20')
  expect(grouperFn({ test_1: 20 })).toEqual('10-20')
})


/*
 * groupPathologicalEventList()
 */
test('groupPathologicalEventList()', () => {
  const pathoGenListGrouperFn = groupPathologicalEventList({
    currentPathogenesisStepList,
    currentGroupBy,
    groupList,
    maxGroupBy,
  })

  expect(pathoGenListGrouperFn(pathoGenList)).toEqual(groupedPathologicalEventList)
})


/*
 * reducePathogenStepListToGroupBy()
 */
test('reducePathogenStepListToGroupBy() reduces an array of different pathogen steps to group by groupList', () => {
  const result = reduce(reducePathogenStepListToGroupBy, builtGroupList)(groupedPathologicalEventList)
  expect(result).toEqual(groupedByCorrectGroupByKey)
})


/*
 * groupByProvidedGroupList()
 */
test('groupByProvidedGroupList() runs things in the right order and converts as needed', () => {
  expect(groupByProvidedGroupList({
    builtGroupList,
    currentGroupBy,
    currentPathogenesisStepList,
    groupList,
    maxGroupBy,
  })(histogramRawData)).toEqual(histogramReadyData)
})

