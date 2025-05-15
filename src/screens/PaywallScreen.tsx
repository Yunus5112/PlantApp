import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../App';
import { PaywallTexts } from '../constants/PaywallScreenTexts';
import PaywallBgSvg from '../assets/svg/paywallbg.svg';
import PaywallScanSvg from '../assets/svg/PaywallScan.svg';
import CloseIcon from '../assets/icon/close-icon.svg';
import PrimaryButton from '../components/buttons/PrimaryButton';
import { fontScale, scale, verticalScale, moderateScale } from '../utils/scaling';

type PaywallScreenProps = NativeStackScreenProps<RootStackParamList, 'Paywall'>;

const PaywallScreen = ({ navigation }: PaywallScreenProps) => {
  const [selectedPlan, setSelectedPlan] = useState<'yearly' | 'monthly'>('yearly');

  const features = [
    PaywallTexts.feature1,
    PaywallTexts.feature2,
    PaywallTexts.feature3,
    PaywallTexts.feature4,
  ];

  return (
    <ImageBackground source={require('../assets/svg/paywallbg.svg')} style={styles.backgroundImageStyle}> 
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.closeButtonContainer}>
            <CloseIcon width={scale(24)} height={scale(24)} fill="#FFFFFF" />
          </TouchableOpacity>

          <View style={styles.headerContainer}>
            <PaywallScanSvg width={scale(80)} height={scale(80)} style={styles.headerScanIcon}/>
            <Text style={styles.title}>{PaywallTexts.title}</Text>
            <Text style={styles.subtitle}>{PaywallTexts.subtitle}</Text>
          </View>

          <View style={styles.featuresContainer}>
            {features.map((feature, index) => (
              <View key={index} style={styles.featureBox}>
                <Text style={styles.featureText}>{feature}</Text>
              </View>
            ))}
          </View>

          <View style={styles.planSelectionContainer}>
            <TouchableOpacity 
              style={[styles.planOption, selectedPlan === 'monthly' && styles.selectedPlan]}
              onPress={() => setSelectedPlan('monthly')}
            >
              <Text style={styles.planTitle}>{PaywallTexts.monthlyPlan}</Text>
              <Text style={styles.planPrice}>{PaywallTexts.monthlyPrice}</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.planOption, styles.yearlyPlanOption, selectedPlan === 'yearly' && styles.selectedPlan]}
              onPress={() => setSelectedPlan('yearly')}
            >
              <View style={styles.badgeContainer}>
                <Text style={styles.badgeText}>{PaywallTexts.saveBadge}</Text>
              </View>
              <Text style={styles.planTitle}>{PaywallTexts.yearlyPlan}</Text>
              <Text style={styles.planPrice}>{PaywallTexts.yearlyPrice}</Text>
            </TouchableOpacity>
          </View>

          <PrimaryButton 
            title={PaywallTexts.ctaButton}
            onPress={() => navigation.navigate('MainApp')}
            style={styles.ctaButton}
            textStyle={styles.ctaButtonText}
          />

          <Text style={styles.legalTextSmall}>{PaywallTexts.subscriptionInfo}</Text>

          <View style={styles.footerLinksContainer}>
            <TouchableOpacity onPress={() => console.log('Terms of Use')}>
              <Text style={styles.footerLink}>{PaywallTexts.termsLink}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('Privacy Policy')}>
              <Text style={styles.footerLink}>{PaywallTexts.privacyLink}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('Restore Purchase')}>
              <Text style={styles.footerLink}>{PaywallTexts.restoreLink}</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImageStyle: {
    flex: 1,
    backgroundColor: '#10151D',
  },
  safeArea: {
    flex: 1,
  },
  scrollViewContent: {
    paddingBottom: verticalScale(30),
    alignItems: 'center',
  },
  closeButtonContainer: {
    position: 'absolute',
    top: verticalScale(20),
    right: scale(20),
    zIndex: 1,
  },
  headerContainer: {
    alignItems: 'center',
    marginTop: verticalScale(80), 
    marginBottom: verticalScale(30),
    paddingHorizontal: scale(20),
  },
  headerScanIcon: {
    marginBottom: verticalScale(15),
  },
  title: {
    fontSize: fontScale(26),
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: verticalScale(10),
  },
  subtitle: {
    fontSize: fontScale(16),
    color: '#B0B0B0',
    textAlign: 'center',
    marginBottom: verticalScale(30),
  },
  featuresContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingHorizontal: scale(10),
    marginBottom: verticalScale(30),
  },
  featureBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: moderateScale(12),
    paddingVertical: verticalScale(15),
    paddingHorizontal: scale(10),
    width: '46%',
    marginBottom: verticalScale(15),
    alignItems: 'center',
    minHeight: verticalScale(70),
    justifyContent: 'center',
  },
  featureText: {
    color: '#FFFFFF',
    fontSize: fontScale(14),
    textAlign: 'center',
  },
  planSelectionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: scale(20),
    marginBottom: verticalScale(25),
    width: '100%',
  },
  planOption: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: moderateScale(14),
    padding: moderateScale(18),
    width: '48%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'transparent',
  },
  yearlyPlanOption: {
  },
  selectedPlan: {
    borderColor: '#28AF6E', 
    backgroundColor: 'rgba(40, 175, 110, 0.25)',
  },
  badgeContainer: {
    backgroundColor: '#28AF6E',
    borderRadius: moderateScale(6),
    paddingHorizontal: scale(8),
    paddingVertical: verticalScale(3),
    position: 'absolute',
    top: verticalScale(-10),
    right: scale(10),
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: fontScale(10),
    fontWeight: 'bold',
  },
  planTitle: {
    color: '#FFFFFF',
    fontSize: fontScale(16),
    fontWeight: 'bold',
    marginBottom: verticalScale(8),
  },
  planPrice: {
    color: '#B0B0B0',
    fontSize: fontScale(14),
  },
  ctaButton: {
    backgroundColor: '#28AF6E', 
    width: '90%',
    marginTop: verticalScale(10),
    marginBottom: verticalScale(15),
    paddingVertical: verticalScale(18),
  },
  ctaButtonText: {
    fontSize: fontScale(18),
    fontWeight: 'bold',
  },
  legalTextSmall: {
    fontSize: fontScale(10),
    color: '#868686',
    textAlign: 'center',
    paddingHorizontal: scale(30),
    marginBottom: verticalScale(20),
    lineHeight: fontScale(14),
  },
  footerLinksContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    paddingBottom: verticalScale(20),
  },
  footerLink: {
    color: '#868686',
    fontSize: fontScale(11),
    textDecorationLine: 'underline',
  },
});

export default PaywallScreen; 