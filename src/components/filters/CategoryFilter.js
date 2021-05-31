import React, { useContext } from 'react'
import { TouchableOpacity, Text } from 'react-native'
import MyContext from '../../mycontext/MyContext';

import { Neomorph } from 'react-native-neomorph-shadows';
const CategoryFilter = ({ category, setCategoryDialog }) => {
    const { Colors } = useContext(MyContext);
    return (
        <Neomorph
            inner
            swapShadows
            style={{
                shadowRadius: 5,
                borderRadius: 200,
                backgroundColor: Colors.primaryColor,
                width: 150,
                height: 40,
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 10
            }}
        >
            <TouchableOpacity onPress={() => { setCategoryDialog(true) }} style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: Colors.primaryTextColor }}>{category.toUpperCase()}</Text>
            </TouchableOpacity>
        </Neomorph>
    )
}

export default CategoryFilter
