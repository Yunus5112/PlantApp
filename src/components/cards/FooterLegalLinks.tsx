import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { scale, fontScale } from '../../utils/scaling';
import { PaywallTexts } from '../../constants/PaywallScreenTexts';

const FooterLegalLinks: React.FC = () => {
  return (
    <View style={styles.footerLinksContainer}>
      <TouchableOpacity onPress={() => console.log('Terms of Use')}>
        <Text style={styles.footerLink}>{PaywallTexts.termsLink.replace(' of Use', '')}</Text>
      </TouchableOpacity>
      <Text style={styles.footerDot}>•</Text>
      <TouchableOpacity onPress={() => console.log('Privacy Policy')}>
        <Text style={styles.footerLink}>{PaywallTexts.privacyLink.replace(' Policy', '')}</Text>
      </TouchableOpacity>
      <Text style={styles.footerDot}>•</Text>
      <TouchableOpacity onPress={() => console.log('Restore Purchase')}>
        <Text style={styles.footerLink}>{PaywallTexts.restoreLink.replace(' Purchase', '')}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footerLinksContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    // marginBottom: verticalScale(15), // This will be handled by PaywallScreen if needed
  },
  footerLink: {
    color: '#FFFFFF',
    fontSize: fontScale(11),
    opacity: 0.7,
  },
  footerDot: {
    color: '#FFFFFF',
    opacity: 0.5,
    paddingHorizontal: scale(8),
  },
});

export default FooterLegalLinks;
