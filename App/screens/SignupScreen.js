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
import {GoogleSignin} from '@react-native-community/google-signin';
import LoadingPrompt from '../components/prompts/LoginPrompt';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

GoogleSignin.configure({
    webClientId:
        '373800374511-fh1l8dd4lpsvem728aja544q4r0tptmm.apps.googleusercontent.com',
});

class SignupScreen extends React.Component {
    state = {
        email: '',
        password: '',
    };

    inputHandler = (event, type) => {
        if (type === 'email') {
            this.setState({
                ...this.state,
                email: event.nativeEvent.text,
            });
        } else if (type === 'password') {
            this.setState({
                ...this.state,
                password: event.nativeEvent.text,
            });
        }
    };
    signupUsingEmailPassword = () => {
        this.setState({
            loader: true,
        });
        auth();
        let {email, password} = {...this.state};
        auth()
            .createUserWithEmailAndPassword(email, password)
            .then((res) => {
                Alert.alert(
                    'Done',
                    'New user account created with email ' + email,
                );
                this.setState({
                    loader: false,
                });
            })
            .catch((err) => {
                this.setState({
                    loader: false,
                });
                if (err.code === 'auth/email-already-in-use') {
                    Alert.alert('Invalid', 'Email address is already in use');
                } else if (err.code === 'auth/invalid-email') {
                    Alert.alert('Invalid', 'Email address is invalid');
                }
            });
    };

    loginUsingGoogle = async () => {
        this.setState({
            loader: true,
        });
        try {
            let {idToken} = await GoogleSignin.signIn();
            let googleCredentials = await auth.GoogleAuthProvider.credential(
                idToken,
            );
            auth()
                .signInWithCredential(googleCredentials)
                .then((res) => {
                    this.setState({
                        loader: false,
                    });
                    Alert.alert('Done', 'Welcome ' + res.user.displayName);
                })
                .catch((err) => {
                    this.setState({
                        loader: false,
                    });
                    Alert.alert(
                        'Error',
                        'Something went wrong , Try after sometime',
                    );
                });
        } catch (error) {
            console.log(error.message);
        }
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
                                        width: '104%',
                                        marginTop: 20,
                                    }}
                                    value={this.state.email}
                                    onChange={(event) =>
                                        this.inputHandler(event, 'email')
                                    }
                                />
                                {/* password */}
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
                                                name="lock"
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
                                        width: '104%',
                                        marginTop: 15,
                                    }}
                                    secureTextEntry={true}
                                    value={this.state.password}
                                    onChange={(event) =>
                                        this.inputHandler(event, 'password')
                                    }
                                />
                                <Button
                                    title="SIGN UP"
                                    buttonStyle={{
                                        backgroundColor: '#ff9100',
                                        width: '100%',
                                        height: 35,
                                    }}
                                    containerStyle={{
                                        width: '100%',
                                        marginTop: 15,
                                    }}
                                    onPress={this.signupUsingEmailPassword}
                                />

                                <Text
                                    style={[style.text, {textAlign: 'center'}]}
                                    onPress={() =>
                                        this.props.navigation.navigate('login')
                                    }>
                                    Already have an account? Log in here
                                </Text>
                                <Text
                                    style={[style.text, {textAlign: 'center'}]}>
                                    Or continue with
                                </Text>
                                <View
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        margin: 10,
                                    }}>
                                    <Entypo
                                        name="facebook-with-circle"
                                        size={40}
                                        color="#3b5998"
                                        style={{marginRight: '6%'}}
                                    />
                                    <Icon
                                        name="google-plus-circle"
                                        size={40}
                                        color="#ff2f00"
                                        onPress={this.loginUsingGoogle}
                                    />
                                </View>
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
                                ' registration is in progress'
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

export default SignupScreen;
