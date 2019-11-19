import React from "react";
import {Typography} from "@material-ui/core";
import PropTypes from "prop-types";
import {productList} from "./reducers";
import ButtonBase from '@material-ui/core/ButtonBase';

const style = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: 10,
  marginBottom: 10
}

const numberLabelStyle = {
  margin: "0px 10px 0px 10px"
}

const iconStyle = {
  height: 25,
  width: 25
}

const PageSelector = (props) => {
  const page = props.page
  const callback = props.callback

  function changePage(delta){
    callback(delta)
  }

  return (
    <div
    style={style}>
      <ButtonBase
      onClick={() => changePage(-1)}>
        <img
          alt={"left arrow"}
          style={iconStyle}
          src={"left-arrow.svg"}/>
      </ButtonBase>
      <Typography
      style={numberLabelStyle}>
        {page}
      </Typography>
      <ButtonBase
      onClick={() => changePage(1)}>
        <img
          alt={"right arrow"}
          style={iconStyle}
          src={"right-arrow.svg"}/>
      </ButtonBase>
    </div>
  )
}

productList.propTypes = {
  page: PropTypes.number,
  callback: PropTypes.func
}

export default PageSelector