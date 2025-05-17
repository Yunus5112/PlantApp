import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/MainStackNavigator';
import Onboarding2Svg from '../assets/svg/Onboarding2.svg';
import Onboarding2SecondSvg from '../assets/svg/Onboarding2Second.svg';
import PhoneBodySvg from '../assets/svg/PhoneBody.svg';
import Onboarding2BgSvg from '../assets/svg/Onboardin2Bg.svg';
import { OnboardingSecondTexts } from '../constants/OnboardingSecondScreenTexts';
import PrimaryButton from '../components/buttons/PrimaryButton';
import { fontScale, scale, verticalScale } from '../utils/scaling';

type OnboardingSecondScreenProps = NativeStackScreenProps<RootStackParamList, 'OnboardingSecond'>;

const OnboardingSecondScreen = ({ navigation }: OnboardingSecondScreenProps) => {
  const totalDots = 3;
  const activeDotIndex = 1;

  return (
    <LinearGradient colors={['#F8FAFF', '#FAFAFA']} style={styles.gradientContainer}>
      <SafeAreaView style={styles.safeAreaContent}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>
            {OnboardingSecondTexts.titlePart1}<Text style={styles.titleBold}>{OnboardingSecondTexts.titleBold}</Text>
          </Text>
        </View>

        <View style={styles.imageContainer}>
          <View style={styles.svgCanvas}>
            <Onboarding2BgSvg
              width={styles.onboardingBgImage.width}
              height={styles.onboardingBgImage.height}
              style={styles.onboardingBgImage}
            />
            <PhoneBodySvg
              width={styles.phoneBodyImage.width}
              height={styles.phoneBodyImage.height}
              style={styles.phoneBodyImage}
            />
            <View style={styles.onboardingImageWrapper}>
              <Onboarding2Svg
                width="100%"
                height="100%"
              />
            </View>
            <Onboarding2SecondSvg
              width={styles.floatingCardsImage.width}
              height={styles.floatingCardsImage.height}
              style={styles.floatingCardsImage}
            />
          </View>
        </View>

        <View style={styles.footerContainer}>
          <PrimaryButton
            title={OnboardingSecondTexts.button}
            onPress={() => navigation.navigate('Paywall')}
          />
          <View style={styles.paginationContainer}>
            {Array.from({ length: totalDots }).map((_, index) => (
              <View
                key={index}
                style={[styles.dot, index === activeDotIndex ? styles.activeDot : styles.inactiveDot]}
              />
            ))}
          </View>
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
    paddingTop: verticalScale(10),
    paddingHorizontal: scale(10),
  },
  title: {
    fontSize: fontScale(28),
    fontWeight: '500',
    color: '#13231B',
    textAlign: 'left',
    marginBottom: verticalScale(30),
    paddingHorizontal:scale(20),
  },
  titleBold: {
    fontWeight: 'bold',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: verticalScale(50),
  },
  svgCanvas: {
    position: 'relative',
    width: scale(350),
    height: verticalScale(550),
    alignItems: 'center',
    justifyContent: 'center',
  },
  onboardingBgImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 0,
    opacity: 0.8,
  },
  phoneBodyImage: {
    position: 'absolute',
    width: scale(270),
    height: verticalScale(450),
    zIndex: 1,
  },
  onboardingImageWrapper: {
    width: scale(243),
    height: verticalScale(425),
    position: 'absolute',
    zIndex: 2,
    borderRadius: scale(30),
    overflow: 'hidden',
  },
  floatingCardsImage: {
    position: 'absolute',
    width: scale(155),
    height: verticalScale(170),
    top: '5%',
    right: '-5%',
    zIndex: 3,
  },
  footerContainer: {
    alignItems: 'center',
    paddingBottom: verticalScale(30),
    paddingHorizontal: scale(20),
    zIndex: 6,
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
    backgroundColor: '#28AF6E',
  },
  inactiveDot: {
    backgroundColor: '#BDBDBD',
  },
});

export default OnboardingSecondScreen;
