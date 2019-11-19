import React from "react"
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import Axios from "axios";
import { store } from "../..";
import { setIsLoading } from "../layout/reducers";
import ImageView from "./imageView";
import InfoBox from "./infoBox";

const ProductPage = (props) => {
    const productId = props.match.params.id
    const [product, setProduct] = React.useState(null)

    React.useEffect(() => {
        fetchProduct()
    }, [])

    function fetchProduct(){
        store.dispatch(setIsLoading(true))
        console.log("fetching product")
        Axios.get("https://apidojo-adidas-v1.p.rapidapi.com/products/v2/detail", {
            params: {
                "lang":"en-US",
                "product_id": productId
            }, 
            headers: {
                "content-type":"application/octet-stream",
                "x-rapidapi-host":"apidojo-adidas-v1.p.rapidapi.com",
                "x-rapidapi-key":"219cdbf08amshce7e41756ce33cap17f2fajsn9ab420b664d8"
            }
        }).then(response => {
            console.log(response)
            setProduct(response.data)
            store.dispatch(setIsLoading(false))
        }).catch(error => {
            console.log(error) 
            store.dispatch(setIsLoading(false))      
        })
    }

    return(
        <div style={{
            display: "flex",
        }}>
            <ImageView
            imageArray={product !== null ? product._links.images_large : []}
            image={product !== null ? product._links.image_large.href : ""}/>
            <InfoBox
            title={product !== null ? product.product_full_name : ""}
            subtitle={product !== null ? product.subtitle : ""}
            description_headline={product !== null ? product.description_headline : ""}
            price={product !== null ? product.original_price : ""}
            />
        </div>
    )
}

ProductPage.prototype = {
    product: PropTypes.object.isRequired
}

export default withRouter(ProductPage)  