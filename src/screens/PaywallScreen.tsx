import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../App';

type PaywallScreenProps = NativeStackScreenProps<RootStackParamList, 'Paywall'>;

const PaywallScreen = ({ navigation }: PaywallScreenProps) => {
  const features = [
    { icon: '📷', title: 'Unlimited', subtitle: 'Plant Identify' },
    { icon: '⚡️', title: 'Faster', subtitle: 'Process' },
    { icon: '📊', title: 'Data', subtitle: 'Plant Details' }, // Assuming third feature
  ];

  const plans = [
    { id: 'monthly', duration: '1 Month', price: '$2.99/month, auto renewable', selected: false },
    {
      id: 'yearly',
      duration: '1 Year',
      price: 'First 3 days free, then $529,99/year',
      save: 'Save 50%',
      selected: true,
    },
  ];

  return (
    <ImageBackground
      style={styles.backgroundImage}
      blurRadius={5}
    >
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
            <Text style={styles.closeButtonText}>✕</Text>
          </TouchableOpacity>

          <View style={styles.headerSection}>
            <Text style={styles.mainTitle}>PlantApp Premium</Text>
            <Text style={styles.subtitle}>Access All Features</Text>
          </View>

          <View style={styles.featuresSection}>
            {features.map((feature, index) => (
              <View key={index} style={styles.featureBox}>
                <Text style={styles.featureIcon}>{feature.icon}</Text>
                <Text style={styles.featureTitle}>{feature.title}</Text>
                <Text style={styles.featureSubtitle}>{feature.subtitle}</Text>
              </View>
            ))}
          </View>

          <View style={styles.plansSection}>
            {plans.map((plan) => (
              <TouchableOpacity
                key={plan.id}
                style={[styles.planBox, plan.selected && styles.selectedPlanBox]}
              >
                <View style={styles.planLeft}>
                  <View style={[styles.radioCircle, plan.selected && styles.selectedRadioCircle]}>
                    {plan.selected && <View style={styles.radioInnerCircle} />}
                  </View>
                  <View>
                    <Text style={[styles.planDuration, plan.selected && styles.selectedPlanText]}>
                      {plan.duration}
                    </Text>
                    <Text style={[styles.planPrice, plan.selected && styles.selectedPlanText]}>
                      {plan.price}
                    </Text>
                  </View>
                </View>
                {plan.save && (
                  <View style={styles.saveBadge}>
                    <Text style={styles.saveBadgeText}>{plan.save}</Text>
                  </View>
                )}
              </TouchableOpacity>
            ))}
          </View>

          <TouchableOpacity style={styles.ctaButton} onPress={() => navigation.navigate('Home')}>
            <Text style={styles.ctaButtonText}>Try free for 3 days</Text>
          </TouchableOpacity>

          <Text style={styles.legalText}>
            After the 3-day free trial period you'll be charged $274.99 per year unless you cancel before the trial expires. Yearly Subscription is Auto-Renewable
          </Text>

          <View style={styles.footerLinks}>
            <TouchableOpacity><Text style={styles.footerLinkText}>Terms</Text></TouchableOpacity>
            <Text style={styles.footerLinkSeparator}>•</Text>
            <TouchableOpacity><Text style={styles.footerLinkText}>Privacy</Text></TouchableOpacity>
            <Text style={styles.footerLinkSeparator}>•</Text>
            <TouchableOpacity><Text style={styles.footerLinkText}>Restore</Text></TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    backgroundColor: '#1A2B1A',
  },
  safeArea: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  scrollViewContent: {
    padding: 20,
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    padding: 10,
    zIndex: 1,
  },
  closeButtonText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  headerSection: {
    alignItems: 'center',
    marginTop: 60,
    marginBottom: 30,
  },
  plantImage: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  mainTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 18,
    color: '#ccc',
    marginBottom: 30,
  },
  featuresSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 30,
  },
  featureBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 15,
    padding: 15,
    alignItems: 'center',
    width: '30%',
  },
  featureIcon: {
    fontSize: 24,
    marginBottom: 5,
    color: '#fff',
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 3,
  },
  featureSubtitle: {
    fontSize: 12,
    color: '#ddd',
    textAlign: 'center',
  },
  plansSection: {
    width: '100%',
    marginBottom: 20,
  },
  planBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  selectedPlanBox: {
    borderColor: '#4CAF50',
    backgroundColor: 'rgba(76, 175, 80, 0.2)',
  },
  planLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#aaa',
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedRadioCircle: {
    borderColor: '#4CAF50',
  },
  radioInnerCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#4CAF50',
  },
  planDuration: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  planPrice: {
    fontSize: 14,
    color: '#ccc',
  },
  selectedPlanText: {
    color: '#fff',
  },
  saveBadge: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },
  saveBadgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  ctaButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 25,
    paddingVertical: 18,
    width: '100%',
    alignItems: 'center',
    marginBottom: 15,
  },
  ctaButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  legalText: {
    fontSize: 11,
    color: '#aaa',
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  footerLinks: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerLinkText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '500',
  },
  footerLinkSeparator: {
    color: '#fff',
    marginHorizontal: 8,
    fontSize: 13,
  },
});

export default PaywallScreen; 