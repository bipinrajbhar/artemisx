import React from 'react';
import {
    View,
    Text,
    ImageBackground,
    Dimensions,
    StyleSheet,
    Settings,
} from 'react-native';
import {Button} from 'react-native-elements';
import {displayStyle, textStyle} from '../styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Header from '../components/Header';
import TopMenuBar from '../components/TopMenuBar';
import BluetoothConnectivityContainer from '../containers/settingsContainer/BluetoothConnectivityContainer';
import LinkOtherAccountContainer from '../containers/settingsContainer/LinkOtherAccountContainer';
import PreferencesContainer from '../containers/settingsContainer/PreferencesContainer';
import ThemesContainer from '../containers/settingsContainer/ThemesContainer';
const width = Dimensions.get('window').width;

const menuItems = [
    'THEME',
    'BLUETOOTH CONNECTIVITY',
    'PREFERENCES',
    'LINK OTHER ACCOUNT',
];

class SettingsScreen extends React.Component {
    state = {
        activeIndex: 0,
    };

    changeScreenHandler = (idx) => {
        this.setState({
            activeIndex: idx,
        });
    };

    render() {
        const continaerToDisplay = () => {
            let activeIndex = this.state.activeIndex;
            if (activeIndex === 0) {
                return <ThemesContainer />;
            } else if (activeIndex === 1) {
                return <BluetoothConnectivityContainer />;
            } else if (activeIndex === 2) {
                return <PreferencesContainer />;
            } else if (activeIndex === 3) {
                return <LinkOtherAccountContainer />;
            } else {
                return null;
            }
        };

        return (
            <View style={{flex: 1}}>
                <Header navigation={this.props.navigation} />
                <ImageBackground
                    source={require('../assets/images/bg.png')}
                    style={{flex: 1}}>
                    <View style={style.container}>
                        <View
                            style={[
                                displayStyle.displayFlexRowStart,
                                {
                                    width: '100%',
                                    height: '10%',
                                    justifyContent: 'space-between',
                                },
                            ]}>
                            <View style={[displayStyle.displayFlexRowStart]}>
                                <AntDesign
                                    name="setting"
                                    size={34}
                                    color="#fff"
                                />
                                <Text
                                    style={[
                                        textStyle.whiteTextLarge,
                                        {fontWeight: '700', marginLeft: 10},
                                    ]}>
                                    SETTINGS
                                </Text>
                            </View>
                            <View style={[displayStyle.displayFlexRowStart]}>
                                <Button
                                    title="Log out"
                                    icon={
                                        <SimpleLineIcons
                                            name="logout"
                                            size={25}
                                            color="#fff"
                                        />
                                    }
                                    buttonStyle={{
                                        backgroundColor: 'rgba(255,255,255,0)',
                                        width: 200,
                                    }}
                                    titleStyle={[
                                        textStyle.whiteTextLarge,
                                        {
                                            marginLeft: 20,
                                            fontWeight: '700',
                                            textAlign: 'right',
                                        },
                                    ]}
                                />
                            </View>
                        </View>
                        <TopMenuBar
                            list={menuItems}
                            activeIndex={this.state.activeIndex}
                            changeScreenHandler={this.changeScreenHandler}
                        />
                        <View style={style.screenArea}>
                            {continaerToDisplay()}
                        </View>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(255,255,255,0.15)',
        paddingHorizontal: 30,
        paddingBottom: 30,
    },
    screenArea: {
        flex: 1,
        backgroundColor: 'rgba(255,200,200,0.1)',
        marginTop: 20,
        borderRadius: 25,
    },
});

export default SettingsScreen;
