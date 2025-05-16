import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { scale, verticalScale, moderateScale, fontScale } from '../../utils/scaling'; // Adjust path if needed

interface PlanOptionCardProps {
  planTitle: string;
  planPrice: string;
  isSelected: boolean;
  onPress: () => void;
  badgeText?: string;
}

const PlanOptionCard: React.FC<PlanOptionCardProps> = ({
  planTitle,
  planPrice,
  isSelected,
  onPress,
  badgeText,
}) => {
  return (
    <TouchableOpacity
      style={[styles.planOption, isSelected && styles.selectedPlan]}
      onPress={onPress}
    >
      <View style={styles.radioContainer}>
        <View style={[styles.radioOuterCircle, isSelected && styles.radioOuterSelected]}>
          {isSelected && <View style={styles.radioInnerCircle} />}
        </View>
      </View>
      <View style={styles.planTextContainer}>
        <Text style={styles.planTitleText}>{planTitle}</Text>
        <Text style={styles.planPriceText}>{planPrice}</Text>
      </View>
      {badgeText && (
        <View style={styles.badgeContainer}>
          <Text style={styles.badgeText}>{badgeText}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  planOption: {
    backgroundColor: '#23302A',
    borderRadius: moderateScale(14),
    padding: moderateScale(15),
    marginBottom: verticalScale(8),
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'transparent',
    position: 'relative',
  },
  selectedPlan: {
    borderColor: '#28AF6E',
    backgroundColor: '#28AF6E33',
  },
  radioContainer: {
    marginRight: scale(10),
  },
  radioOuterCircle: {
    width: scale(24),
    height: scale(24),
    borderRadius: scale(12),
    borderWidth: 2,
    borderColor: '#5A5A5A',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3A3A3C',
  },
  radioOuterSelected: {
    borderColor: '#28AF6E',
    backgroundColor: '#28AF6E',
  },
  radioInnerCircle: {
    width: scale(10),
    height: scale(10),
    borderRadius: scale(5),
    backgroundColor: '#FFFFFF',
  },
  planTextContainer: {
    marginLeft: scale(4),
    flex: 1,
  },
  planTitleText: {
    color: '#FFFFFF',
    fontSize: fontScale(16),
    fontWeight: 'bold',
    marginBottom: verticalScale(4),
  },
  planPriceText: {
    color: '#FFFFFF',
    opacity: 0.7,
    fontSize: fontScale(13),
  },
  badgeContainer: {
    backgroundColor: '#28AF6E',
    borderTopRightRadius: moderateScale(12),
    borderBottomLeftRadius: moderateScale(20),
    paddingHorizontal: scale(10),
    paddingVertical: verticalScale(6),
    position: 'absolute',
    right: 0,
    top: 0,
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: fontScale(12),
    fontWeight: 'bold',
  },
});

export default PlanOptionCard;
