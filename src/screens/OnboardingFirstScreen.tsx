import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../App';
import PhoneSvg from '../assets/svg/Phone.svg';
import ScanSvg from '../assets/svg/Scan.svg';
import GetStartedPlantSvg from '../assets/svg/getstartedplantsvg.svg';
import { OnboardingFirstTexts } from '../constants/OnboardingFirstScreenTexts';
import PrimaryButton from '../components/buttons/PrimaryButton';
import { fontScale, scale, verticalScale } from '../utils/scaling';

type OnboardingFirstScreenProps = NativeStackScreenProps<RootStackParamList, 'OnboardingFirst'>;

const OnboardingFirstScreen = ({ navigation }: OnboardingFirstScreenProps) => {
  const totalDots = 3;
  const activeDotIndex = 0;

  return (
    <LinearGradient colors={['#F8FAFF', '#FAFAFA']} style={styles.gradientContainer}>
      <SafeAreaView style={styles.safeAreaContent}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>
            {OnboardingFirstTexts.titlePart1}
            <Text style={styles.highlightIdentify}>{OnboardingFirstTexts.titleHighlight}</Text>
            {OnboardingFirstTexts.titlePart2}
          </Text>
        </View>

        <View style={styles.imageContainer}>
          <GetStartedPlantSvg 
            width={styles.backgroundImagePlant.width} 
            height={styles.backgroundImagePlant.height} 
            style={styles.backgroundImagePlant} 
          />
          <PhoneSvg 
            width={styles.phoneImage.width} 
            height={styles.phoneImage.height} 
            style={styles.phoneImage} 
          />
          <ScanSvg 
            width={styles.scanOverlay.width} 
            height={styles.scanOverlay.height} 
            style={styles.scanOverlay} 
          />
        </View>

        <View style={styles.buttonContainer}>
          <PrimaryButton
            title={OnboardingFirstTexts.button}
            onPress={() => navigation.navigate('OnboardingSecond')}
          />
        </View>
         <View style={styles.paginationContainer}>
            {Array.from({ length: totalDots }).map((_, index) => (
              <View
                key={index}
                style={[styles.dot, index === activeDotIndex ? styles.activeDot : styles.inactiveDot]}
              />
            ))}
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
    alignItems: 'center',
    paddingTop: verticalScale(50),
    paddingHorizontal: scale(20),
  },
  title: {
    fontSize: fontScale(28),
    fontWeight: '500',
    color: '#13231B',
    textAlign: 'center',
    marginBottom: verticalScale(30),
  },
  highlightIdentify: {
    color: '#1B5E20',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  backgroundImagePlant: {
    position: 'absolute',
    width: scale(280),
    height: verticalScale(450),
    top: '-20%',
    zIndex: 0,
  },
  phoneImage: {
    position: 'absolute',
    width: scale(300),
    height: verticalScale(360),
    resizeMode: 'contain',
    zIndex: 1,
    top: '-5%',
  },
  scanOverlay: {
    position: 'absolute',
    width: '60%', 
    height: '50%',
    top: '25%',
    zIndex: 2,
  },
  buttonContainer: {
    alignItems: 'center',
    paddingBottom: verticalScale(30),
    paddingHorizontal: scale(20),
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: verticalScale(20),
  },
  dot: {
    width: scale(8),
    height: scale(8),
    borderRadius: scale(4),
    marginHorizontal: scale(4),
  },
  activeDot: {
    backgroundColor: '#2E7D32',
  },
  inactiveDot: {
    backgroundColor: '#BDBDBD',
  },
});

export default OnboardingFirstScreen;