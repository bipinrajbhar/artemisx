import React from 'react';
import {View, Text} from 'react-native';

class MusicTrainingContainer extends React.Component{

    getAllSongs = async() => {
       
       
    }
    componentDidMount(){
        this.getAllSongs();
    }

    render(){
        return(
            <View>
                <Text>MusicTrainingContainer</Text>
            </View>
        )
    }
}

export default MusicTrainingContainer;