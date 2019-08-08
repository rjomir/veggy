import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from "@material-ui/core/DialogTitle";

function CartModal(props) {
  const { onClose, cartItems, open } = props;

  const handleClose = () => onClose();

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">Cart</DialogTitle>
      <div
        style={{
          padding: '0 24px 16px 24px'
        }}
      >
        {
          Object.keys(cartItems).map((key, i) => (
            <div key={ i + 1 }>custom cart item component here - { i + 1 }</div>
          ))
        }
      </div>
    </Dialog>
  );
}

CartModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  cartItems: PropTypes.object
};

export default CartModal;
