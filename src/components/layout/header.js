import React,  { Fragment } from 'react'

const Header = ({ classes, ...otherProps }) => {
    const items = Object.keys(otherProps.cartItems).length

    return (
        <Fragment>
           Cart items: { items }
        </Fragment>
    )
}

export default Header