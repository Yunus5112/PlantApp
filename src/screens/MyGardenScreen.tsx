import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { MyGardenTexts } from '../constants/MyGardenScreenTexts';

const MyGardenScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>{MyGardenTexts.title}</Text>
        <Text style={styles.subtext}>{MyGardenTexts.subtitle}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0F2F1',
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
    color: '#00695C',
    marginBottom: 15,
  },
  subtext: {
    fontSize: 18,
    color: '#00897B',
    textAlign: 'center',
  },
});

export default MyGardenScreen;
