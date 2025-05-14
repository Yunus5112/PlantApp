import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../App';

type HomePageProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const getStartedData = [
  { id: '1', title: 'How to identify plants easily with PlantApp?', imageUri: 'https://via.placeholder.com/280x180/92C952/FFFFFF?Text=Plant1' },
  { id: '2', title: 'Species and are the differ', imageUri: 'https://via.placeholder.com/280x180/77DD77/FFFFFF?Text=Plant2' },
];

const categoriesData = [
  { id: '1', name: 'Edible Plants', imageUri: 'https://via.placeholder.com/180x180/A2D2A2/000000?Text=Edible' },
  { id: '2', name: 'Ferns', imageUri: 'https://via.placeholder.com/180x180/8FBC8F/000000?Text=Ferns' },
  { id: '3', name: 'Cacti and Succulents', imageUri: 'https://via.placeholder.com/180x180/98FB98/000000?Text=Cacti' },
  { id: '4', name: 'Palms', imageUri: 'https://via.placeholder.com/180x180/90EE90/000000?Text=Palms' },
];

const HomePage = ({ navigation }: HomePageProps) => {
  const renderGetStartedItem = ({ item }: { item: typeof getStartedData[0] }) => (
    <TouchableOpacity style={styles.getStartedCard}>
      <Image source={{ uri: item.imageUri }} style={styles.getStartedCardImage} />
      <View style={styles.getStartedCardOverlay} />
      <Text style={styles.getStartedCardText}>{item.title}</Text>
    </TouchableOpacity>
  );

  const renderCategoryItem = ({ item }: { item: typeof categoriesData[0] }) => (
    <TouchableOpacity style={styles.categoryCard}>
      <Image source={{ uri: item.imageUri }} style={styles.categoryCardImage} />
      <View style={styles.categoryCardTextContainer}>
        <Text style={styles.categoryCardText}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.scrollViewContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.headerContainer}>
          <Text style={styles.greetingText}>Hi, plant lover!</Text>
          <Text style={styles.goodDayText}>Good Afternoon! 🌤️</Text>
        </View>

        <View style={styles.searchContainer}>
          <View style={styles.searchIconContainer}>
            <Text>🔍</Text>
          </View>
          <TextInput
            placeholder="Search for plants"
            placeholderTextColor="#aaa"
            style={styles.searchInput}
          />
        </View>

        <TouchableOpacity style={styles.premiumBanner} onPress={() => navigation.navigate('Paywall')}>
          <View style={styles.premiumBannerIconContainer}>
            <Text style={styles.premiumBannerIcon}>✉️</Text>
            <View style={styles.notificationBadge}>
              <Text style={styles.notificationBadgeText}>1</Text>
            </View>
          </View>
          <View style={styles.premiumBannerTextContainer}>
            <Text style={styles.premiumBannerTitle}>FREE Premium Available</Text>
            <Text style={styles.premiumBannerSubtitle}>Tap to upgrade your account!</Text>
          </View>
          <Text style={styles.premiumBannerArrow}>❯</Text>
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>Get Started</Text>
        <FlatList
          data={getStartedData}
          renderItem={renderGetStartedItem}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.getStartedList}
        />

        <FlatList
          data={categoriesData}
          renderItem={renderCategoryItem}
          keyExtractor={item => item.id}
          numColumns={2}
          columnWrapperStyle={styles.categoriesRow}
          scrollEnabled={false}
          contentContainerStyle={styles.categoriesList}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F7F9F7',
  },
  scrollViewContainer: {
    paddingBottom: 20,
  },
  headerContainer: {
    paddingHorizontal: 20,
    paddingTop: 25,
    paddingBottom: 15,
  },
  greetingText: {
    fontSize: 16,
    color: '#666',
  },
  goodDayText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#222',
  },
  searchContainer: {
    marginHorizontal: 20,
    marginBottom: 25,
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  searchIconContainer: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  premiumBanner: {
    backgroundColor: '#2C2C2C',
    borderRadius: 15,
    marginHorizontal: 20,
    marginBottom: 30,
    paddingVertical: 18,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  premiumBannerIconContainer: {
    position: 'relative',
    marginRight: 15,
    backgroundColor: '#4A4A4A',
    padding: 8,
    borderRadius: 20,
  },
  premiumBannerIcon: {
    fontSize: 18,
  },
  notificationBadge: {
    position: 'absolute',
    top: -3,
    right: -3,
    backgroundColor: 'red',
    borderRadius: 8,
    width: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationBadgeText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
  premiumBannerTextContainer: {
    flex: 1,
  },
  premiumBannerTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  premiumBannerSubtitle: {
    color: '#bbb',
    fontSize: 13,
    marginTop: 2,
  },
  premiumBannerArrow: {
    color: '#777',
    fontSize: 22,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginHorizontal: 20,
    marginBottom: 15,
  },
  getStartedList: {
    paddingLeft: 20,
    paddingRight: 5,
    marginBottom: 30,
  },
  getStartedCard: {
    width: 280,
    height: 180,
    borderRadius: 15,
    marginRight: 15,
    overflow: 'hidden',
    backgroundColor: '#ccc',
  },
  getStartedCardImage: {
    width: '100%',
    height: '100%',
  },
  getStartedCardOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.35)',
  },
  getStartedCardText: {
    position: 'absolute',
    bottom: 15,
    left: 15,
    right: 15,
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
  categoriesList: {
    paddingHorizontal: 15,
  },
  categoriesRow: {
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  categoryCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    width: '48%',
    aspectRatio: 0.9,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  categoryCardImage: {
    width: '100%',
    height: '75%',
  },
  categoryCardTextContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  categoryCardText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#2E7D32',
    textAlign: 'center',
  },
});

export default HomePage;