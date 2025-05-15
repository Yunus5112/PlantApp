/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'; // Added for custom button
import { Provider } from 'react-redux';
import store from './src/redux/store';

// Screens
import GetStartedScreen from './src/screens/GetStartedScreen';
import OnboardingFirstScreen from './src/screens/OnboardingFirstScreen';
import OnboardingSecondScreen from './src/screens/OnboardingSecondScreen';
import PaywallScreen from './src/screens/PaywallScreen';
import HomePage from './src/screens/HomePage';
import DiagnoseScreen from './src/screens/DiagnoseScreen';
import MyGardenScreen from './src/screens/MyGardenScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import ScanScreen from './src/screens/ScanScreen';

// Import SVG Icons
import HomeIcon from './src/assets/icon/home-icon.svg';
import HealthIcon from './src/assets/icon/health-icon.svg';
import ScanIcon from './src/assets/icon/scan-icon.svg';
import GardenIcon from './src/assets/icon/garden-icon.svg';
import ProfileIcon from './src/assets/icon/profile-icon.svg';

export type RootStackParamList = {
  GetStarted: undefined;
  OnboardingFirst: undefined;
  OnboardingSecond: undefined;
  Paywall: undefined;
  MainApp: undefined;
  ScanModal: undefined;
};

export type BottomTabParamList = {
  HomeTab: undefined;
  DiagnoseTab: undefined;
  ScanButton: undefined;
  MyGardenTab: undefined;
  ProfileTab: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<BottomTabParamList>();

const shadowStyle = {
  shadowColor: '#7F5DF0',
  shadowOffset: {
    width: 0,
    height: 10,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.5,
  elevation: 5,
};

const CustomTabBarButton = (props: any) => (
  <TouchableOpacity
    {...props}
    style={[
      props.style,
      styles.customButton,
    ]}
    onPress={props.onPress}
  >
    <ScanIcon width={30} height={30} fill={'#FFFFFF'} />
  </TouchableOpacity>
);


function MainAppTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: {
          position: 'absolute',
          bottom: 15,
          left: 10,
          right: 10,
          backgroundColor: '#ffffff',
          borderRadius: 15,
          height: 70,
          ...shadowStyle,
        },
        tabBarActiveTintColor: '#28AF6E',
        tabBarInactiveTintColor: '#BDBDBD',
      }}
    >
      <Tab.Screen 
        name="HomeTab" 
        component={HomePage} 
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <HomeIcon width={size} height={size} fill={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="Diagnose" 
        component={DiagnoseScreen} 
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <HealthIcon width={size} height={size} fill={color} />
          ),
        }}
      />
      <Tab.Screen
        name="ScanButton" 
        component={ScanScreen} 
        options={{
          headerShown: false,
          tabBarButton: (props) => (
            <CustomTabBarButton {...props} onPress={() => {
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore 
                 props.onPress?.(); 
              }}
            />
          ),
        }}
      />
      <Tab.Screen 
        name="MyGarden" 
        component={MyGardenScreen} 
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <GardenIcon width={size} height={size} fill={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <ProfileIcon width={size} height={size} fill={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="GetStarted" component={GetStartedScreen} />
          <Stack.Screen name="OnboardingFirst" component={OnboardingFirstScreen} />
          <Stack.Screen name="OnboardingSecond" component={OnboardingSecondScreen} />
          <Stack.Screen name="Paywall" component={PaywallScreen} />
          <Stack.Screen name="MainApp" component={MainAppTabs} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  customButton: {
    top: -20, 
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#28AF6E', 
    ...shadowStyle, 
    borderWidth: 4, 
    borderColor: '#F0F0F0', 
  },
});

export default App;
