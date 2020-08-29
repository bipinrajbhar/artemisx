import React, {useState, useEffect, useRef} from 'react';
import auth from '@react-native-firebase/auth';
import Splash from './splash';
import AppNavigator from './navigator/AppNavigator';
import HomeNavigator from './navigator/HomeNavigator';

const StartApp = (props) => {
     const [initializing, setInitializing] = useState(true);
     const [user, setUser] = useState();
     // Handle user state changes
     function onAuthStateChanged(user) {
          setTimeout(() => {
               setUser(user);
               if (initializing) setInitializing(false);
          }, 500);
     }

     useEffect(() => {
          const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
          return subscriber; // unsubscribe on unmount
     }, []);

     if (initializing) return <Splash />;

     if (!user) {
          return <AppNavigator />;
     }

     return <HomeNavigator />;
};

export default StartApp;
