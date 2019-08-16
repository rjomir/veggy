import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from "@material-ui/core/DialogTitle";

import CartItem from "../cart-item/cartItem";

function CartModal(props) {
  const {onClose, cartProducts = [], open} = props;

  const handleClose = () => onClose();

  const total = cartProducts.reduce((sum, {price}) => sum + price, 0);

  return (
      <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
        <DialogTitle id="simple-dialog-title">Cart</DialogTitle>
        <div
          style={{
            padding: '0 24px 16px 24px'
          }}
        >
          <div style={{
            borderTop: '1px solid #ccc',
            borderBottom: '1px solid #ccc'
          }}>
            {
              cartProducts
                ? cartProducts.map((product, i) => {
                  return <CartItem key={i + 1} cartItem={product} />
                })
                : null
            }
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            marginTop: '5px'
          }}>
            Total:&nbsp;<b>{total} Lei</b>
          </div>
        </div>
      </Dialog>
  );
}

CartModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  cartProducts: PropTypes.array
};

export default CartModal;
