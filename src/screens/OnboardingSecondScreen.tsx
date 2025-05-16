import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../App';
import Onboarding2Svg from '../assets/svg/Onboarding2.svg';
import Onboarding2SecondSvg from '../assets/svg/Onboarding2Second.svg';
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
          <Onboarding2Svg
            width={styles.onboardingImage.width}
            height={styles.onboardingImage.height}
            style={styles.onboardingImage}
          />
          <Onboarding2SecondSvg
            width={styles.floatingCardsImage.width}
            height={styles.floatingCardsImage.height}
            style={styles.floatingCardsImage}
          />
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
    position: 'relative',
  },
  onboardingImage: {
    width: scale(243),
    height: verticalScale(525),
    zIndex: 0,
  },
  floatingCardsImage: {
    position: 'absolute',
    width: scale(155),
    height: verticalScale(170),
    top: '15%',
    right: '5%',
    zIndex: 1,
  },
  footerContainer: {
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
    backgroundColor: '#28AF6E',
  },
  inactiveDot: {
    backgroundColor: '#BDBDBD',
  },
});

export default OnboardingSecondScreen;
