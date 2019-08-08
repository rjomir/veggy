import React from 'react'
import PropTypes from 'prop-types';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from "@material-ui/core/IconButton";

import CartModal from "../cart-modal/CartModal";

const Header = ({ classes, ...otherProps }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
      <div style={{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: '50px',
        borderBottom: '1px solid #cccccc',
        paddingRight: '15px'
      }}>
        <IconButton aria-label="cart" color="primary" onClick={ handleClickOpen }>
          <Badge
            badgeContent={ Object.keys(otherProps.cartItems).length }
            color="primary"
          >
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <CartModal open={ open } onClose={ handleClose } cartItems={ otherProps.cartItems } />
      </div>
  )
};

Header.propTypes = {
  open: PropTypes.bool
};

export default Header
