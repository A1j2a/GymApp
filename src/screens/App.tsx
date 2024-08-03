import React, {useState, useEffect, useContext} from 'react';
import {LogBox, Platform, SafeAreaView, StatusBar, View} from 'react-native';
import FlashMessage from 'react-native-flash-message';
import Toast from 'react-native-toast-message';
import {colors} from '../assets/colors/colors';
import MainNavigation from '../navigators/MainNavigation';

// import Loader from "../api/Loader";
LogBox.ignoreAllLogs();

const App = (props: any) => {
  const [initialRouteName, setInitialRouteName] = useState('WelcomeScreen');
  const [navigation, setNavigation] = useState(false);

  return (
    <View style={{flex: 1, backgroundColor: colors.white}}>
      {initialRouteName !== '' ? (
        <MainNavigation initialRouteName={initialRouteName} />
      ) : null}
      <FlashMessage position={'top'} />
      <Toast position="top" bottomOffset={20} />
    </View>
  );
};

export default App;
