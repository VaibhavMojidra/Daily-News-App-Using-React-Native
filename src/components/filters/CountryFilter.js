import React, { useContext } from 'react'
import { TouchableOpacity, Text } from 'react-native'
import MyContext from '../../mycontext/MyContext';

import { Neomorph } from 'react-native-neomorph-shadows';

const CountryFilter = ({ setCountryDialog, country }) => {
    const { Colors } = useContext(MyContext);
    return (
        <Neomorph
            inner
            swapShadows
            style={{
                shadowRadius: 5,
                borderRadius: 200,
                backgroundColor: Colors.primaryColor,
                width: 120,
                height: 40,
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 10
            }}
        >
            <TouchableOpacity onPress={() => { setCountryDialog(true) }} style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: Colors.primaryTextColor }}>{country.countryName}</Text>
            </TouchableOpacity>
        </Neomorph>
    )
}

export default CountryFilter
