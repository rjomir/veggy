import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Menu, Typography} from "@material-ui/core";
import ButtonBase from '@material-ui/core/ButtonBase';
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from "prop-types";
import {selectCurrency} from "./reducers";

const style = {
  width: 75,
  height: 50,
  marginRight: 10,
  color: "white"
}

const imgStyle = {
  width: 10,
  height: 10,
  marginLeft: 5
}

const CurrencySelect = (props) => {
  const options = props
  const [anchorEl, setAnchorEl] = useState(null)
  const currency = useSelector(state => state.currency)
  const dispatch = useDispatch()

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = (option) => {
    setAnchorEl(null);
    if (option !== null){
      dispatch(selectCurrency(option))
    }
  }

  return(
    <div>
      <ButtonBase
        style={style}
        onClick={handleClick}>
        <Typography>
          {currency}
        </Typography>
        <img
          style={imgStyle}
          alt="arrow down"
          src="/arrowDown.svg"/>
      </ButtonBase>
      <Menu
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={() => handleClose(null)}
        keepMounted
      >
        {
          options.options.map( (option) => (
            <MenuItem
              key={option}
              onClick={() => handleClose(option)}
            >
              {option}
            </MenuItem>
          ))
        }
        </Menu>
    </div>
  )
}

CurrencySelect.propTypes = {
  options: PropTypes.array.isRequired,
}

export default CurrencySelect