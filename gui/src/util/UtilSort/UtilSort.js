import { type } from 'ramda'

import { throwError } from 'util/UtilError/UtilError'

export function sortFn(a, b) {
  return a > b
    ? -1
    : a < b
      ? 1
      : 0
}

export function sortByKey({ k } = {}) {
  throwError({
    check: type(k) === 'String',
    i18nKey: 'sortKeyError',
  })

  return (a, b) => {
    if (a[k] > b[k]) {
      return -1
    }
    if (a[k] < b[k]) {
      return 1
    }
    return 0
  }
}
