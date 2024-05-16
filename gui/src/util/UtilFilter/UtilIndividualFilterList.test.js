import { ORDERED_FILTERS } from 'util/Constant/BaseConstantList'

import {
  removeDubiousFilter,
  severeFilter,
  iFilter,
  pathologicalEventDurationFilter,
  heoFilter,
  hardPrimeSymptomFilter,
  primeSymptomFilter,
  secondOrMore,
  thirdOrMore,
} from './UtilIndividualFilterList'


/*
 * Set up
 */
function filterOn({ fn, key }) {
  return fn({ currentFilterList: { [key]: true }})
}

const removeDubiousFilterMapper = removeDubiousFilter({
  currentFilterList: ORDERED_FILTERS
})
const severeFilterMapper = severeFilter({
  currentFilterList: ORDERED_FILTERS
})
const iFilterMapper = iFilter({
  currentFilterList: ORDERED_FILTERS
})
const heoFilterMapper = heoFilter({
  currentFilterList: ORDERED_FILTERS
})


/*
 * removeDubiousFilter()
 */
test('removeDubiousFilter()', () => {
  const filterFn = filterOn({ fn: removeDubiousFilter, key: 'rmDubious' })
  expect(filterFn({ outlier: 'DUB' })).toEqual(false)
})


/*
 * severeFilter()
 */
test('severeFilter() - when off does nothing', () => {
  expect(severeFilterMapper({})).toEqual(true)
})

test('severeFilter()', () => {
  const severeFilterFn = filterOn({ fn: severeFilter, key: 'severe' })
  expect(severeFilterFn({ outcome: 'SEV' })).toEqual(true)
  expect(severeFilterFn({ outcome: 'NSV' })).toEqual(false)
  const nonSevereFilterFn = filterOn({ fn: severeFilter, key: 'nonSevere' })
  expect(nonSevereFilterFn({ outcome: 'SEV' })).toEqual(false)
  expect(nonSevereFilterFn({ outcome: 'NSV' })).toEqual(true)
})


/*
 * iFilter()
 */
test('iFilter() - when off does nothing', () => {
  expect(iFilterMapper({})).toEqual(true)
})

test('iFilter()', () => {
  const filterFn = filterOn({ fn: iFilter, key: 'fjp' })
  expect(filterFn({ condr: 'i' })).toEqual(true)
  expect(filterFn({ condr: 'WRONG' })).toEqual(false)
})


/*
 * heoFilter()
 */
const baseArgsAllNull = {
  ss_1: null,
  ss_2: null,
  first_ps: null,
  ps_1: null,
  ps_2: null,
  ps_3: null,
  ms_1_dur: null,
}
test('heoFilter() - when off does nothing', () => {
  expect(heoFilterMapper({})).toEqual(true)
})

test('heoFilter() - when everything indicates a softer event returns false', () => {
  const filterFn = filterOn({ fn: heoFilter, key: 'heo' })
  expect(filterFn(baseArgsAllNull)).toEqual(false)
})

test('heoFilter() - with any prime or severe symptom returns true', () => {
  const filterFn = filterOn({ fn: heoFilter, key: 'heo' })
  // Severe symptom 1
  const argsSevereSymptom1 = {
    ...baseArgsAllNull,
    ss_1: 19,
  }
  expect(filterFn(argsSevereSymptom1)).toEqual(true)

  // Severe symptom 2
  const argsSevereSymptom2 = {
    ...baseArgsAllNull,
    ss_2: 23,
  }
  expect(filterFn(argsSevereSymptom2)).toEqual(true)

  // First prime symptom
  const argsPrimeSymptom = {
    ...baseArgsAllNull,
    first_ps: 29,
  }
  expect(filterFn(argsPrimeSymptom)).toEqual(true)

  // Prime symptom 1
  const argsPrimeSymptom1 = {
    ...baseArgsAllNull,
    ps_1: 31,
  }
  expect(filterFn(argsPrimeSymptom1)).toEqual(true)

  // Prime symptom 2
  const argsPrimeSymptom2 = {
    ...baseArgsAllNull,
    ps_2: 37,
  }
  expect(filterFn(argsPrimeSymptom2)).toEqual(true)

  // Prime symptom 3
  const argsPrimeSymptom3 = {
    ...baseArgsAllNull,
    ps_3: 41,
  }
  expect(filterFn(argsPrimeSymptom3)).toEqual(true)
})

test('heoFilter() - with just a mild symptom duration of null returns false', () => {
  const filterFn = filterOn({ fn: heoFilter, key: 'heo' })
  expect(filterFn(baseArgsAllNull)).toEqual(false)
})

test('heoFilter() - with just a mild symptom duration of <=15 returns false', () => {
  const filterFn = filterOn({ fn: heoFilter, key: 'heo' })
  const argsShortMildSymptomDuration = {
    ...baseArgsAllNull,
    ms_1_dur: 15,
  }
  expect(filterFn(argsShortMildSymptomDuration)).toEqual(false)
})

test('heoFilter() - with just a mild symptom duration of >15 returns true', () => {
  const filterFn = filterOn({ fn: heoFilter, key: 'heo' })
  const argsLongEnoughMildSymptomDuration = {
    ...baseArgsAllNull,
    ms_1_dur: 16,
  }
  expect(filterFn(argsLongEnoughMildSymptomDuration)).toEqual(true)
})
