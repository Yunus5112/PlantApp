import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { DiagnoseTexts } from '../constants/DiagnoseScreenTexts';

const DiagnoseScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>{DiagnoseTexts.title}</Text>
        <Text style={styles.subtext}>{DiagnoseTexts.subtitle}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4C3',
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
    color: '#558B2F',
    marginBottom: 15,
  },
  subtext: {
    fontSize: 18,
    color: '#7CB342',
    textAlign: 'center',
  },
});

export default DiagnoseScreen; 