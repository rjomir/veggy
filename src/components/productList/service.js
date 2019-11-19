import Axios from "axios";
import {store} from "../../index";
import {fetchProductList as fetch} from "./reducers";
import {setIsLoading} from "../../components/layout/reducers"

export function fetchProductList(category, page){
  store.dispatch(setIsLoading(true))
  Axios.get("https://apidojo-adidas-v1.p.rapidapi.com/products/v2/list", {
    params: {
      "limit": 30,
      "url": category,
      "page": page,
      "division": "shoes"
    },
    headers: {
      "content-type":"application/octet-stream",
      "x-rapidapi-host":"apidojo-adidas-v1.p.rapidapi.com",
      "x-rapidapi-key":"219cdbf08amshce7e41756ce33cap17f2fajsn9ab420b664d8"
    }
  }).then(response => {
    console.log(response)
    store.dispatch(setIsLoading(false))
    store.dispatch(fetch(response.data._embedded.products))
  }).catch(error => {
    console.log(error)
  })
}