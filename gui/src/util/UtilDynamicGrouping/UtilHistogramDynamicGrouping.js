import {
  filter,
  groupBy,
  keys,
  map,
  mergeAll,
  pick,
  pipe,
  pluck,
  reduce,
  toPairs,
} from 'ramda'

import { throwFnError } from 'util/UtilError/UtilError'


export function pathogenesisToGroupMapper({ dataFn } = {}) {
  throwFnError({
    caller: 'pathogenesisToGroupMapper',
    fn: dataFn,
    fnName: 'dataFn',
  })

  return function ([group, data]) {
    return [
      group,
      mergeAll(keys(data).map(pathogenesisStep => {
        const pathogenesisStepData = pluck(pathogenesisStep, data[pathogenesisStep])
        return ({
          [pathogenesisStep]: pathogenesisStepData?.length > 0
            ? [pathogenesisStepData?.length, dataFn({ pathogenesisStepData })]
            : [0, 0]
        })
      })),
    ]
  }
}


export function restrictDataPointsToGroupList({ currentGroupBy, maxGroupBy, pathoGenStep }) {
  return pipe(
    filter(dataPoint => {
      const dataPointVal = dataPoint[pathoGenStep]
      return (
        dataPointVal !== null
        &&
        dataPoint[currentGroupBy] !== null
        &&
        dataPointVal <= maxGroupBy
      )
    }),
    map(dataPoint => pick([currentGroupBy, pathoGenStep], dataPoint)),
  )
}


export function groupByPathogenStep({ currentGroupBy, groupList }) {
  return function(pathologicalEvent) {
    const val = pathologicalEvent[currentGroupBy]
    if (val || val === 0){
      return groupList.find(([min, max, builtGroupKey]) => (val > min || val === 0) && val <= max)[2]
    }
  }
}


export function groupPathologicalEventList({
  currentPathogenesisStepList,
  currentGroupBy,
  groupList,
  maxGroupBy,
}) {
  return pathologicalEventList => {
    return currentPathogenesisStepList.map(pathoGenStep => {

      const primedData = restrictDataPointsToGroupList({
        currentGroupBy,
        maxGroupBy,
        pathoGenStep
      })(pathologicalEventList)

      const pathoGenStepGrouped = {
        [pathoGenStep]: groupBy(
          groupByPathogenStep({
            currentGroupBy,
            groupList
          })
        )(primedData)
      }

      return pathoGenStepGrouped
    })
  }
}


export function reducePathogenStepListToGroupBy(acc, curr) {
  const currKey = keys(curr)[0]
  toPairs(curr[currKey]).map(([group, pathoGenStepList]) => acc[group][currKey] = pathoGenStepList)
  return acc
}


export function groupByProvidedGroupList({
  builtGroupList,
  currentGroupBy,
  currentPathogenesisStepList,
  groupList,
  maxGroupBy,
}) {
  return pipe(
    map(d => pick([currentGroupBy, ...currentPathogenesisStepList], d)),
    groupPathologicalEventList({
      currentGroupBy,
      currentPathogenesisStepList,
      groupList,
      maxGroupBy,
    }),
    reduce(reducePathogenStepListToGroupBy, builtGroupList),
    toPairs,
  )
}
