import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Image,
    Dimensions,
} from 'react-native';
import {Button} from 'react-native-elements';
import {displayStyle, textStyle} from '../../styles';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const meterSize = screenHeight <= 800 ? 250 : 400;
const meterContainer = screenHeight <= 800 ? 200 : 300;
const meterPosition = screenHeight <= 800 ? 40 : 65;
const meterTextStyle =
    screenHeight <= 800 ? textStyle.whiteTextMedium : textStyle.whiteTextLarge;

const sideMeterSize = screenHeight <= 800 ? screenHeight - 100 : 800;
const sideMeterMargin = screenWidth <= 1200 ? '5.4%' : '6.5%';

console.log(screenHeight, screenWidth);
const iconSize = screenHeight <= 800 ? 25 : 40;
const iconColor = '#fff';
const fontStyle =
    screenHeight <= 700 ? textStyle.whiteTextSmall : textStyle.whiteTextMedium;
const field = [
    'DURATION',
    'DISTANCE',
    'SPEED',
    'HEARTRATE',
    'CALORIES',
    'POWER',
];
const fieldMap = {
    DURATION: 'duration',
    DISTANCE: 'distance',
    SPEED: 'speed',
    HEARTRATE: 'heartRate',
    CALORIES: 'calories',
    POWER: 'power',
};
const marignLeft = ['30%', '20%', '10%', '10%', '20%', '30%'];
const units = ['min', 'mile', 'min/h', 'bpm', 'kcal', 'watts'];
const fieldIcon = [
    <MaterialCommunityIcons
        name="progress-clock"
        size={iconSize}
        color={iconColor}
    />,
    <MaterialCommunityIcons
        name="arrow-left-right"
        size={iconSize}
        color={iconColor}
        style={{transform: [{rotateZ: '-45deg'}]}}
    />,
    <MaterialCommunityIcons
        name="speedometer"
        size={iconSize}
        color={iconColor}
    />,
    <MaterialCommunityIcons
        name="heart-pulse"
        size={iconSize}
        color={iconColor}
    />,
    <Ionicons name="ios-flame" size={iconSize} color={iconColor} />,
    <FontAwesome name="bolt" size={iconSize} color={iconColor} />,
];
class QuickTrainingContainer extends React.Component {
    state = {
        duration: 10,
        distance: 40,
        speed: 5,
        heartRate: 64,
        calories: 100,
        power: 30,
        rpm: 0,
        load: 0,
        pause: false,
    };

    startTimer = () => {
        if (this.state.pause) {
            return;
        }
        setTimeout(() => {
            let rpm = this.state.rpm;
            let load = this.state.load;
            if (rpm >= 100) {
                rpm = 0;
                load = 0;
                this.setState({
                    rpm,
                    load,
                });
                setTimeout(() => {
                    this.startTimer();
                }, 1000);
                return;
            }
            load = load + 0.15;
            load = Math.round(load * 100) / 100;
            this.setState({
                load: load,
                rpm: rpm + 1,
            });
            this.startTimer();
        }, 50);
    };

    stopTraining = () => {
        // console.log(this.state.pause);
        this.setState({
            pause: true,
        });
    };

    resumeTraining = () => {
        let pause = this.state.pause;
        if (pause) {
            this.setState({
                pause: false,
            });
            setTimeout(() => {
                this.startTimer();
            }, 100);
        }
    };
    componentDidMount() {
        this.startTimer();
    }

