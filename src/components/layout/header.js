import React, { useContext } from 'react'
import PropTypes from 'prop-types';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from "@material-ui/core/IconButton";

import CartModal from "../cart-modal/CartModal";
import AppContext from "../AppContext";

const Header = () => {
  const [open, setOpen] = React.useState(false);
  const appState = useContext(AppContext);
  const { products } = appState;

  const cartProducts = products
    ? products.filter(p => p.quantity && p.quantity !== 0)
    : [];

  const handleClickOpen = () => {
    if (cartProducts.length === 0) return;

    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
      <div style={{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: '50px',
        borderBottom: '1px solid #cccccc',
        paddingRight: '15px',
        marginBottom: '15px'
      }}>
        <IconButton aria-label="cart" color="primary" onClick={ handleClickOpen } href="#">
          <Badge
            badgeContent={ cartProducts.length }
            color="primary"
          >
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <CartModal open={ open } onClose={ handleClose } cartProducts={ cartProducts } />
      </div>
  )
};

Header.propTypes = {
  open: PropTypes.bool
};

export default Header
