import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../App';

type OnboardingFirstScreenProps = NativeStackScreenProps<RootStackParamList, 'OnboardingFirst'>;

const OnboardingFirstScreen = ({ navigation }: OnboardingFirstScreenProps) => {
  const totalDots = 3;
  const activeDotIndex = 0;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Take a photo to identify the plant!</Text>
      </View>

      <View style={styles.imageContainer}>
        {/* Placeholder for image - e.g., phone with camera view */}
        {/* <Image source={require('../assets/onboarding_1_image.png')} style={styles.onboardingImage} /> */}
      </View>

      <View style={styles.footerContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('OnboardingSecond')}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0F7FA',
    justifyContent: 'space-between',
  },
  headerContainer: {
    alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2E7D32',
    textAlign: 'center',
    marginBottom: 30,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  onboardingImage: {
    width: 300,
    height: 450,
    resizeMode: 'contain',
  },
  footerContainer: {
    alignItems: 'center',
    paddingBottom: 30,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    paddingHorizontal: 120,
    borderRadius: 25,
    marginBottom: 20,
    width: '90%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#2E7D32',
  },
  inactiveDot: {
    backgroundColor: '#BDBDBD',
  },
});

export default OnboardingFirstScreen;