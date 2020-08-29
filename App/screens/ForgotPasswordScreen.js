import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Dimensions,
    Alert,
} from 'react-native';
import {Input, Button} from 'react-native-elements';
import auth from '@react-native-firebase/auth';
import Logo from '../assets/splash/layer-3.svg';
import Icon from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import LoadingPrompt from '../components/prompts/LoginPrompt';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


class ForgotPasswordScreen extends React.Component {
    state = {
        email: '',
        loader: false,
    };
    inputHandler = (event, type) => {
        if (type === 'email') {
            this.setState({
                ...this.state,
                email: event.nativeEvent.text,
            });
        }
    };

    forgotPasswordHandler = () => {
        this.setState({
            loader: true,
        });
        let {email} = {...this.state};
        auth()
            .sendPasswordResetEmail(email)
            .then((res) => {
                this.setState({
                    loader: false,
                });
                Alert.alert(
                    'Done',
                    'Verfication link send to your registered email',
                );
                this.props.navigation.goBack();
            })
            .catch((err) => {
                if (err.code === 'auth/user-not-found') {
                    Alert.alert('Invalid', 'Invalid email');
                }else{
                    Alert.alert('Error', 'Value entered is not a valid email');
                }
                this.setState({
                    loader : false
                })
            });
    };

    render() {
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
                            display: 'flex',
                            flexDirection: 'row',
                            flex: 1,
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            height: '100%',
                        }}>
                        <View
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '50%',
                            }}>
                            <View style={style.loginContainer}>
                                <View
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                    <View
                                        style={{
                                            borderBottomColor: '#777',
                                            borderBottomWidth: 1.5,
                                            width: '35%',
                                        }}></View>
                                    <View style={style.userIconContianer}>
                                        <Icon
                                            name="user"
                                            size={60}
                                            color="#777"
                                        />
                                    </View>
                                    <View
                                        style={{
                                            borderBottomColor: '#777',
                                            borderBottomWidth: 1.5,
                                            width: '35%',
                                        }}></View>
                                </View>
                                {/* email */}
                                <Input
                                    leftIcon={
                                        <View
                                            style={{
                                                backgroundColor: '#222',
                                                width: 25,
                                                height: 25,
                                                margin: 2,
                                                paddingLeft: 2,
                                            }}>
                                            <Icon
                                                name="user"
                                                color="#777"
                                                size={25}
                                            />
                                        </View>
                                    }
                                    inputContainerStyle={{
                                        borderWidth: 1,
                                        height: 35,
                                        backgroundColor: '#ccc',
                                    }}
                                    containerStyle={{
                                        height: 30,
                                        width: '106%',
                                        marginTop: 20,
                                    }}
                                    value={this.state.email}
                                    onChange={(event) =>
                                        this.inputHandler(event, 'email')
                                    }
                                />
                                {/* password */}

                                <Button
                                    title="SUBMIT"
                                    buttonStyle={{
                                        backgroundColor: '#ff9100',
                                        width: '100%',
                                        height: 35,
                                    }}
                                    containerStyle={{
                                        width: '100%',
                                        marginTop: 15,
                                    }}
                                    onPress={this.forgotPasswordHandler}
                                />
                                <Button
                                    title="GO BACK"
                                    titleStyle={{
                                        color: '#ff9100',
                                        marginLeft: 15,
                                    }}
                                    icon={
                                        <Entypo
                                            name="back"
                                            size={24}
                                            color="#ff9100"
                                        />
                                    }
                                    buttonStyle={{
                                        backgroundColor: '#fff',
                                        width: '100%',
                                        height: 35,
                                    }}
                                    containerStyle={{
                                        width: '100%',
                                        marginTop: 15,
                                    }}
                                    onPress={() =>
                                        this.props.navigation.goBack()
                                    }
                                />
                            </View>
                        </View>

                        <View style={style.logoContainer}>
                            <Logo width={'100%'} />
                        </View>
                    </View>
                    {this.state.loader ? (
                    <LoadingPrompt
                        message={
                            'Hi ' +
                            this.state.email +
                            ' we are fetching your details'
                        }
                    />
                ) : null}
                </ImageBackground>
            </View>
        );
    }
}

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
        width: '54%',
        height: '100%',
    },
    loginContainer: {
        width: '60%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    userIconContianer: {
        width: 90,
        height: 90,
        backgroundColor: 'rgba(255,255,255,0)',
        borderWidth: 1.5,
        borderColor: '#777',
        borderRadius: 100,
        alignItems: 'center',
        paddingTop: 10,
    },

    text: {
        fontSize: 14,
        color: '#fff',
        fontStyle: 'italic',
        textAlign: 'right',
        width: '100%',
        marginTop: 10,
    },
});

export default ForgotPasswordScreen;
