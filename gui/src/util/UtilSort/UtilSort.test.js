import { sortFn, sortByKey } from './UtilSort'

/*
 * sortFn()
 */
test('sortFn() returns -1 if A is greater than B', () => {
  expect(sortFn(1, 0)).toEqual(-1)
})
test('sortFn() returns 1 if B is less than A', () => {
  expect(sortFn(0, 1)).toEqual(1)
})
test('sortFn() returns 0 if B is equal to A', () => {
  expect(sortFn(0, 0)).toEqual(0)
})

/*
 * sortByKey()
 */
test('sortByKey() throws error if k is not provided', () => {
  expect(() => sortByKey({})).toThrow('sortByKey function must have a string as a key')
})
test('sortByKey() throws error if k is number (avoid floats)', () => {
  expect(() => sortByKey({ k: 9 })).toThrow('sortByKey function must have a string as a key')
})
test('sortByKey() throws error if k is not a string', () => {
  expect(() => sortByKey({ k: [9] })).toThrow('sortByKey function must have a string as a key')
})
test('sortByKey() returns -1 if A is greater than B when using the k', () => {
  expect(sortByKey({ k: 'testKey' })({ testKey: 1 }, { testKey: 0 })).toEqual(-1)
})
test('sortFn() returns 1 if B is less than A when using the k', () => {
  expect(sortByKey({ k: 'testKey' })({ testKey: 0 }, { testKey: 1 })).toEqual(1)
})
test('sortFn() returns 0 if B is equal to A when using the k', () => {
  expect(sortByKey({ k: 'testKey' })({ testKey: 0 }, { testKey: 0 })).toEqual(0)
})
