import React, {useState} from "react";
import {fetchProductList} from "./service";
import {useSelector} from "react-redux";
import PageSelector from "./pageSelector";
import ProductListGrid from "./productListGrid";

const ProductList = () => {
  const selectedCategory = useSelector(state => state.category)
  const [page, setPage] = useState(1)

  React.useEffect(() => {
    console.log("use effect")
    fetchProductList(selectedCategory.toLowerCase(), page)
  }, [page, selectedCategory])

  function changePage(delta) {
    if (delta < 0 && page === 1){
      return
    }
    setPage(page + delta)
  }

  return(
    <div>
      <ProductListGrid/>
      <PageSelector
        page={page}
        callback={changePage}/>
    </div>
  )
}

export default ProductList