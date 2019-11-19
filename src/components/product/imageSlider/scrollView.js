import React from "react"
import { Grid } from "@material-ui/core"
import PropTypes from 'prop-types';
import ImageCell from "./imageCell";

const style = {
    width: 75,
    height: 500,
    position: "absolute",
    top: 75,
    left: 20,
    overflow: "scroll"
}

const ScrollView = (props) => {
    const imageArray = props.imageArray
    const changeImage = props.changeImage

    function callback(image){
        changeImage(image)
    }

    return (
        <Grid 
        style={style}
        container
        direction="row"
        justify="center"
        alignItems="center"
        >
            {
                imageArray.map(image => (
                    <ImageCell
                    callback={callback}
                    key={image}
                    image={image.href}
                    />
                )) 
            }
        </Grid>
    )
}

ScrollView.prototype = {
    imageArray: PropTypes.array,
    changeImage: PropTypes.func
}

export default ScrollView