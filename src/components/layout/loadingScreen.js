import React from "react"
import ClipLoader from 'react-spinners/ClipLoader';
import {useSelector} from "react-redux";

const style = {
    top: 0,
    bottom: 0,
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: 'rgba(255, 255, 255, 0.5)',
    visibility: "visible",
    position: "fixed"
}

const hiddenStyle = {
    top: 0,
    bottom: 0,
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: 'rgba(255, 255, 255, 0.5)',
    visibility: "hidden",
    position: "fixed"
}

const LoadingScreen = () => {
    const isLoading = useSelector(state => state.isLoading)

    return(
        <div
        style={isLoading ? style : hiddenStyle}>
            <ClipLoader
            sizeUnit={"px"}
            size={150}
            color={'black'}
            loading={isLoading}/>
        </div>
    )
}

export default LoadingScreen