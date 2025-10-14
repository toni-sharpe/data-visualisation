export const UserChoiceGroupedExampleData = [
  [10, [
    { ms_2: 10, ps_1: 14 },
    { ms_2: 10, ps_1: 21 },
    { ms_2: 10, ps_1: null },
    { ms_2: 10, ps_1: 31 },
  ]],
  ['10-19', [
    { ms_2: 11, ps_1: 14 },
    { ms_2: 11, ps_1: null },
    { ms_2: 12, ps_1: 20 },
    { ms_2: 13, ps_1: 11 },
    { ms_2: 13, ps_1: 22 },
    { ms_2: 13, ps_1: 19 },
    { ms_2: 13, ps_1: null },
    { ms_2: 14, ps_1: null },
    { ms_2: 14, ps_1: 43 },
    { ms_2: 14, ps_1: 16 },
    { ms_2: 14, ps_1: 20 },
    { ms_2: 14, ps_1: null },
    { ms_2: 16, ps_1: 22 },
    { ms_2: 16, ps_1: null },
    { ms_2: 16, ps_1: 36 },
    { ms_2: 16, ps_1: 14 },
    { ms_2: 16, ps_1: null },
    { ms_2: 16, ps_1: null },
    { ms_2: 18, ps_1: null },
    { ms_2: 18, ps_1: null },
    { ms_2: 18, ps_1: 16 },
    { ms_2: 18, ps_1: 19 },
    { ms_2: 18, ps_1: 39 },
    { ms_2: 19, ps_1: 20 },
    { ms_2: 19, ps_1: null },
    { ms_2: 20, ps_1: null },
    { ms_2: 22, ps_1: null },
    { ms_2: 22, ps_1: 20 },
    { ms_2: 28, ps_1: 15 },
    { ms_2: 32, ps_1: null },
    { ms_2: 36, ps_1: 31 },
    { ms_2: 36, ps_1: 21 },
    { ms_2: 54, ps_1: 20 },
  ]],
  ['20-29', [
    { ms_2: 20, ps_1: null },
    { ms_2: 22, ps_1: null },
    { ms_2: 22, ps_1: 20 },
    { ms_2: 28, ps_1: 15 },
  ]],
  ['30-39', [
    { ms_2: 32, ps_1: null },
    { ms_2: 36, ps_1: 31 },
    { ms_2: 36, ps_1: 21 },
  ]],
  ['50-59', [
    { ms_2: 54, ps_1: 20 },
  ]]
]

export const UserChoiceGroupingListAfterStatMapping = [{
  10: {
    count: 3,
    label: 'MS 2 [@10]',
    max: 31,
    mda: 7,
    mean: 22,
    median: 21,
    min: 14,
    quantile: [14, 14, 14, 21, 21, 21, 31, 31, 31],
    skewness: 0.51947,
    std: 6.97615,
    tone: null
  },
},
{
  '10-19': {
    count: 20,
    label: 'MS 2 [@10-19]',
    max: 43,
    mda: 3,
    mean: 21.9,
    median: 20,
    min: 11,
    quantile: [14, 15.5, 17.5, 19.5, 20, 20, 21.5, 26.5, 37.5],
    skewness: 1.34978,
    std: 8.41368,
    tone: null
  },
},
{
  '20-29': {
    count: 2,
    label: 'MS 2 [@20-29]',
    max: 20,
    mda: 2.5,
    mean: 17.5,
    median: 17.5,
    min: 15,
    quantile: [15, 15, 15, 15, 17.5, 20, 20, 20, 20],
    skewness: 0,
    std: 2.5,
    tone: null
  },
},
{
  '30-39': {
    count: 2,
    label: 'MS 2 [@30-39]',
    max: 31,
    mda: 5,
    mean: 26,
    median: 26,
    min: 21,
    quantile: [21, 21, 21, 21, 26, 31, 31, 31, 31],
    skewness: 0,
    std: 5,
    tone: null
  },
},
{
  '50-59': {
    count: 1,
    label: 'MS 2 [@50-59]',
    max: 20,
    mda: 0,
    mean: 20,
    median: 20,
    min: 20,
    quantile: [20, 20, 20, 20, 20, 20, 20, 20, 20],
    skewness: 0,
    std: 0,
    tone: null
  },
}]

