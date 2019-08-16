import React from "react";
import axios from "axios";

import { AppProvider } from "./AppContext";

class AppStore extends React.Component {
  updateState = (prop, newVal) => {
    this.setState({
      [prop]: newVal
    })
  };

  state = {
    products: [],
    updateState: this.updateState
  };

  componentDidMount() {
    axios.get('/mock/products.json')
      .then(response => {
        const { data: { products } } = response;
        this.setState({
          products
        });
      })
  }

  render() {
    return (
      <AppProvider value={ this.state }>
        { this.props.children }
      </AppProvider>
    )
  }
}

export default AppStore
