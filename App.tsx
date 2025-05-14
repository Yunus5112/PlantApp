/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import GetStartedScreen from './src/screens/GetStartedScreen';
import OnboardingFirstScreen from './src/screens/OnboardingFirstScreen';
import OnboardingSecondScreen from './src/screens/OnboardingSecondScreen';
import PaywallScreen from './src/screens/PaywallScreen';
import HomePage from './src/screens/HomePage';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type RootStackParamList = {
  GetStarted: undefined;
  OnboardingFirst: undefined;
  OnboardingSecond: undefined;
  Paywall: undefined;
  Home: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="GetStarted" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="GetStarted" component={GetStartedScreen} />
            <Stack.Screen name="OnboardingFirst" component={OnboardingFirstScreen} />
            <Stack.Screen name="OnboardingSecond" component={OnboardingSecondScreen} />
            <Stack.Screen name="Paywall" component={PaywallScreen} />
            <Stack.Screen name="Home" component={HomePage} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
