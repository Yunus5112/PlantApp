import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { ProfileTexts } from '../constants/ProfileScreenTexts';

const ProfileScreen = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>{ProfileTexts.title}</Text>
        <Text style={styles.subtext}>{ProfileTexts.subtitle}</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Paywall')}>
          <Text style={styles.buttonText}>{ProfileTexts.premiumButton}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF3E0',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#E65100',
    marginBottom: 15,
  },
  subtext: {
    fontSize: 18,
    color: '#F57C00',
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#F57C00',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  }
});

export default ProfileScreen; 