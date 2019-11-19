import React from 'react';
import AppBar from './AppBar';
import Footer from "./footer";
import MyRouter from "./myRouter";
import LoadingScreen from './loadingScreen';

export default class Layout extends React.Component {
    render(){
        return <div>
            <LoadingScreen/>
            <AppBar/>
            <MyRouter/>
            <Footer/>
            </div>
    }
}

