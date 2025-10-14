import PropTypes from 'prop-types'

import CDPropType from 'prop-types/CD.prop-type'
import OutcomePropType from 'prop-types/Outcome.prop-type'
import OutcomeTypePropType from 'prop-types/OutcomeType.prop-type'

export default PropTypes.arrayOf(
  PropTypes.shape({
    condr: CDPropType,
    op_rating: PropTypes.number,
    path_sev: PropTypes.number,
    cel: PropTypes.number,
    outcome_type: OutcomeTypePropType ,
    outcome: OutcomePropType,
  })
)
