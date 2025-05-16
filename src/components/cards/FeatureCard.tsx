import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale, fontScale } from '../../utils/scaling';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, subtitle }) => {
  return (
    <View style={styles.featureBox}>
      <View style={styles.featureIconContainer}>{icon}</View>
      <Text style={styles.featureTitle}>{title}</Text>
      <Text style={styles.featureSubtitle}>{subtitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  featureBox: {
    backgroundColor: '#23302A',
    borderRadius: moderateScale(14),
    padding: moderateScale(8),
    width: '41%',
    alignItems: 'flex-start',
    minHeight: verticalScale(80),
    marginHorizontal: scale(4),
  },
  featureIconContainer: {
    width: scale(48),
    height: scale(24),
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginBottom: verticalScale(2),
  },
  featureTitle: {
    color: '#FFFFFF',
    fontSize: fontScale(15),
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: verticalScale(2),
    marginTop: verticalScale(8),
  },
  featureSubtitle: {
    color: '#FFFFFF',
    fontSize: fontScale(12),
    textAlign: 'left',
    opacity: 0.8,
  },
});

export default FeatureCard;
