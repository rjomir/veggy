import React from "react"
import { Typography } from "@material-ui/core"
import PropTypes from 'prop-types';
import PriceTag from "./priceTag";

const style = {
    margin: "10px 0 10px 10px",
}

const InfoBox = (props) => {
    const title = props.title
    const subtitle = props.subtitle
    const description_headline = props.description_headline
    const price = props.price

    return(
        <div style={style}>
            <Typography
            style={{
                fontSize: 20
            }}>
                {subtitle}
            </Typography>
            <Typography 
            style={{
                fontSize: 26
            }}>
                {title}
            </Typography>
            <Typography
            style={{
                width: 400
            }}>
                {description_headline}
            </Typography>
            <br/>
            <PriceTag
            price={price}/>
        </div>
    )
}

InfoBox.prototype = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    description_headline: PropTypes.string,
    price: PropTypes.number
}

export default InfoBox