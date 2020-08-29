import React from 'react';
import {
    View,
    Text,
    ImageBackground,
    Dimensions,
    StyleSheet,
} from 'react-native';
import Spinner from '../components/Spinner';
import Logo from '../assets/splash/layer-3.svg';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const Splash = (props) => {
    return (
        <View style={style.container}>
            <ImageBackground
                source={require('../assets/images/bg-1.png')}
                style={{width: width, height: height}}>
                <ImageBackground
                    source={require('../assets/images/bg-2.png')}
                    style={{width: width, height: height, opacity: 0.3}}
                />

                <View
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <Logo width="65%" />
                    <View style={{width: 100, height: 100, marginBottom: 100}}>
                        <Spinner />
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
    },
    logoContainer: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'rgba(255,255,255,0.1)',
        width: '50%',
        height: '100%',
    },
});

export default Splash;
