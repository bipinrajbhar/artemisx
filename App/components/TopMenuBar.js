import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Button} from 'react-native-elements';
import {displayStyle, textStyle} from '../styles';

const TopMenuBar = (props) => {
    const changeScreenHandler = (idx) => {
        props.changeScreenHandler(idx);
    };
    const len = props.list.length === 0 ? 1 : props.list.length;
    const width = Math.floor(100 / len) - 1 + '%';

    let block = props.list.map((el, idx) => {
        let backgroundColor =
            props.activeIndex === idx ? '#00c3ff' : 'rgba(255,210,200,0.1)';
        return (
            <Button
                key={idx}
                title={el}
                buttonStyle={{width: '100%', height: 30, backgroundColor}}
                containerStyle={{width, height: 30, borderRadius: 5}}
                onPress={() => changeScreenHandler(idx)}
            />
        );
    });
    return (
        <View
            style={[
                displayStyle.displayFlexRowAllCenter,
                {justifyContent: 'space-between', width: '100%'},
            ]}>
            {block}
        </View>
    );
};

export default TopMenuBar;
