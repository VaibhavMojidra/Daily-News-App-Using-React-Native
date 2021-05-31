import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react'
import { darkModeColors, darkModeIcons, lightModeColors, lightModeIcons } from '../assets/stylesheets/masterStyleSheet';

const MyContext = React.createContext();

export const MyContextProvider = ({ children }) => {
    const [Colors, setColors] = useState(lightModeColors);
    const [Icons, setIcons] = useState(lightModeIcons);
    const [Country, setCountry] = useState({ countryName: 'INDIA', code: 'in' });
    const [Category, setCategory] = useState("general");
    const [IsDarkMode, setIsDarkMode] = useState("false");
    const [savedList, setSavedList] = useState([]);
    const [articleSaved, setArticleSaved] = useState(false);
    const [article, setArticle] = useState({});

    const setDarkMode = async (enable) => {
        if (enable) {
            setColors(darkModeColors);
            setIcons(darkModeIcons);
            await AsyncStorage.setItem('darkmode', "true");
        } else {
            setColors(lightModeColors);
            setIcons(lightModeIcons);
            await AsyncStorage.setItem('darkmode', "false");
        }
    }
    return <MyContext.Provider value={{ Colors, Icons, setDarkMode, Country, setCountry, Category, setCategory, IsDarkMode, setIsDarkMode, savedList, setSavedList, articleSaved, setArticleSaved, article, setArticle }}>
        {children}
    </MyContext.Provider>
}
export default MyContext;
