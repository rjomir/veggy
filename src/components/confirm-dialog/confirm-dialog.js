import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { connect } from "react-redux";
import { modalConfirm } from '../../redux/actions/modal-actions'

const ConfirmationDialog = ({ modalState, onModalConfirm }) => {
    return (
        <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        maxWidth="xs"
        aria-labelledby="confirmation-dialog-title"
        open={ modalState }
      >
        <DialogTitle id="confirmation-dialog-title">Phone Ringtone</DialogTitle>
        <DialogActions>
          <Button onClick={ e => onModalConfirm(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={ e => onModalConfirm(true)} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    );
  }

  const mapStateToProps = state => ({
      modalState: state.modal
  })

  const mapDispatchToProps = {
    onModalConfirm: modalConfirm
  }

  export default connect(mapStateToProps, mapDispatchToProps)(ConfirmationDialog)