import React, {useState, useEffect, useRef} from 'react';
import {View, Text, Animated} from 'react-native';
import Loader from '../assets/splash/layer-4.svg';
import {Easing} from 'react-native-reanimated';

const Spinner = (props) => {
    const rotate = useRef(new Animated.Value(0)).current;
    useEffect(() => {
        startRotation();
    }, []);

    const startRotation = () => {
        rotate.setValue(0);
        Animated.timing(rotate, {
            useNativeDriver: true,
            toValue: 360,
            easing: Easing.linear,
            duration: 1100,
        }).start(startRotation);
    };

    const degree = rotate.interpolate({
        inputRange: [0, 360],
        outputRange: ['0deg', '360deg'],
    });
    const opacity = rotate.interpolate({
        inputRange: [0, 180, 360],
        outputRange: [0.2, 1, 0.2],
    });

    return (
        <Animated.View
            style={{
                height: '100%',
                width: '100%',
                transform: [{rotateZ: degree}],
                opacity: opacity,
            }}>
            <Loader width="100%" height="100%" />
        </Animated.View>
    );
};

export default Spinner;