    render() {
        const fieldBlock = field.map((el, idx) => {
            return (
                <View
                    key={idx}
                    style={{
                        marginLeft: marignLeft[idx],
                        height: '16%',
                        width: '50%',
                    }}>
                    <View style={[displayStyle.displayFlexRowStart]}>
                        {fieldIcon[idx]}
                        <Text
                            style={[
                                fontStyle,
                                {
                                    color: '#006aff',
                                    marginLeft: 10,
                                    fontWeight: '600',
                                },
                            ]}>
                            {field[idx]}
                        </Text>
                    </View>
                    <View
                        style={[
                            displayStyle.displayFlexRowStart,
                            {
                                justifyContent: 'flex-end',
                                alignItems: 'flex-start',
                            },
                        ]}>
                        <Text
                            style={{
                                fontSize: iconSize,
                                color: '#fff',
                                marginRight: 10,
                            }}>
                            {this.state[fieldMap[el]]}
                        </Text>
                        <Text
                            style={[
                                textStyle.whiteTextRegular,
                                {color: '#f0b400'},
                            ]}>
                            {units[idx]}
                        </Text>
                    </View>
                </View>
            );
        });

        return (
            <View style={[displayStyle.displayFlexRowStart, {flex: 1}]}>
                <View style={[style.leftContainer]}>{fieldBlock}</View>
                <View style={style.centerContainer}>
                    <View style={{width: meterSize, height: meterSize}}>
                        <ImageBackground
                            source={require('../../assets/images/meter.png')}
                            style={{
                                width: '100%',
                                height: '100%',
                                position: 'relative',
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <AnimatedCircularProgress
                                size={meterContainer}
                                width={meterContainer / 10}
                                fill={this.state.rpm}
                                tintColor="#f0b400"
                                backgroundColor="#3d5875"
                                rotation={0}
                                lineCap="round"
                            />
                            <View
                                style={{
                                    position: 'absolute',
                                    top: meterPosition,
                                    left: meterPosition,
                                    height: meterContainer - 30,
                                    width: meterContainer - 30,
                                    backgroundColor: '#0e1142',
                                    borderRadius: 300,
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    paddingTop: 6,
                                    paddingLeft: 6,
                                }}>
                                <ImageBackground
                                    source={require('../../assets/images/indicator.png')}
                                    style={{width: '97%', height: '97%'}}>
                                    <ImageBackground
                                        source={require('../../assets/images/innerIndicator.png')}
                                        style={[
                                            displayStyle.displayFlexColAllCenter,
                                            {width: '100%', height: '100%'},
                                        ]}>
                                        <Text
                                            style={[
                                                meterTextStyle,
                                                {
                                                    color: '#006aff',
                                                    fontWeight: '700',
                                                },
                                            ]}>
                                            CADENCE
                                        </Text>
                                        <Text
                                            style={{
                                                fontSize: meterContainer / 5,
                                                color: '#fff',
                                                marginTop: 10,
                                                marginBottom: 10,
                                            }}>
                                            {this.state.rpm}
                                        </Text>
                                        <Text
                                            style={[
                                                meterTextStyle,
                                                {
                                                    color: '#f0b400',
                                                    fontWeight: '700',
                                                },
                                            ]}>
                                            RPM
                                        </Text>
                                    </ImageBackground>
                                </ImageBackground>
                            </View>
                        </ImageBackground>
                        <View style={style.startPlayContainer}>
                            <MaterialIcons
                                name="pause-circle-outline"
                                size={meterContainer / 5}
                                color="#fff"
                                style={{marginRight: 30, zIndex: 2000}}
                                onPress={this.stopTraining}
                            />
                            <MaterialIcons
                                name="play-circle-outline"
                                size={meterContainer / 5}
                                color="#fff"
                                onPress={this.resumeTraining}
                                style={{zIndex: 2000}}
                            />
                        </View>
                    </View>
                </View>
                <View style={style.rightContainer}>
                    <View
                        style={{
                            width: '60%',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <Text
                            style={[
                                textStyle.whiteTextMedium,
                                {color: '#006aff', fontWeight: '700'},
                            ]}>
                            LOAD
                        </Text>
                        <Text
                            style={{
                                fontSize: 50,
                                color: '#fff',
                                marginTop: 10,
                                marginBottom: 10,
                                textAlign: 'center',
                            }}>
                            {this.state.load}
                        </Text>
                        <Text
                            style={[
                                textStyle.whiteTextMedium,
                                {color: '#f0b400', fontWeight: '700'},
                            ]}>
                            LEVEL
                        </Text>
                    </View>
                </View>
                <View
                    style={{
                        transform: [{rotateY: '180deg'}, {rotateZ: '135deg'}],
                        position: 'absolute',
                        top: '-5%',
                        right: 20,
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                    }}>
                    <AnimatedCircularProgress
                        size={screenHeight - 180}
                        width={35}
                        fill={Math.ceil((this.state.load / 15) * 100)}
                        tintColor="#f0b400"
                        backgroundColor="#3d5875"
                        arcSweepAngle={89}
                        lineCap="round"
                    />
                </View>
                <Image
                    source={require('../../assets/images/sideIndicator.png')}
                    style={{
                        width: 120,
                        height: (sideMeterSize - 180)* 0.82,
                        position: 'absolute',
                        top: '8%',
                        right: 75,
                        transform : [{rotateZ : "-1deg"}]
                    }}
                />
            </View>
        );
    }
}

const style = StyleSheet.create({
    leftContainer: {
        width: '25%',
        height: '100%',
        position: 'relative',
        paddingTop: 30,
    },
    centerContainer: {
        width: '50%',
        height :"100%",
        display: 'flex',
        flexDirection: 'column',
        alignItems: "center",
        justifyContent: "flex-start",
        marginTop: screenHeight <= 700 ? -50 : 0,
        paddingTop : 50
    },
    rightContainer: {
        width: '25%',
        height: '100%',
    },
    startPlayContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
    },
});

export default QuickTrainingContainer;
