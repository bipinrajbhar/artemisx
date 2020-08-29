import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import HomeNavigator from './HomeNavigator';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';

const Stack = createStackNavigator();

const AppNavigator = (props) => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
                initialRouteName="login">
                <Stack.Screen name="login" component={LoginScreen} />
                <Stack.Screen name="signup" component={SignupScreen} />
                <Stack.Screen
                    name="forgotPassword"
                    component={ForgotPasswordScreen}
                />
                <Stack.Screen name="home" component={HomeNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
