import React, { useContext, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Neomorph } from 'react-native-neomorph-shadows';
import MyContext from '../mycontext/MyContext';

const ModeSwitch = ({ isDarkModeEnabled = false }) => {
    const { Colors, setDarkMode } = useContext(MyContext);
    const [dark, setDark] = useState(isDarkModeEnabled);
    const toggleMode = () => {
        if (dark) {
            setDark(false);
            setDarkMode(false);
        }
        else {
            setDark(true);
            setDarkMode(true);
        }
    }
    return (
        <View>
            <Neomorph
                inner
                swapShadows
                style={{
                    shadowRadius: 5,
                    borderRadius: 200,
                    backgroundColor: Colors.primaryColor,
                    width: 160,
                    height: 40,
                    marginTop: 5,
                    marginLeft: 20,
                    flexDirection: 'row',
                }}
            >

                {dark ? null : <Neomorph
                    swapShadows
                    style={{
                        shadowRadius: 8,
                        borderRadius: 200,
                        backgroundColor: Colors.primaryColor,
                        width: 90,
                        height: 40,
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row'
                    }}
                >
                    <TouchableOpacity style={{ flex: 1, height: '100%', justifyContent: 'center' }} onPress={toggleMode}>
                        <Text style={{ alignSelf: 'center', textAlign: 'center', color: Colors.primaryTextColor }}>LIGHT</Text>
                    </TouchableOpacity>
                </Neomorph>}

                {dark ? null : <TouchableOpacity style={{ flex: 1, height: '100%', justifyContent: 'center' }} onPress={toggleMode}>
                    <Text style={{ alignSelf: 'center', textAlign: 'center', color: Colors.primaryTextColor }}>DARK</Text>
                </TouchableOpacity>}

                {dark ? <TouchableOpacity style={{ flex: 1, height: '100%', justifyContent: 'center' }} onPress={toggleMode}>
                    <Text style={{ alignSelf: 'center', textAlign: 'center', color: Colors.primaryTextColor }}>LIGHT</Text>
                </TouchableOpacity> : null}
                {dark ? <Neomorph
                    swapShadows
                    style={{
                        shadowRadius: 5,
                        borderRadius: 200,
                        backgroundColor: Colors.primaryColor,
                        width: 90,
                        height: 40,
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row'
                    }}
                >
                    <TouchableOpacity style={{ flex: 1, height: '100%', justifyContent: 'center' }} onPress={toggleMode}>
                        <Text style={{ alignSelf: 'center', textAlign: 'center', color: Colors.primaryTextColor }}>DARK</Text>
                    </TouchableOpacity>
                </Neomorph> : null}
            </Neomorph>
        </View>
    )
}

export default ModeSwitch
