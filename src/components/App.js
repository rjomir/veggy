import React, { Component } from 'react'
import axios from "axios";

import Layout from './layout/layout'

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            cartItems: {
                "brocolli": 3,
                "cucumber": 2
            },
            products: [],
            updateState : this.updateState
        }
    }

    componentDidMount() {
        axios.get('/mock/products.json')
          .then(response => {
              const { data: { products } } = response;
              this.setState({
                  products
              });
          })
    }

    updateState = (prop, newVal) => {
        this.setState({
            [prop]: newVal
        })
    }

    render() {
        return <Layout { ...this.state }/>
    }
}

export default App
