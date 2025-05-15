import React, { useEffect, useState } from 'react';
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
  Dimensions,
} from 'react-native';
import type { CompositeScreenProps } from '@react-navigation/native';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList, BottomTabParamList } from '../../App';
import type { PlantCategory, ApiResponse as CategoriesApiResponse, Question, QuestionsApiResponse } from '../types';
import HomePageLeftImageSvg from '../assets/svg/HomePageLeftImage.svg';
import HomePageRightImageSvg from '../assets/svg/HomePageRightImage.svg';
import { HomePageTexts } from '../constants/HomePageTexts';

type HomePageProps = CompositeScreenProps<
  BottomTabScreenProps<BottomTabParamList, 'HomeTab'>,
  NativeStackScreenProps<RootStackParamList>
>;

const { width } = Dimensions.get('window');

const HomePage = ({ navigation }: HomePageProps) => {
  const [getStartedData, setGetStartedData] = useState<Question[]>([]);
  const [categoriesData, setCategoriesData] = useState<PlantCategory[]>([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch('https://dummy-api-jtg6bessta-ey.a.run.app/getQuestions');
        const data: QuestionsApiResponse = await response.json();
        data.sort((a, b) => a.order - b.order);
        setGetStartedData(data);
      } catch (error) {
        console.error("Failed to fetch questions:", error);
      }
    };

    const fetchCategories = async () => {
      try {
        const response = await fetch('https://dummy-api-jtg6bessta-ey.a.run.app/getCategories');
        const data: CategoriesApiResponse = await response.json();
        data.data.sort((a, b) => a.rank - b.rank);
        setCategoriesData(data.data);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };

    fetchQuestions();
    fetchCategories();
  }, []);

  const renderGetStartedItem = ({ item }: { item: Question }) => (
    <TouchableOpacity style={styles.getStartedCard} onPress={() => console.log('Navigate to:', item.uri)}>
      <Image source={{ uri: item.image_uri }} style={styles.getStartedCardImage} />
      <View style={styles.getStartedCardOverlay} />
      <Text style={styles.getStartedCardText}>{item.title}</Text>
    </TouchableOpacity>
  );

  const renderCategoryItem = ({ item }: { item: PlantCategory }) => (
    <TouchableOpacity style={styles.categoryCard}>
      <Image source={{ uri: item.image.url }} style={styles.categoryCardImage} />
      <View style={styles.categoryCardTextContainer}>
        <Text style={styles.categoryCardText}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.headerContainer}>
          <Text style={styles.greetingText}>{HomePageTexts.greeting}</Text>
          <Text style={styles.timeText}>{HomePageTexts.timeGreeting}</Text>
        </View>

        <View style={styles.searchContainer}>
          <View style={styles.searchIconContainer}>
            <Text>{HomePageTexts.searchIconFallback}</Text>
          </View>
          <TextInput
            placeholder={HomePageTexts.searchPlaceholder}
            placeholderTextColor="#AFAFAF"
            style={styles.searchInput}
            value={searchText}
            onChangeText={setSearchText}
          />
          <HomePageLeftImageSvg style={styles.leftSvg} />
          <HomePageRightImageSvg style={styles.rightSvg} />
        </View>

        <TouchableOpacity style={styles.premiumBanner} onPress={() => navigation.navigate('Paywall')}>
          <View style={styles.premiumBannerIconContainer}>
            <Text style={styles.premiumBannerIcon}>{HomePageTexts.premiumIconFallback}</Text>
            <View style={styles.notificationBadge}>
              <Text style={styles.notificationBadgeText}>{HomePageTexts.premiumNotification}</Text>
            </View>
          </View>
          <View style={styles.premiumBannerTextContainer}>
            <Text style={styles.premiumBannerTitle}>{HomePageTexts.premiumTitle}</Text>
            <Text style={styles.premiumBannerSubtitle}>{HomePageTexts.premiumSubtitle}</Text>
          </View>
          <Text style={styles.premiumBannerArrow}>{HomePageTexts.premiumArrow}</Text>
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>{HomePageTexts.getStartedSectionTitle}</Text>
        <FlatList
          data={getStartedData}
          renderItem={renderGetStartedItem}
          keyExtractor={item => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.getStartedList}
        />

        <Text style={styles.sectionTitle}>{HomePageTexts.categoriesSectionTitle}</Text>
        <FlatList
          data={categoriesData}
          renderItem={renderCategoryItem}
          keyExtractor={item => item.id.toString()}
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
  container: {
    flex: 1,
    backgroundColor: '#F4F6F8',
  },
  headerContainer: {
    backgroundColor: '#FFFFFF',
    paddingBottom: 20,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    position: 'relative',
    overflow: 'hidden',
  },
  leftSvg: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  rightSvg: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  greetingText: {
    fontSize: 16,
    color: '#13231B',
  },
  timeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#13231B',
  },
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F2F5',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginTop: 15,
    height: 50,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  searchContainer: {
    marginHorizontal: 20,
    marginBottom: 25,
    backgroundColor: '#fff',
    borderRadius: 12,
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
    color: '#F5C25B',
    fontSize: 16,
    fontWeight: 'bold',
  },
  premiumBannerSubtitle: {
    color: '#F5C25B',
    fontSize: 13,
    marginTop: 2,
  },
  premiumBannerArrow: {
    color: '#D0B070',
    fontSize: 22,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#13231B',
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
    fontSize: 15,
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
    fontSize: 16,
    fontWeight: 'bold',
    color: '#13231B',
    textAlign: 'center',
  },
});

export default HomePage;