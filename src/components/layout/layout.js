import React, { Fragment } from 'react'
import { BrowserRouter, Switch, Route }  from 'react-router-dom'
import { withStyles } from "@material-ui/core";

import Header from './header'
import Footer from './footer'
import ProductList from '../product-list/product-list';
import ProductDetails from '../product-details/product-details';

const styles = {
    bodyWrapper: {
        backgroundColor: '#f5f5f5',
        minHeight: '90vh'
    },
    listWrapper: {
        maxWidth: '940px',
        margin: 'auto',
        padding: '25px 0'
    }
}

const Layout = props => { 
    const { classes, ...otherProps } = props

    console.log(otherProps)

    return (<Fragment>
            <Header { ...otherProps }/>
            <BrowserRouter>
                <Switch>
                    <Route render={()=>
                        <div className={ classes.listWrapper }>
                            <ProductList { ...otherProps }/>
                        </div>
                    } exact path="/" />
                    <Route path="/product/:id" component={ ProductDetails }/>
                </Switch>  
            </BrowserRouter>
            <Footer/>
    </Fragment>)
}

export default withStyles(styles)(Layout)