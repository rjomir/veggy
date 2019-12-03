import React from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { hideAddFavoriteTeamNotification } from '../../redux/actions/favorite-teams-actions'

const Snack = ({ notificationStatus, onHideAddFavoriteTeamNotification }) => {
  const handleClose = () => {
    onHideAddFavoriteTeamNotification(!notificationStatus)
  }

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      open={notificationStatus}
      autoHideDuration={1000}
      onClose={handleClose}
      ContentProps={{
        'aria-describedby': 'message-id',
      }}
      message={<span id="message-id">New Favorite Team added!</span>}
    />
  )
}

const mapStateToProps = (state) => ({
  notificationStatus: state.notifications,
})

const mapDispatchToProps = {
  onHideAddFavoriteTeamNotification: hideAddFavoriteTeamNotification,
}

Snack.propTypes = {
  notificationStatus: PropTypes.bool.isRequired,
  onHideAddFavoriteTeamNotification: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(Snack)
