import { filter, groupBy, map, pipe, prop, toPairs, type } from 'ramda'

import { numberPrecision } from 'util/Util/Util'

export function groupByAndCountPipe({ k }) {
  return pipe(
    groupBy(
      type(k) === 'Array'
        ? ({
          ct_4,
          ct_5,
          ce_2,
          ce_3,
          ct_6,
          ct_7,
        }) => {
          const ct4 = ct_4 ? '31.' : ''
          const ct5 = ct_5 ? '29.' : ''
          const ct2 = ce_2 ? '23.' : ''
          const ct3 = ce_3 ? '19.' : ''
          const ct6 = ct_6 ? '17.' : ''
          const ct7 = ct_7 ? '13.' : ''

          return `${ct4}${ct5}${ct2}${ct3}${ct6}${ct7}`
        }
        : prop(k)
    ),
    toPairs,
    filter(([v, _]) => !['', 'null', 'UNK'].includes(v)),
    map(([v, list]) => {
      const length = list.length

      const cel = numberPrecision({
        n: list.reduce((acc, {
            op_rating,
          }) => acc + op_rating,
          0
        ) / length
      })

      const dcb = list.filter(({ first_ps }) => !!first_ps).length
      const nonSevere = list.filter(({ outcome }) => outcome === 'NSV').length
      const severe = list.filter(({ outcome }) => outcome === 'SEV').length

      const dcbPerc = Math.round(dcb / length * 100)
      const nonSeverePerc = Math.round(nonSevere / length * 100)
      const severePerc = Math.round(severe / length * 100)

      const rgb = [
          0,
        100 + severePerc * 1.5,
          0 + nonSeverePerc * 1.25 - dcbPerc * 0.5,
      ]

      return [
        v, {
          cel,
          dcb,
          dcbPerc,
          rgb,
          length,
          nonSevere,
          nonSeverePerc,
          severe,
          severePerc,
        }
      ]
    }),
  )
}
