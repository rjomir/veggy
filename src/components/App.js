import React from 'react'
import Grid from '@material-ui/core/Grid';
import axios from 'axios'
import {connect} from "react-redux";
import Item from './item/item'
import {RECIPES} from "../redux/actions/types";

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            products: []
        }
    }

    componentDidMount() {
        const self = this

        axios.get('/mock/products.json')
            .then(function (response) {
                self.setState({
                    products: response.data.products
                })
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }

    render() {
        const {testStore} = this.props;
        console.log("testState",testStore);
        this.props.onLoad();
        return (
            <div>
                <Grid container spacing={1}>
                    {
                        this.state.products.map((item) => {
                            return <Grid container item xs={3} spacing={0}>
                                <Item product={item}/>
                            </Grid>
                        })
                    }
                </Grid>
            </div>
        )
    }
}

export default connect(state => ({
        testStore: state
    }),
    dispatch => ({
        onLoad:()=>{
            console.log("onLoadOccurred")
            dispatch({type:RECIPES.FETCH,payload:[]})
        }
    }))(App);