import React, { Component } from 'react'
import Layout from './layout/layout'

class App extends Component {
    constructor(props){
        super(props)

        this.state = {
            cartItems: {
                "brocolli": 3,
                "cucumber": 2
            },
            updateState : this.updateState
        }
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