import PropTypes from 'prop-types'

import { ROOT_MENU_SLUGS } from 'util/Constant/BaseConstantList'

const CurrentUrlPropType = PropTypes.oneOf([...ROOT_MENU_SLUGS, 'Home']).isRequired

export default CurrentUrlPropType
