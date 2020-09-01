import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import SignInForm from './screens/SignInForm';
import SignUpForm from './screens/SignUpForm';
import SplashScreen from './screens/SplashScreen';
import FindParking from './screens/FindParking';
import MyBookings from './screens/MyBookings';
import MoreDetails from './screens/MoreDetails';
import PayNowScreen from './screens/PayNowScreen';
import CodeScreen from './screens/CodeScreen';
import SuccessfullyBooked from './screens/SuccessfullyBooked';
import Reviews from './screens/Reviews';
import OTPScreen from './screens/OTPScreen';
import SignInStack from './components/SignInStack';
import SignUpStack from './components/SignUpStack';
import MainStack from './components/MainStack';

export default function App() {
  const [loaded, error] = useFonts({
    'roboto-900': require('./assets/fonts/Roboto-Black.ttf'),
    'roboto-700': require('./assets/fonts/Roboto-Bold.ttf'),
    'roboto-500': require('./assets/fonts/Roboto-Medium.ttf'),
    'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'roboto-300': require('./assets/fonts/Roboto-Light.ttf'),
    'roboto-100': require('./assets/fonts/Roboto-Thin.ttf'),
  });
  if (!loaded) {
    return null;
  }
  return (
    // <SignInForm />
    // <SignUpForm />
    // <SignUp />
    // <SignIn />
    // <SplashScreen />
    // <FindParking />
    // <MyBookings />
    // <MoreDetails />
    // <PayNowScreen />
    // <CodeScreen />
    // <SuccessfullyBooked />
    // <Reviews />
    // <OTPScreen />
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}
