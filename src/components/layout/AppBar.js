import React from 'react';
import {
    selectCategory
} from "./reducers"
import { store } from '../..';
import BarButton from "./barButton";
import Separator from "./separator";
import CurrencySelect from "./currencySelect";

const divStyle = {
    backgroundColor: "black", 
    height: 100,
    display: "flex",
    justifyContent: "space-between"
}

const imgStyle = {
    height: 100,
    width: 150,
    resizeMode: "contain"
}

const barButtonsDivStyle = {
    display: "flex",
    alignItems: "flex-end",
}

const selectDivStyle = {
    display:"flex",
    alignItems: "flex-end"
}

export default class AppBar extends React.Component{
    render(){
        return <div style={divStyle}>
            <div style={{display:"flex"}}>
                <img
                  alt="logo"
                  style={imgStyle}
                  src={"/adidasLogo.jpg"}/>
                <div style={barButtonsDivStyle}>
                    <BarButton
                      onClick={() => store.dispatch(selectCategory("Men"))}
                      value="Men"/>
                    <Separator/>
                    <BarButton
                      onClick={() => store.dispatch(selectCategory("Women"))}
                      value="Women"/>
                    <Separator/>
                    <BarButton
                      onClick={() => store.dispatch(selectCategory("Kids"))}
                      value="Kids"/>
                </div>
            </div>
            <div style={selectDivStyle}>
                <CurrencySelect
                  options={["USD", "EUR", "MDL"]}
                />
            </div>
        </div>
    }
}