import React from 'react';
import {ImageBackground ,Dimensions} from 'react-native';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const BackgoundImage = props => {
    return (
        <ImageBackground source = {require()}>
            {props.children}
        </ImageBackground>
    )
}


export default BackgoundImage;