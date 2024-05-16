export function removeDubiousFilter({ currentFilterList }) {
  return ({ outlier }) => {
    if (!currentFilterList.rmDubious) return true
    return outlier !== 'DUB'
  }
}

export function severeFilter({ currentFilterList }) {
  return ({ outcome }) => {
    if (!currentFilterList.severe && !currentFilterList.nonSevere) { return true }
    if (currentFilterList.severe && outcome === 'SEV') { return true }
    if (currentFilterList.nonSevere && outcome === 'NSV') { return true }
    return false
  }
}

export function iFilter({ currentFilterList }) {
  return ({ condr }) => {
    if (!currentFilterList.fjp) return true
    return condr === 'i'
  }
}

export function heoFilter({ currentFilterList }) {
  return ({
    ss_1,
    ss_2,
    first_ps,
    ms_1_2,
    ms_2,
    ps_1,
    ps_2,
    ps_3,
    ms_1_dur,
  }) => {
    if (!currentFilterList?.heo) return true
    if (
      !ss_1
      &&
      !ss_2
      &&
      !first_ps
      &&
      !ps_1
      &&
      !ps_2
      &&
      !ps_3
      &&
      (
        ms_1_dur <= 15
        ||
        !ms_1_dur
      )
    ) return false

    return true
  }
}
