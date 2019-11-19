import React from "react"
import { Grid, ButtonBase } from "@material-ui/core"
import PropTypes from 'prop-types';

const divStyle = {
    width: 50,
    height: 50,
    marginBottom: 10,
}

const imageStyle = {
    resizeMode: "cover",
    width: 50,
    height: 50
}

const ImageCell = (props) => {
    const image = props.image
    const callback = props.callback

    function didClickImage(image){
        callback(image)
    }

    return(
        <Grid
        style={divStyle}
        >
            <ButtonBase
            onClick={() => didClickImage(image)}
            >
            <img
            style={imageStyle}
            alt={"product image"}
            src={image}
            />
            </ButtonBase>
        </Grid>
    )
}

ImageCell.prototype = {
    image: PropTypes.string,
    callback: PropTypes.func
}

export default ImageCell