import React, { useContext } from 'react'
import { SafeAreaView } from 'react-native';
import WebView from 'react-native-webview';
import MyContext from '../mycontext/MyContext';


const MyWebView = ({ route }) => {
    const { Colors } = useContext(MyContext);

    const uri = route.params.uri
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.primaryColor }}>
            <WebView style={{ backgroundColor: 'transparent' }} source={{
                uri
            }} />
        </SafeAreaView>
    )
}

export default MyWebView
