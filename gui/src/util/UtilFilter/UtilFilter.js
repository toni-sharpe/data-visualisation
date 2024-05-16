import * as ramda from 'ramda'

import {
  removeDubiousFilter,
  severeFilter,
  iFilter,
  heoFilter,
} from './UtilIndividualFilterList'


export function calcFilterList({ currentFilterList }) {
  return [
    ramda.filter(removeDubiousFilter({ currentFilterList })),
    ramda.filter(severeFilter({ currentFilterList })),
    ramda.filter(iFilter({ currentFilterList })),
    ramda.filter(heoFilter({ currentFilterList })),
  ]
}


export function isAnyFilterSet({ currentFilterList }) {
  return ramda.toPairs(currentFilterList).filter(([_, b]) => b).length > 0
}


