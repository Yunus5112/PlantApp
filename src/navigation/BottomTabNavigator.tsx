import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity, StyleSheet, View } from 'react-native';

// Screens
import HomePage from '../screens/HomePage';
import DiagnoseScreen from '../screens/DiagnoseScreen';
import MyGardenScreen from '../screens/MyGardenScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ScanScreen from '../screens/ScanScreen';

// Import SVG Icons
import HomeIcon from '../assets/icon/home-icon.svg';
import HealthIcon from '../assets/icon/health-icon.svg';
import ScanIcon from '../assets/icon/scan-icon.svg';
import ScanBg from '../assets/svg/ScanBg.svg';
import GardenIcon from '../assets/icon/garden-icon.svg';
import ProfileIcon from '../assets/icon/profile-icon.svg';

export type BottomTabParamList = {
  Home: undefined;
  Diagnose: undefined;
  ScanButton: undefined;
  MyGarden: undefined;
  Profile: undefined;
};

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
  <View style={styles.customButtonContainer}>
    <ScanBg width={60} height={60} style={styles.scanBg} />
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
  </View>
);


export default function BottomTabNavigator() {
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
          backgroundColor: '#FFFFFF',
          borderRadius: 15,
          height: 70,
          ...shadowStyle,
        },
        tabBarActiveTintColor: '#28AF6E',
        tabBarInactiveTintColor: '#BDBDBD',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          headerShown: false,
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({ color, size }) => (
            <HomeIcon width={size} height={size} fill={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Diagnose"
        component={DiagnoseScreen}
        options={{
          headerShown: false,
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({ color, size }) => (
            <HealthIcon width={size} height={size} fill={color} />
          ),
        }}
      />
      <Tab.Screen
        name="ScanButton"
        component={ScanScreen}
        options={{
          headerShown: false,
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarButton: (props) => (
            <CustomTabBarButton {...props} onPress={() => {
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
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({ color, size }) => (
            <GardenIcon width={size} height={size} fill={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({ color, size }) => (
            <ProfileIcon width={size} height={size} fill={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  customButtonContainer: {
    alignItems: 'center',
    position: 'relative',
  },
  scanBg: {
    position: 'absolute',
    top: -25,
    zIndex: 0,
  },
  customButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    height: 70,
    borderRadius: 35,
    zIndex: 1,
  },
});
