import React, { useContext } from 'react'
import { View, Text, Modal, TouchableOpacity, Image, ScrollView } from 'react-native'
import MyContext from '../../mycontext/MyContext';
import { Shadow, Neomorph } from 'react-native-neomorph-shadows';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CountryAlert = ({ showDialog = false, setShowDialog, setCountry, filterData, category }) => {
    const countryArray = [
        { countryName: 'Argentina', code: 'ar' },
        { countryName: 'Australia', code: 'au' },
        { countryName: 'Austria', code: 'at' },
        { countryName: 'Belgium', code: 'be' },
        { countryName: 'Brazil', code: 'br' },
        { countryName: 'Bulgaria', code: 'bg' },
        { countryName: 'Canada', code: 'ca' },
        { countryName: 'China', code: 'cn' },
        { countryName: 'Colombia', code: 'co' },
        { countryName: 'Cuba', code: 'cu' },
        { countryName: 'Czech', code: 'cz' },
        { countryName: 'Egypt', code: 'eg' },
        { countryName: 'France', code: 'fr' },
        { countryName: 'Germany', code: 'de' },
        { countryName: 'Greece', code: 'gr' },
        { countryName: 'Hong Kong', code: 'hk' },
        { countryName: 'Hungary', code: 'hu' },
        { countryName: 'India', code: 'in' },
        { countryName: 'Indonesia', code: 'id' },
        { countryName: 'Indonesia', code: 'ir' },
        { countryName: 'Ireland', code: 'ie' },
        { countryName: 'Israel', code: 'il' },
        { countryName: 'Italy', code: 'it' },
        { countryName: 'Japan', code: 'jp' },
        { countryName: 'Malaysia', code: 'my' },
        { countryName: 'Mexico', code: 'mx' },
        { countryName: 'Morocco', code: 'ma' },
        { countryName: 'Netherlands', code: 'nl' },
        { countryName: 'New Zealand', code: 'nz' },
        { countryName: 'Norway', code: 'no' },
        { countryName: 'Nigeria', code: 'ng' },
        { countryName: 'Lithuania', code: 'lt' },
        { countryName: 'Philippines', code: 'ph' },
        { countryName: 'Poland', code: 'pl' },
        { countryName: 'Portugal', code: 'pt' },
        { countryName: 'Romania', code: 'ro' },
        { countryName: 'Serbia', code: 'rs' },
        { countryName: 'Russia', code: 'ru' },
        { countryName: 'Saudi Arabia', code: 'sa' },
        { countryName: 'Singapore', code: 'sg' },
        { countryName: 'South Africa', code: 'za' },
        { countryName: 'Sweden', code: 'se' },
        { countryName: 'Switzerland', code: 'ch' },
        { countryName: 'Thailand', code: 'th' },
        { countryName: 'Taiwan', code: 'tw' },
        { countryName: 'Turkey', code: 'tr' },
        { countryName: 'UAE', code: 'ae' },
        { countryName: 'UK', code: 'gb' },
        { countryName: 'Ukraine', code: 'UA' },
        { countryName: 'USA', code: 'us' }
    ]
    const { Colors, Icons } = useContext(MyContext);
    const setData = async (countryName, code) => {
        await AsyncStorage.setItem('country', JSON.stringify({ countryName, code }));
        setCountry({ countryName, code });
        setShowDialog(false);
        filterData(code, category);
    }
    return (
        <Modal transparent={true} visible={showDialog}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "#646464CC" }}>
                <Shadow
                    useArt
                    style={{
                        shadowOffset: { width: 10, height: 10 },
                        shadowOpacity: 1,
                        shadowColor: "grey",
                        shadowRadius: 10,
                        borderRadius: 20,
                        backgroundColor: Colors.primaryColor,
                        width: 300,
                        height: 400,
                    }}
                >
                    <Neomorph
                        inner
                        swapShadows
                        style={{
                            shadowRadius: 5,
                            borderRadius: 200,
                            backgroundColor: Colors.primaryColor,
                            width: 40,
                            height: 40,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginLeft: 10,
                            marginTop: 10
                        }}
                    >
                        <TouchableOpacity onPress={() => setShowDialog(false)}>
                            <Image source={Icons.cancelIcon} style={{ width: 30, height: 30 }} />
                        </TouchableOpacity>
                    </Neomorph>
                    <View style={{ flex: 1, alignItems: 'center', paddingBottom: 30 }}>
                        <ScrollView style={{ padding: 10 }}>
                            {countryArray.map((item) => {
                                return (
                                    <Neomorph
                                        key={item.code}
                                        swapShadows
                                        style={{
                                            shadowRadius: 5,
                                            borderRadius: 200,
                                            backgroundColor: Colors.primaryColor,
                                            width: 150,
                                            height: 40,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            marginTop: 7,
                                            marginBottom: 8,
                                            marginHorizontal: 20
                                        }}
                                    >
                                        <TouchableOpacity style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }} onPress={() => { setData(item.countryName.toUpperCase(), item.code) }}>
                                            <Text style={{ color: Colors.primaryTextColor }}>{item.countryName.toUpperCase()}</Text>
                                        </TouchableOpacity>
                                    </Neomorph>
                                )
                            })}
                        </ScrollView>

                    </View>
                </Shadow>
            </View>
        </Modal>
    )
}

export default CountryAlert
