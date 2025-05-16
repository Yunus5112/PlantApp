import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import GetStartedScreen from '../screens/GetStartedScreen';
import OnboardingFirstScreen from '../screens/OnboardingFirstScreen';
import OnboardingSecondScreen from '../screens/OnboardingSecondScreen';
import PaywallScreen from '../screens/PaywallScreen';

// Navigators
import BottomTabNavigator, { BottomTabParamList } from './BottomTabNavigator';
import { NavigatorScreenParams } from '@react-navigation/native';

export type RootStackParamList = {
  GetStarted: undefined;
  OnboardingFirst: undefined;
  OnboardingSecond: undefined;
  Paywall: undefined;
  MainApp: NavigatorScreenParams<BottomTabParamList>;
  ScanModal: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function MainStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="GetStarted" component={GetStartedScreen} />
      <Stack.Screen name="OnboardingFirst" component={OnboardingFirstScreen} />
      <Stack.Screen name="OnboardingSecond" component={OnboardingSecondScreen} />
      <Stack.Screen name="Paywall" component={PaywallScreen} />
      <Stack.Screen name="MainApp" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
}
