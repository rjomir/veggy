import React from 'react';
import ButtonBase from '@material-ui/core/ButtonBase';
import {Typography} from "@material-ui/core";
import {selectCategory} from "./reducers";
import {useDispatch, useSelector} from "react-redux";
import PropTypes from 'prop-types';

const buttonStyle = {
  width: 100,
  height: 50,
  color: "white",
  margin: "0px 10px 0px 10px"
}

const selectedButtonStyle = {
  width: 100,
  height: 50,
  backgroundColor: "white",
  margin: "0px 10px 0px 10px"
}

const BarButton = (props) => {
  const selectedCategory = useSelector(state => state.category)
  const dispatch = useDispatch()

  return(
    <ButtonBase
    style={props.value === selectedCategory? selectedButtonStyle : buttonStyle}
    onClick={() => dispatch(selectCategory(props.value))}>
    <Typography>
      {props.value}
    </Typography>
  </ButtonBase>)
}

BarButton.propTypes = {
  value: PropTypes.string,
}

export default BarButton