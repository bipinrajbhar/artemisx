import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Spinner from '../Spinner';

const LoginPrompt = (props) => {
    return (
        <View style={style.container}>
            <View style={style.promptContainer}>
                <View style={style.innerContainer}>
                    <View style={style.spinnerContainer}>
                        <Spinner />
                    </View>
                </View>
                <View style={style.messageContainer}>
                    <Text style={style.messageStyle}>
                        {props.message || 'Loading...'}
                    </Text>
                </View>
            </View>
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(1,1,1,0.65)',
    },
    promptContainer: {
        width: '50%',
        padding: 10,
        borderRadius: 5,
        height: 150,
        borderRadius: 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(5,5,5,0.95)',
    },
    innerContainer: {
        width: '40%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    spinnerContainer: {
        width: 60,
        height: 60,
    },
    messageContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    messageStyle: {
        textAlign: 'center',
        fontSize: 20,
        color: '#fff',
        textTransform: 'capitalize',
    },
});

export default LoginPrompt;
