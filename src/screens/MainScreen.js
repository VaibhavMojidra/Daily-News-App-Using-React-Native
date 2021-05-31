import React, { useContext, useEffect, useState } from 'react'
import { View, Text, SafeAreaView, Platform, ScrollView } from 'react-native';
import ModeSwitch from '../components/ModeSwitch';
import MyContext from '../mycontext/MyContext';
import SearchBar from '../components/SearchBar';
import SearchButton from '../components/SearchButton';
import FilterButton from '../components/FilterButton';
import CountryAlert from '../components/filteralerts/CountryAlert';
import CountryFilter from '../components/filters/CountryFilter';
import CategoryAlert from '../components/filteralerts/CategoryAlert';
import CategoryFilter from '../components/filters/CategoryFilter';
import NewsLoader from '../components/NewsLoader';
import ShowListResult from '../components/ShowListResult';
import MyAPI from '../API/MyAPI';
import OptionAlert from '../components/OptionAlert';
import SavedButton from '../components/SavedButton';
import AsyncStorage from '@react-native-async-storage/async-storage';


const MainScreen = ({ navigation }) => {
  const { Colors, Country, Category, IsDarkMode, savedList, setArticleSaved, setArticle, setSavedList } = useContext(MyContext);
  const [searchVisible, setSearchVisible] = useState(false);
  const [filterVisible, setFilterVisible] = useState(false);
  const [country, setCountry] = useState(Country);
  const [category, setCategory] = useState(Category);
  const [news, setNews] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const [countryDialog, setCountryDialog] = useState(false);
  const [categoryDialog, setCategoryDialog] = useState(false);
  const [optionDialog, setOptionDialog] = useState(false);
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState(0);

  useEffect(() => {
    GetData("", country.code, category);
    AsyncStorage.getItem('saved').then(value => {
      if (value === null) {
        setSavedList([]);
      } else {
        setSavedList(JSON.parse(value));
      }
    }).catch(err => {
      console.log(err)
    });



  }, [])

  const onOptionPress = (url, title, description, urlToImage) => {
    setArticleSaved(false);
    let art = savedList.find(a => a.url === url);
    let isArtFound = art === undefined ? false : true;
    setArticleSaved(isArtFound);
    setArticle({ url, title, description, urlToImage });
    setOptionDialog(true);
  }
  const search = () => {
    GetData(query);
  }
  const filterData = (CountryCode, Categ) => {
    setQuery("")
    GetData("", CountryCode, Categ);
  }
  const GetData = async (q, CountryCode, Categ) => {
    setShowResult(false);
    MyAPI.get('/top-headlines', {
      params: {
        country: CountryCode,
        category: Categ,
        q,
        pageSize: 100,
      }
    }).then(response => {
      setNews(response.data.articles);
      setSearchResults(response.data.articles.length);
      setShowResult(true);
    }).catch(err => {
      setShowResult(true);
      console.error(error);
    });
  }

  const toggleSearchButton = () => {
    if (searchVisible) {
      setSearchVisible(false);
    } else {
      setSearchVisible(true);
    }
  }

  const toggleFilterButton = () => {
    if (filterVisible) {
      setFilterVisible(false);
    } else {
      setFilterVisible(true);
    }
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.primaryColor }}>
      <CountryAlert showDialog={countryDialog} setShowDialog={setCountryDialog} setCountry={setCountry} filterData={filterData} category={category} />
      <CategoryAlert showDialog={categoryDialog} setShowDialog={setCategoryDialog} setCategory={setCategory} filterData={filterData} country={country} />
      <OptionAlert setShowDialog={setOptionDialog} showDialog={optionDialog} />
      <View style={{ alignItems: 'center' }}>
        <View style={{ flexDirection: 'row', marginTop: Platform.OS === "android" ? 15 : 10 }}>
          <SearchButton toggleSearchButton={toggleSearchButton} searchVisible={searchVisible} />
          <FilterButton toggleFilterButton={toggleFilterButton} filterVisible={filterVisible} />
          <ModeSwitch isDarkModeEnabled={IsDarkMode === "true" ? true : false} />
          <SavedButton navigateToSaved={() => navigation.navigate("SavedScreen")} />
        </View>
      </View>

      <View>
        {searchVisible ? <SearchBar text={query} setText={setQuery} search={search} /> : null}
        {filterVisible ? <ScrollView horizontal style={{ paddingTop: 15 }}>
          <CountryFilter country={country} setCountryDialog={setCountryDialog} />
          <CategoryFilter category={category} setCategoryDialog={setCategoryDialog} />
        </ScrollView> : null}
      </View>
      {showResult ? (searchResults === 0 ? <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text style={{ color: Colors.primaryTextColor, fontSize: 23 }}>No result found</Text></View> : <ShowListResult news={news} navigation={navigation} onOptionPress={onOptionPress} />) : <NewsLoader />}

    </SafeAreaView>

  )
}

export default MainScreen
