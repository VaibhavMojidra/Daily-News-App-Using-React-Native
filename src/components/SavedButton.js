import React, { useContext } from 'react'
import { TouchableOpacity, Image } from 'react-native'
import MyContext from '../mycontext/MyContext';
import { Neomorph } from 'react-native-neomorph-shadows';
const SavedButton = ({ navigateToSaved }) => {
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
                marginLeft: 10
            }}
        >
            <TouchableOpacity onPress={navigateToSaved}>
                <Image source={Icons.unsaveIcon} style={{ width: 30, height: 30 }} />
            </TouchableOpacity>
        </Neomorph>
    )
}

export default SavedButton