import React, { useContext } from 'react'
import { View, TextInput, TouchableOpacity, Image } from 'react-native'
import { Dimensions } from 'react-native';
import { Neomorph } from 'react-native-neomorph-shadows';
import MyContext from '../mycontext/MyContext';


const SearchBar = ({ text, setText, search }) => {
    const { Colors, Icons } = useContext(MyContext);
    return (
        <View style={{ flexDirection: 'row', marginTop: 15 }}>
            <Neomorph
                inner
                swapShadows
                style={{
                    shadowRadius: 10,
                    borderRadius: 80,
                    backgroundColor: Colors.primaryColor,
                    width: Dimensions.get('window').width - 20,
                    height: 45,
                    marginLeft: 10,
                    flexDirection: 'row'
                }}
            >
                <TextInput placeholder="Search" value={text} onChangeText={setText} placeholderTextColor={Colors.primaryTextColor} style={{ width: Dimensions.get('window').width - 75, marginLeft: 10, paddingLeft: 10, color: Colors.primaryTextColor, fontSize: 20 }} />
                <Neomorph
                    swapShadows
                    style={{
                        shadowRadius: 5,
                        borderRadius: 200,
                        backgroundColor: Colors.primaryColor,
                        width: 45,
                        height: 45,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <TouchableOpacity onPress={search}>
                        <Image source={Icons.searchIcon} style={{ width: 40, height: 40 }} />
                    </TouchableOpacity>
                </Neomorph>
            </Neomorph>
        </View>
    )
}

export default SearchBar
