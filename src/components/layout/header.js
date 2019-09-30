import React from 'react'
import PropTypes from 'prop-types';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from "@material-ui/core/IconButton";
import {connect} from 'react-redux'
import CartModal from "../cart-modal/CartModal";
import { cartItemsSelector } from '../../redux/selectors/cart-modal-selectors'


const Header = ({ cartItems }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    if (cartItems.length === 0) return;

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
            badgeContent={ cartItems.length }
            color="primary"
          >
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <CartModal open={ open } onClose={ handleClose } cartItems={ cartItems } />
      </div>
  )
};

Header.propTypes = {
  open: PropTypes.bool
};

const mapStateToProps = state => ({
  cartItems: cartItemsSelector(state)
})

export default connect(mapStateToProps)(Header)
