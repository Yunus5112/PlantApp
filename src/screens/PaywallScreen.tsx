import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/MainStackNavigator';
import { PaywallTexts } from '../constants/PaywallScreenTexts';
import PayWallBackGroundSvg from '../assets/svg/PayWallBackgroundSvg.svg';
import PayWallScanSvg from '../assets/svg/PayWallScan.svg';
import CloseIcon from '../assets/icon/close-icon.svg';
import PrimaryButton from '../components/buttons/PrimaryButton';
import { fontScale, scale, verticalScale, moderateScale } from '../utils/scaling';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ScanIcon from '../assets/icon/scan-icon.svg';
import FasterIcon from '../assets/icon/faster-icon.svg';
import DetailedIcon from '../assets/icon/scan-icon.svg';

import FeatureCard from '../components/cards/FeatureCard';
import PlanOptionCard from '../components/cards/PlanOptionCard';
import FooterLegalLinks from '../components/cards/FooterLegalLinks';

type PaywallScreenProps = NativeStackScreenProps<RootStackParamList, 'Paywall'>;

const featuresData = [
  {
    id: '1',
    icon: <ScanIcon width={scale(24)} height={scale(24)} fill="#FFFFFF" />,
    title: 'Unlimited',
    subtitle: 'Plant Identify',
  },
  {
    id: '2',
    icon: <FasterIcon width={scale(24)} height={scale(24)} fill="#FFFFFF" />,
    title: 'Faster',
    subtitle: 'Process',
  },
  {
    id: '3',
    icon: <DetailedIcon width={scale(24)} height={scale(24)} fill="#FFFFFF" />,
    title: 'Detailed',
    subtitle: 'Plant Care',
  },
];

const PaywallScreen = ({ navigation }: PaywallScreenProps) => {
  const [selectedPlan, setSelectedPlan] = useState<'yearly' | 'monthly'>('yearly');
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />

      <PayWallBackGroundSvg width={scale(380)}  style={styles.backgroundSvg} />

      <TouchableOpacity
        onPress={() => navigation.navigate('MainApp')}
        style={[
          styles.closeButtonContainer,
          { top: insets.top + verticalScale(15) },
        ]}
      >
        <CloseIcon width={scale(12)} height={scale(12)} fill="#FFFFFF" />
      </TouchableOpacity>

      <View style={[styles.contentContainer, { paddingTop: insets.top }]}>
        <View style={styles.scanFrameContainer}>
          <PayWallScanSvg width={scale(350)} height={scale(350)} style={styles.scanSvg} />

          <View style={styles.headerTextContainer}>
            <Text style={styles.title}>
              <Text style={styles.titleBold}>PlantApp</Text>
              <Text style={styles.titleRegular}> Premium</Text>
            </Text>
            <Text style={styles.subtitle}>Access All Features</Text>
          </View>
        </View>

        <View style={styles.featuresContainer}>
          {featuresData.map((feature) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              subtitle={feature.subtitle}
            />
          ))}
        </View>

        <View style={styles.planSelectionContainer}>
          <PlanOptionCard
            planTitle="1 Month"
            planPrice="$2.99/month, auto renewable"
            isSelected={selectedPlan === 'monthly'}
            onPress={() => setSelectedPlan('monthly')}
          />
          <PlanOptionCard
            planTitle="1 Year"
            planPrice="First 3 days free, then $29.99/year"
            isSelected={selectedPlan === 'yearly'}
            onPress={() => setSelectedPlan('yearly')}
            badgeText={PaywallTexts.saveBadge}
          />
        </View>

        <PrimaryButton
          title={PaywallTexts.ctaButton}
          onPress={() => navigation.navigate('MainApp')}
          style={styles.ctaButton}
          textStyle={styles.ctaButtonText}
        />

        <Text style={styles.legalTextSmall}>
          {PaywallTexts.subscriptionInfo}
        </Text>

        <View style={styles.footerSectionContainer}>
          <FooterLegalLinks />
        </View>

        <View style={styles.indicatorContainer}>
          <View style={styles.indicator} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101D18',
  },
  backgroundSvg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 1,
    opacity: 0.5,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: scale(20),
    paddingBottom: verticalScale(20),
    justifyContent: 'space-between',
    zIndex: 2,
  },
  closeButtonContainer: {
    position: 'absolute',
    right: scale(20),
    zIndex: 10,
    padding: moderateScale(5),
  },
  scanFrameContainer: {
    alignItems: 'center',
    marginTop: verticalScale(40),
  },
  scanSvg: {
    alignSelf: 'center',
  },
  headerTextContainer: {
    alignItems: 'flex-start',
    marginTop: verticalScale(-120),
  },
  title: {
    fontSize: fontScale(24),
    color: '#FFFFFF',
    textAlign: 'left',
    marginBottom: verticalScale(5),
  },
  titleBold: {
    fontWeight: 'bold',
  },
  titleRegular: {
    fontWeight: 'normal',
  },
  subtitle: {
    fontSize: fontScale(17),
    color: '#FFFFFF',
    opacity: 0.8,
    textAlign: 'left',
  },
  featuresContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: verticalScale(10),
    marginTop: verticalScale(10),
  },
  planSelectionContainer: {
    marginBottom: verticalScale(8),
  },
  ctaButton: {
    backgroundColor: '#28AF6E',
    marginBottom: verticalScale(5),
    paddingVertical: verticalScale(16),
    borderRadius: moderateScale(12),
    width: '100%',
  },
  ctaButtonText: {
    fontSize: fontScale(16),
    fontWeight: 'bold',
    color: '#FFFFFF',
    fontFamily: 'Rubik',
    textAlign: 'center',
  },
  legalTextSmall: {
    fontSize: fontScale(9),
    color: '#FFFFFF',
    opacity: 0.6,
    textAlign: 'center',
    marginBottom: verticalScale(5),
    lineHeight: fontScale(16),
  },
  footerSectionContainer: {
    marginBottom: verticalScale(15),
  },
  indicatorContainer: {
    alignItems: 'center',
  },
  indicator: {
    width: scale(40),
    height: verticalScale(4),
    backgroundColor: '#FFFFFF',
    opacity: 0.5,
    borderRadius: moderateScale(2),
  },
});

export default PaywallScreen;
