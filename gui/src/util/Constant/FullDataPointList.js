import { concat } from 'ramda'

const TEST_POINTS = [
  ['test', { tone: 'neutral' }],
  ['chart', { tone: 'neutral' }],
]

const KEY_ORDER_MAP = [
  ['ms_1', { tone: 'notGood' }],
  ['ms_2', { tone: 'notGood' }],
  ['ps_1', { tone: 'bad' }],
  ['ps_2', { tone: 'bad' }],
  ['first_ps', { tone: 'bad' }],
  ['ps_3', { tone: 'bad' }],
  ['ss_1', { tone: 'good' }],
  ['ss_2', { tone: 'good' }],
  ['sr_1', { tone: 'veryBad' }],
  ['slight_sr_1', { tone: 'notGood' }],
  ['sr_2', { tone: 'veryBad' }],
  ['slight_sr_2', { tone: 'notGood' }],
]

const BASE_DURATION_MAP = [
  ['pathgen_dur', { tone: 'good' }],
  ['recovery_dur', { tone: 'good' }],
  ['pt_ev_dur', { tone: 'neutral' }],
]

const EXTRA_DURATION_MAP = [
  ['is_dur', { tone: 'good' }],
  ['ms_1_dur', { tone: 'notGood' }],
  ['ms_2_dur', { tone: 'notGood' }],
  ['ps_dur', { tone: 'bad' }],
  ['ps_1_dur', { tone: 'bad' }],
  ['ps_2_dur', { tone: 'bad' }],
  ['ps_3_dur', { tone: 'bad' }],
]

const DURATION_MAP = concat(BASE_DURATION_MAP, EXTRA_DURATION_MAP)

// ct_1
// ss_1
// ss_2
// first_ps
// cel
// ev_count
// path_sev
// sr_1
// recovery_dur
// ms_1
// ms_1_dur
// ms_2
// pathgen_dur
// op_rating
// ps_1
// ps_2
// ps_3
// ps_3_dur
// ps_dur
// ps_level
// slight_sr_1
// slight_sr_2
// ag_tim
// pt_ev_dur
// sr_2

export const SEVERITY_MEASUREMENT_MAP = [
  ['is_start', { tone: 'veryBad' }],
  ['ms_1_2', { tone: 'notGood' }],
  ['ct_1', { tone: 'bad' }],
  ['ag_tim', { tone: 'good' }],
  ['path_sev', { tone: 'neutral' }],
  ['cel', { tone: 'neutral' }],
  ['op_rating', { tone: 'neutral' }],
  ['ev_count', { tone: 'neutral' }],
  ['ps_level', { tone: 'neutral' }],
  ['recovery_prop', { tone: 'neutral' }],
  ['ps_prop', { tone: 'neutral' }],
]

const USER_FACING_SET = concat(
  KEY_ORDER_MAP,
  SEVERITY_MEASUREMENT_MAP,
)

export const FULL_DATA_POINT_LIST = concat(
  concat(USER_FACING_SET, DURATION_MAP),
  TEST_POINTS,
)

export { KEY_ORDER_MAP, DURATION_MAP }

export const GENERAL_RESPONSE_MAP = concat(KEY_ORDER_MAP, BASE_DURATION_MAP)

export default USER_FACING_SET
