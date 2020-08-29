import React, {useState, useEffect, useReducer} from 'react';
import {
    View,
    Image,
    Text,
    ImageBackground,
    TouchableOpacity,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import {NavigationContainer} from '@react-navigation/native';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import TrainingModeScreen from '../screens/TrainingModeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingScreen from '../screens/SettingScreen';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {displayStyle, textStyle} from '../styles';
import faker, {fake} from 'faker';

const name = faker.name.firstName() + ' ' + faker.name.lastName();
const img = faker.image.avatar();
const city = faker.address.city();

const Drawer = createDrawerNavigator();

const HocNotSelected = (props) => {
    return (
        <View
            style={[
                displayStyle.displayFlexColAllCenter,
                {
                    width: 250,
                    height: 80,
                    margin: 0,
                },
            ]}>
            {props.children}
        </View>
    );
};

const HocSelected = (props) => {
    return (
        <View
            style={[
                displayStyle.displayFlexColAllCenter,
                {
                    width: 250,
                    height: 80,
                    margin: 0,
                    borderWidth: 2,
                    borderColor: '#fff',
                    marginTop: -8,
                    marginLeft: -8,
                },
            ]}>
            <ImageBackground
                source={require('../assets/images/bg-2.png')}
                style={[
                    displayStyle.displayFlexColAllCenter,
                    {
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 246,
                        height: 76,
                    },
                ]}>
                {props.children}
            </ImageBackground>
        </View>
    );
};

const CustomDrawer = (props) => {
    useEffect(() => {
        if (props.state.index === 0) {
            props.chagneSelectedItem('trainingMode');
        } else if (props.state.index === 1) {
            props.chagneSelectedItem('profile');
        } else if (props.state.index === 2) {
            props.chagneSelectedItem('settings');
        }
    }, [props.state.index]);
    return (
        <ImageBackground
            source={require('../assets/images/bg-sidebar.png')}
            style={[
                displayStyle.displayFlexColAllCenter,
                {
                    flex: 1,
                    backgroundColor: 'grey',
                    padding: 2,
                    paddingTop: 100,
                    paddingBottom: 20,
                    position: 'relative',
                },
            ]}>
            <DrawerContentScrollView style={{flex: 1}}>
                <View
                    style={[
                        displayStyle.displayFlexColAllCenter,
                        {marginBottom: 50},
                    ]}>
                    <View
                        style={[
                            displayStyle.displayFlexRowAllCenter,
                            {
                                borderRadius: 500,
                                width: 110,
                                height: 110,
                                position: 'relative',
                            },
                        ]}>
                        <Image
                            source={require('../assets/images/bg-2.png')}
                            style={{
                                width: '100%',
                                height: '100%',
                                borderRadius: 500,
                                position: 'relative',
                                top: 0,
                                left: 0,
                            }}
                        />
                        <Image
                            source={{uri: img}}
                            style={{
                                width: '94.5%',
                                height: '94.5%',
                                borderRadius: 500,
                                position: 'absolute',
                                left: 3,
                                top: 3,
                            }}
                        />
                    </View>
                    <Text
                        style={[
                            textStyle.whiteTextLarge,
                            {textAlign: 'center'},
                        ]}>
                        {name}
                    </Text>
                    <Text
                        style={[
                            textStyle.whiteTextMedium,
                            {textAlign: 'center'},
                        ]}>
                        {city}
                    </Text>
                    <View style={displayStyle.displayFlexRowAllCenter}>
                        <Text
                            style={[
                                textStyle.whiteTextMedium,
                                {
                                    textAlign: 'center',
                                    backgroundColor: 'rgba(255,255,255,0.5)',
                                    width: 90,
                                    padding: 5,
                                    marginRight: 3,
                                    borderTopLeftRadius: 10,
                                    borderBottomLeftRadius: 10,
                                },
                            ]}>
                            {'326' + '\n' + 'Freinds'}
                        </Text>
                        <Text
                            style={[
                                textStyle.whiteTextMedium,
                                {
                                    textAlign: 'center',
                                    backgroundColor: 'rgba(255,255,255,0.5)',
                                    width: 90,
                                    padding: 5,
                                    borderTopRightRadius: 10,
                                    borderBottomRightRadius: 10,
                                },
                            ]}>
                            {'186' + '\n' + 'Followers'}
                        </Text>
                    </View>
                </View>

                <DrawerItemList {...props} />

                <DrawerItem
                    style={{
                        width: 250,
                        height: 50,
                        alignItems: 'center',
                        marginTop: '20%',
                    }}
                    label="Log Off"
                    labelStyle={[textStyle.whiteTextLarge, {fontWeight: '700'}]}
                    icon={() => (
                        <SimpleLineIcon name="logout" size={30} color="#fff" />
                    )}
                    onPress={() =>
                        auth()
                            .signOut()
                            .then((res) => {})
                            .catch((err) => {})
                    }
                />
            </DrawerContentScrollView>
        </ImageBackground>
    );
};

const HomeNavigator = (props) => {
    const [selectItem, chagneSelectedItem] = useState('trainingMode');

    return (
        <NavigationContainer>
            <Drawer.Navigator
                drawerContent={(props) => (
                    <CustomDrawer
                        {...props}
                        chagneSelectedItem={chagneSelectedItem}
                    />
                )}
                drawerContentOptions={{
                    itemStyle: {
                        height: 80,
                        width: 250,
                        backgroundColor: 'rgba(255,255,255,0.4)',
                        padding: 0,
                        position: 'relative',
                    },
                    labelStyle: textStyle.whiteTextMedium,
                }}
                drawerStyle={{width: '30%'}}>
                <Drawer.Screen
                    name="trainingMode"
                    component={TrainingModeScreen}
                    options={{
                        title: '',
                        drawerIcon: () =>
                            selectItem !== 'trainingMode' ? (
                                <HocNotSelected>
                                    <AntDesign
                                        name="appstore1"
                                        size={30}
                                        color="#fff"
                                    />
                                    <Text style={textStyle.whiteTextMedium}>
                                        TRAINING MODE
                                    </Text>
                                </HocNotSelected>
                            ) : (
                                <HocSelected>
                                    <AntDesign
                                        name="appstore1"
                                        size={30}
                                        color="#fff"
                                    />
                                    <Text style={textStyle.whiteTextMedium}>
                                        TRAINING MODE
                                    </Text>
                                </HocSelected>
                            ),
                    }}
                />
                <Drawer.Screen
                    name="profile"
                    component={ProfileScreen}
                    options={() => ({
                        title: '',
                        drawerIcon: () =>
                            selectItem !== 'profile' ? (
                                <HocNotSelected>
                                    <FontAwesome
                                        name="user"
                                        size={30}
                                        color="#fff"
                                    />
                                    <Text style={textStyle.whiteTextMedium}>
                                        PROFILE
                                    </Text>
                                </HocNotSelected>
                            ) : (
                                <HocSelected>
                                    <FontAwesome
                                        name="user"
                                        size={30}
                                        color="#fff"
                                    />
                                    <Text style={textStyle.whiteTextMedium}>
                                        PROFILE
                                    </Text>
                                </HocSelected>
                            ),
                    })}
                />
                <Drawer.Screen
                    name="SETTINGS"
                    component={SettingScreen}
                    options={{
                        title: '',
                        drawerIcon: () =>
                            selectItem !== 'settings' ? (
                                <HocNotSelected>
                                    <AntDesign
                                        name="setting"
                                        size={30}
                                        color="#fff"
                                    />
                                    <Text style={textStyle.whiteTextMedium}>
                                        SETTINGS
                                    </Text>
                                </HocNotSelected>
                            ) : (
                                <HocSelected>
                                    <AntDesign
                                        name="setting"
                                        size={30}
                                        color="#fff"
                                    />
                                    <Text style={textStyle.whiteTextMedium}>
                                        SETTINGS
                                    </Text>
                                </HocSelected>
                            ),
                    }}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default HomeNavigator;