export const InteractiveGanttExampleData = [{
  10: {
    count: 3,
    label: '10',
    max: 31,
    mda: 7,
    mean: 22,
    median: 21,
    min: 14,
    quantile: [14, 14, 14, 21, 21, 21, 31, 31, 31],
    skewness: 0.5194,
    std: 6.97615,
    tone: null
  },
  label: '10 3'
},
{
  '1019': {
    count: 15,
    label: '10-19',
    max: 43,
    mda: 4,
    mean: 22.066666666666666,
    median: 20,
    min: 11,
    quantile: [14, 16, 16, 19, 20, 20, 22, 36, 39],
    skewness: 1.3054,
    std: 9.2265,
    tone: null
  },
  label: '10-19 15'
},
{
  '2029': {
    count: 2,
    label: '20-29',
    max: 20,
    mda: 2.5,
    mean: 17.5,
    median: 17.5,
    min: 15,
    quantile: [15, 15, 15, 15, 17.5, 20, 20, 20, 20],
    skewness: 0,
    std: 2.5,
    tone: null
  },
  label: '20-29 2'
},
{
  '3039': {
    count: 2,
    label: '30-39',
    max: 31,
    mda: 5,
    mean: 26,
    median: 26,
    min: 21,
    quantile: [21, 21, 21, 21, 26, 31, 31, 31, 31],
    skewness: 0,
    std: 5,
    tone: null
  },
  label: '30-39 2'
},
{
  '5059': {
    count: 1,
    label: '50-59',
    max: 20,
    mda: 0,
    mean: 20,
    median: 20,
    min: 20,
    quantile: [20, 20, 20, 20, 20, 20, 20, 20, 20],
    skewness: 0,
    std: 0,
    tone: null
  },
  label: '50-59 1'
}]

export const InteractiveGanttFullyProcessedExampleData = [{
  10: {
    count: 3,
    label: 'MS 2 [@10]',
    max: 31,
    mda: 7,
    mean: 22,
    median: 21,
    min: 14,
    quantile: [14, 14, 14, 21, 21, 21, 31, 31, 31],
    skewness: 0.51947,
    std: 6.97615,
    tone: null
  },
},
{
  '10-19': {
    count: 15,
    label: 'MS 2 [@10-19]',
    max: 43,
    mda: 4,
    mean: 22.0667,
    median: 20,
    min: 11,
    quantile: [14, 16, 16, 19, 20, 20, 22, 36, 39],
    skewness: 1.30546,
    std: 9.22653,
    tone: null
  },
},
{
  '20-29': {
    count: 2,
    label: 'MS 2 [@20-29]',
    max: 20,
    mda: 2.5,
    mean: 17.5,
    median: 17.5,
    min: 15,
    quantile: [15, 15, 15, 15, 17.5, 20, 20, 20, 20],
    skewness: 0,
    std: 2.5,
    tone: null
  },
},
{
  '30-39': {
    count: 2,
    label: 'MS 2 [@30-39]',
    max: 31,
    mda: 5,
    mean: 26,
    median: 26,
    min: 21,
    quantile: [21, 21, 21, 21, 26, 31, 31, 31, 31],
    skewness: 0,
    std: 5,
    tone: null
  },
},
{
  '50-59': {
    count: 1,
    label: 'MS 2 [@50-59]',
    max: 20,
    mda: 0,
    mean: 20,
    median: 20,
    min: 20,
    quantile: [20, 20, 20, 20, 20, 20, 20, 20, 20],
    skewness: 0,
    std: 0,
    tone: null
  },
}]
