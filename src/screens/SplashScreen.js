import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useContext, useEffect } from 'react'
import { View, Text, Image } from 'react-native';
import MyContext from '../mycontext/MyContext';
import { CommonActions } from '@react-navigation/native';

const SplashScreen = ({ navigation }) => {
    const { Colors, setIsDarkMode, setCategory, setCountry, setDarkMode } = useContext(MyContext);
    useEffect(() => {
        navTo();
    }, [])
    const navTo = () => {
        AsyncStorage.multiGet(['country', 'category', 'darkmode'], (err, stores) => {
            let values = [];
            stores.map((result, i, store) => {
                values[i] = store[i][1];
            });
            if (values[0] != null) {
                setCountry(JSON.parse(values[0]));
            }
            if (values[1] != null) {
                setCategory(values[1]);
            }
            if (values[2] != null) {
                setIsDarkMode(values[2]);
                setDarkMode(values[2] === "true" ? true : false);
            }
            setTimeout(() => {
                navigation.dispatch(
                    CommonActions.reset({
                        index: 0,
                        routes: [
                            {
                                name: 'MainScreen',
                                params: {},
                            },
                        ],
                    })
                );
            }, 5000);
        })

    }
    return (
        <View style={{ backgroundColor: Colors.splashScreenBackgroudColor, flex: 1 }}>
            <View style={{ flex: 6 }}>
                <Image source={require('../assets/img/app_icon.gif')} style={{ width: '100%' }} />
            </View>
            <View style={{ flex: 2, alignItems: 'center' }}>
                <Text style={{ marginTop: 20, fontSize: 50, color: '#FDFDFD', fontWeight: 'bold' }}>Daily News</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'flex-end', flexDirection: 'row' }}>
                <Text style={{ marginBottom: 50, textAlign: 'center', flex: 1, fontSize: 22, color: '#FDFDFD' }}>Vaibhav Mojidra</Text>
            </View>
        </View>
    )
}

export default SplashScreen
