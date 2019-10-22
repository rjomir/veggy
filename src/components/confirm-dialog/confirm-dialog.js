import React from 'react'
import Button from '@material-ui/core/Button'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogActions from '@material-ui/core/DialogActions'
import Dialog from '@material-ui/core/Dialog'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { modalConfirm } from '../../redux/actions/modal-actions'

const ConfirmationDialog = ({ modalState, onModalConfirm }) => {
  return (
    <Dialog
      disableBackdropClick
      disableEscapeKeyDown
      maxWidth="xs"
      aria-labelledby="confirmation-dialog-title"
      open={modalState}
    >
      <DialogTitle id="confirmation-dialog-title">Phone Ringtone</DialogTitle>
      <DialogActions>
        <Button onClick={() => onModalConfirm(false)} color="primary">
          {'Cancel'}
        </Button>
        <Button onClick={() => onModalConfirm(true)} color="primary">
          {'Ok'}
        </Button>
      </DialogActions>
    </Dialog>
  )
}

const mapStateToProps = state => ({
  modalState: state.modal,
})

const mapDispatchToProps = {
  onModalConfirm: modalConfirm,
}

ConfirmationDialog.propTypes = {
  modalState: PropTypes.instanceOf(PropTypes.object).isRequired,
  onModalConfirm: PropTypes.func.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ConfirmationDialog)
