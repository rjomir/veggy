import React, { useState, useEffect } from "react";
import axios from "axios";

import { AppProvider } from "./AppContext";

const AppStore = props =>{
  const [appState, setAppState] = useState({
    products: []
  })

  useEffect(() => {
    axios.get('/mock/products.json')
      .then(response => {
        const { data: { products } } = response;

        updateState('products', products)
        updateState('updateState', updateState)
      })
  }, [])


  const updateState = (prop, newVal) => {
    setAppState(prevState  => ({
      ...prevState,
      [prop]: newVal
    }))
  }

  return (
    <AppProvider value={ appState }>
      { props.children }
    </AppProvider>
  )
}

export default AppStore
