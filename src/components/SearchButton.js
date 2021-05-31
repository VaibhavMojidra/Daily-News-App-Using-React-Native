import React, { useContext } from 'react'
import { TouchableOpacity, Image } from 'react-native'
import MyContext from '../mycontext/MyContext';
import { Neomorph } from 'react-native-neomorph-shadows';
const SearchButton = ({ toggleSearchButton, searchVisible }) => {
    const { Colors, Icons } = useContext(MyContext);
    return (
        <Neomorph
            swapShadows
            style={{
                shadowRadius: 5,
                borderRadius: 200,
                backgroundColor: Colors.primaryColor,
                width: 50,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <TouchableOpacity onPress={toggleSearchButton}>
                <Image source={searchVisible ? Icons.cancelIcon : Icons.searchIcon} style={{ width: 40, height: 40 }} />
            </TouchableOpacity>
        </Neomorph>
    )
}

export default SearchButton
