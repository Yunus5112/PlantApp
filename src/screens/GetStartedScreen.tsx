import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../App';
import GetStartedPlantSvg from '../assets/svg/getstartedplantsvg.svg';
import ScanSvg from '../assets/svg/Scan.svg';
import { GetStartedTexts } from '../constants/GetStartedScreenTexts';
import { fontScale, scale, verticalScale } from '../utils/scaling';
import PrimaryButton from '../components/buttons/PrimaryButton';

type GetStartedScreenProps = NativeStackScreenProps<RootStackParamList, 'GetStarted'>;

const GetStartedScreen = ({ navigation }: GetStartedScreenProps) => {
  const textParts = {
    intro: "By tapping next, you are agreeing to PlantID ",
    terms: "Terms of Use",
    and: " & ",
    policy: "Privacy Policy",
    end: "."
  };

  const titlePart1 = "Welcome to ";
  const titlePart2 = "PlantApp";


  return (
    <LinearGradient colors={['#F8FAFF', '#FAFAFA']} style={styles.gradientContainer}>
      <SafeAreaView style={styles.safeAreaContent}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>
            {titlePart1}
            <Text style={styles.titleBoldPart}>{titlePart2}</Text>
            </Text>
          <Text style={styles.subtitle}>
            {GetStartedTexts.subtitle}
          </Text>
        </View>

        <View style={styles.imageContainer}>
          <GetStartedPlantSvg width={styles.plantImage.width} height={styles.plantImage.height} />
          <ScanSvg 
            width={styles.scanOverlay.width} 
            height={styles.scanOverlay.height} 
            style={styles.scanOverlay}
          />
          <Image source={require('../assets/images/sprey.png')} style={[styles.iconOverlay, styles.iconSprey]} />
          <Image source={require('../assets/images/sun.png')} style={[styles.iconOverlay, styles.iconSun]} />
          <Image source={require('../assets/images/damla.png')} style={[styles.iconOverlay, styles.iconDamla]} />
        </View>

        <View style={styles.buttonContainer}>
          <PrimaryButton 
            title={GetStartedTexts.button}
            onPress={() => navigation.navigate('OnboardingFirst')}
          />
        </View>
        <View style={styles.legalContainer}>
            <Text style={styles.legalText}>
                {textParts.intro}
                <Text style={styles.linkText}>{textParts.terms}</Text>
                {textParts.and}
                <Text style={styles.linkText}>{textParts.policy}</Text>
                {textParts.end}
            </Text>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
  },
  safeAreaContent: {
    flex: 1,
    justifyContent: 'space-between',
  },
  headerContainer: {
    alignItems: 'flex-start',
    paddingTop: verticalScale(59),
    paddingHorizontal: scale(24),
    
  },
  title: {
    fontSize: fontScale(28),
    fontFamily: 'Rubik',
    fontWeight: '600',
    color: '#13231B',
    textAlign: 'left',
    marginBottom: verticalScale(8),
  },
  titleBoldPart: {
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: fontScale(16),
    fontFamily: 'Rubik',
    fontWeight: '400',
    color: '#13231B',
    textAlign: 'left',
    marginBottom: verticalScale(30),
    lineHeight: fontScale(15),
    letterSpacing: 0.07,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plantImage: {
    width: scale(300),
    height: verticalScale(400),
  },
  scanOverlay: {
    position: 'absolute',
    width: '80%',
    height: '60%',
    resizeMode: 'contain',
    bottom: '35%',
  },
  iconOverlay: {
    position: 'absolute',
    width: scale(50),
    height: scale(50),
    resizeMode: 'contain',
  },
  iconSprey: {
    top: '20%',
    left: '10%',
    transform: [{ rotate: '-15deg' }],
  },
  iconSun: {
    top: '15%',
    right: '10%',
    transform: [{ rotate: '15deg' }],
  },
  iconDamla: {
    bottom: '25%',
    right: '15%',
  },
  buttonContainer: {
    alignItems: 'center',
    paddingBottom: verticalScale(10),
    paddingHorizontal: scale(20),
  },
  legalContainer: {
    alignItems: 'center',
    paddingBottom: verticalScale(30),
    paddingHorizontal: scale(20),
  },
  legalText: {
    fontSize: fontScale(11),
    color: '#597165B2',
    textAlign: 'center',
    marginEnd: scale(40),
    marginStart: scale(40),
    fontFamily: 'Rubik',
    fontWeight: '400',
    lineHeight: fontScale(15),
    letterSpacing: 0.07,
  },
  linkText: {
    textDecorationLine: 'underline',
    fontSize: fontScale(11),
    color: '#597165B2',
    fontFamily: 'Rubik',
    fontWeight: '400',
  },
});

export default GetStartedScreen;