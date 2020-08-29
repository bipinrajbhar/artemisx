import React from 'react';
import {
    View,
    Text,
    ImageBackground,
    Dimensions,
    StyleSheet,
} from 'react-native';
import {displayStyle, textStyle} from '../styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Header from '../components/Header';
import TopMenuBar from '../components/TopMenuBar';
import QuickTrainingContainer from '../containers/trainingModeContainer/QuickTrainingContainer';
import VideoTrainingContainer from '../containers/trainingModeContainer/VideoTrainingContainer';
import MusicTrainingContainer from '../containers/trainingModeContainer/MusicTrainingContainer';
import LearnWithTrainersContainer from '../containers/trainingModeContainer/LearnWithTrainersContainer';
const width = Dimensions.get('window').width;

const menuItems = [
    'QUICK TRAINING',
    'VIDEO TRAINING',
    'MUSIC TRAINING',
    'LEARN WITH TRAINERS',
];

class TrainingModeScreen extends React.Component {
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
                return <QuickTrainingContainer />;
            } else if (activeIndex === 1) {
                return <VideoTrainingContainer />;
            } else if (activeIndex === 2) {
                return <MusicTrainingContainer />;
            } else if (activeIndex === 3) {
                return <LearnWithTrainersContainer />;
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
                                {width: '100%', height: '10%'},
                            ]}>
                            <AntDesign
                                name="appstore1"
                                size={34}
                                color="#fff"
                            />
                            <Text
                                style={[
                                    textStyle.whiteTextLarge,
                                    {fontWeight: '700', marginLeft: 10},
                                ]}>
                                TRAINING MODE
                            </Text>
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

export default TrainingModeScreen;
