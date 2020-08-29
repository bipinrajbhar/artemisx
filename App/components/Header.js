import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import {Header, Input} from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Logo from '../assets/images/headerLogo.svg';

const HeaderComponent = (props) => {
    return (
        <ImageBackground
            source={require('../assets/images/bg.png')}
            style={{height: 100}}>
            <Header
                leftComponent={() => (
                    <Feather
                        name="menu"
                        color="#fff"
                        size={30}
                        onPress={() => props.navigation.toggleDrawer()}
                        style={{zIndex: 2000}}
                    />
                )}
                leftContainerStyle={{width: 50}}
                centerComponent={
                    <View style={{width: 250, height: 55}}>
                        <Logo width="100%" height="100%" />
                    </View>
                }
                centerContainerStyle={{
                    alignItems: 'flex-start',
                    marginLeft: -250,
                }}
                rightComponent={
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginRight: 20,
                        }}>
                        <Input
                            placeholder="SEARCH"
                            inputContainerStyle={{
                                borderBottomWidth: 0,
                                backgroundColor: 'rgba(255,200,200,0.1)',
                                width: 300,
                                height: 30,
                                paddingLeft: 20,
                                borderRadius: 5,
                                paddingRight: 10,
                            }}
                            containerStyle={{
                                height: 35,
                                width: 300,
                                marginRight: 40,
                            }}
                            rightIcon={
                                <FontAwesome
                                    name="search"
                                    size={20}
                                    color="#ffff"
                                />
                            }
                            placeholderTextColor="#fff"
                            inputStyle={{color: '#fff'}}
                        />
                        <FontAwesome name="bell" size={25} color="#fff" />
                    </View>
                }
                containerStyle={{
                    height: 100,
                    backgroundColor: 'rgba(255,255,255,0)',
                    borderBottomWidth: 0,
                }}
            />
        </ImageBackground>
    );
};

export default HeaderComponent;
