import APIHistogramMakerData from 'example-data/APIHistogramMaker.example-data'

import { calcHistogramBarGroupList } from './HistogramMakerDataFunctions'

test('calcHistogramBarGroupList()', () => {
  const result = calcHistogramBarGroupList({
    currentBarFn: 'count',
    currentGroupBy: 'ps_1',
    currentPathogenesisStepList: ['ps_2', 'ps_3'],
    data: APIHistogramMakerData,
  })
  expect(result).toEqual([
    [  '0-8', {}],
    [ '8-16', {
      ps_2: [ 8,  8],
      ps_3: [ 5,  5],
    }],
    ['16-24', {
      ps_2: [11, 11],
      ps_3: [14, 14],
    }],
    ['24-32', {
      ps_2: [ 3,  3],
      ps_3: [ 4,  4],
    }],
    ['32-40', {
      ps_2: [ 1,  1],
      ps_3: [ 1,  1],
    }],
    ['40-48', {}],
    ['48-56', {
      ps_2: [ 1,  1],
    }]
  ])
})

test('calcHistogramBarGroupList() with bad fn', () => {
  expect(() => calcHistogramBarGroupList({
    currentBarFn: 'bad',
    currentGroupBy: 'ps_1',
    currentPathogenesisStepList: ['ps_2', 'ps_3'],
    data: APIHistogramMakerData,
  })).toThrow('dataFn must be provided to pathogenesisToGroupMapper and must be a function')
})

test('calcHistogramBarGroupList() with missing group by', () => {
  expect(() => calcHistogramBarGroupList({
    currentBarFn: 'count',
    currentGroupBy: undefined,
    currentPathogenesisStepList: ['ps_2', 'ps_3'],
    data: APIHistogramMakerData,
  })).toThrow('calcHistogramBarGroupList must have a string groupBy')
})

test('calcHistogramBarGroupList() with missing pathogenesis step list', () => {
  expect(() => calcHistogramBarGroupList({
    currentBarFn: 'count',
    currentGroupBy: 'ps_1',
    currentPathogenesisStepList: undefined,
    data: APIHistogramMakerData,
  })).toThrow('calcHistogramBarGroupList must have an array of at least one pathogenesis steps')
})

test('calcHistogramBarGroupList() with empty pathogenesis step list', () => {
  expect(() => calcHistogramBarGroupList({
    currentBarFn: 'count',
    currentGroupBy: 'ps_1',
    currentPathogenesisStepList: [],
    data: APIHistogramMakerData,
  })).toThrow('calcHistogramBarGroupList must have an array of at least one pathogenesis steps')
})