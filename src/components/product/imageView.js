import React from "react"
import PropTypes from 'prop-types';
import ScrollView from "./imageSlider/scrollView";

const style = {
    width: "100%",
    height: 613,
    backgroundColor: "#ECEFF1",
    objectFit: "cover",
    margin: "10px 0px 10px 0px"
}

const ImageView = (props) => {
    const image = props.image
    const imageArray = props.imageArray
    const [selectedImage, setSelectedImage] = React.useState(null)

    function changeImage(image){
        setSelectedImage(image)
    }

    return(
        <div style={{
            width: "75%",
            position: "relative"
            }}>
            <img
            alt={"product image"}
            src={selectedImage === null ? image : selectedImage}
            style={style}
            />
            <ScrollView
            imageArray={imageArray}
            changeImage={changeImage}
            />
        </div>
    )
}

ImageView.prototype = {
    image: PropTypes.string.isRequired,
    imageArray: PropTypes.array.isRequired
}

export default ImageView