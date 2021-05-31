import React, { useContext } from 'react'
import { View, Text, Modal, TouchableOpacity, Image, ScrollView } from 'react-native'
import MyContext from '../../mycontext/MyContext';
import { Shadow, Neomorph } from 'react-native-neomorph-shadows';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CategoryAlert = ({ showDialog, setShowDialog, setCategory, filterData, country }) => {
    const categoryArray = ["general", "business", "entertainment", "health", "science", "sports", "technology"];
    const { Colors, Icons } = useContext(MyContext);
    const setData = async (category) => {
        await AsyncStorage.setItem('category', category.toUpperCase());
        setCategory(category);
        setShowDialog(false);
        filterData(country.code, category);
    }
    return (
        < Modal transparent={true} visible={showDialog} >
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
                            {categoryArray.map((item) => {
                                return (
                                    <Neomorph
                                        key={item}
                                        swapShadows
                                        style={{
                                            shadowRadius: 5,
                                            borderRadius: 200,
                                            backgroundColor: Colors.primaryColor,
                                            width: 150,
                                            height: 40,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            marginTop: 15,
                                            marginHorizontal: 20
                                        }}
                                    >
                                        <TouchableOpacity style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }} onPress={() => { setData(item.toUpperCase()) }}>
                                            <Text style={{ color: Colors.primaryTextColor }}>{item.toUpperCase()}</Text>
                                        </TouchableOpacity>
                                    </Neomorph>
                                )
                            })}
                        </ScrollView>

                    </View>
                </Shadow>
            </View>
        </Modal >
    )
}

export default CategoryAlert
