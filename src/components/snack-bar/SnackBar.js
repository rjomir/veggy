import React from 'react'
import { connect } from 'react-redux'
import Snackbar from '@material-ui/core/Snackbar'

import { createStructuredSelector } from 'reselect'
import PropTypes from 'prop-types'
import { getHasNewNotification } from '../../redux/selectors/common-selector'

const Snack = ({ hasNewNotification }) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      key="bottom,center"
      open={hasNewNotification}
      message={<span id="message-id">New Product has been added</span>}
      ContentProps={{ 'aria-describedby': 'message-id' }}
      transitionDuration={1000}
    />
  )
}

/* const mapStateToProps = state => ({
  hasNewNotification: getHasNewNotification(state),
}) */

const mapStateToProps = createStructuredSelector({
  hasNewNotification: getHasNewNotification,
})

Snack.propTypes = {
  hasNewNotification: PropTypes.bool.isRequired,
}

export default connect(mapStateToProps)(Snack)
