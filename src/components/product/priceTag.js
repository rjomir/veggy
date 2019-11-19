import React from "react"
import { Typography } from "@material-ui/core"
import {useSelector} from "react-redux";
import PropTypes from 'prop-types';

const labelStyle = {
    fontSize: 15
}

const PriceTag = (props) => {
    const currency = useSelector(state => state.currency)
    const price = props.price
    let sign = "$"
    let multuplier = 1

    switch(currency){
        case "EUR":{
            sign = "€"
            multuplier = 0.9
            break
        }
        case "MDL":{
            sign = "MDL "
            multuplier = 17.4
            break
        }
        default: {
            sign = "$"
            multuplier = 1
            break
        }
    }
    
    return(
        <Typography
        style={labelStyle}>
            {sign}{(price * multuplier).toFixed(2)}
        </Typography>
    )
}

PriceTag.prototype = {
    price: PropTypes.number
}

export default PriceTag