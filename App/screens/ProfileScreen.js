import React from 'react';
import {
    View,
    Text,
    ImageBackground,
    Dimensions,
    StyleSheet,
} from 'react-native';
import {displayStyle, textStyle} from '../styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Header from '../components/Header';
import TopMenuBar from '../components/TopMenuBar';
import AchievementsContainer from '../containers/profileContainer/AchievementsContainer';
import EditInformationContainer from '../containers/profileContainer/EditInformationContainer';
import RecentActivitiesContainer from '../containers/profileContainer/RecentActivitiesContainer';
import SetGoalContainer from '../containers/profileContainer/SetGoalContainer';
import WorkoutStatisticsContainer from '../containers/profileContainer/WorkoutStatisticsContainer';
const width = Dimensions.get('window').width;

const menuItems = [
    'WORKOUT STATISTICS',
    'SET GOAL',
    'RECENT ACTIVITIES',
    'EDIT INFORMATION',
    'ACHIEVEMENTS',
];

class ProfileScreen extends React.Component {
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
                return <WorkoutStatisticsContainer />;
            } else if (activeIndex === 1) {
                return <SetGoalContainer />;
            } else if (activeIndex === 2) {
                return <RecentActivitiesContainer />;
            } else if (activeIndex === 3) {
                return <EditInformationContainer />;
            } else if (activeIndex === 4) {
                return <AchievementsContainer />;
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
                            <FontAwesome name="user" size={34} color="#fff" />
                            <Text
                                style={[
                                    textStyle.whiteTextLarge,
                                    {fontWeight: '700', marginLeft: 10},
                                ]}>
                                PROFILE
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

export default ProfileScreen;
