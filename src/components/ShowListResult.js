import React, { useContext } from 'react'
import { Text, TouchableOpacity, Image, Animated } from 'react-native';
import MyContext from '../mycontext/MyContext';
import { Dimensions } from 'react-native';
const ShowListResult = ({ news = [], navigation, onOptionPress }) => {
    const scrollY = React.useRef(new Animated.Value(0)).current;
    const ITEM_SIZE = 400
    const { Colors, Icons } = useContext(MyContext);
    return (
        <Animated.FlatList style={{ flex: 1, marginTop: 15 }}
            data={news}
            keyExtractor={item => item.url}
            onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                { useNativeDriver: true }
            )}
            renderItem={({ item, index }) => {
                const inputRange = [
                    -1,
                    0,
                    ITEM_SIZE * index,
                    ITEM_SIZE * (index + 3)
                ]
                const scale = scrollY.interpolate({
                    inputRange,
                    outputRange: [1, 1, 1, 0]
                })

                const OinputRange = [
                    -1,
                    0,
                    ITEM_SIZE * index,
                    ITEM_SIZE * (index + 1)
                ]
                const opacity = scrollY.interpolate({
                    inputRange: OinputRange,
                    outputRange: [1, 1, 1, 0]
                })
                return (
                    <Animated.View
                        style={{
                            backgroundColor: Colors.primaryColor,
                            width: Dimensions.get('window').width - 20,
                            marginLeft: 10,
                            borderRadius: 10,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 2,
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 4.84,
                            marginTop: 15,
                            elevation: 5,
                            opacity,
                            transform: [{ scale }]
                        }}>
                        <TouchableOpacity onPress={() => { navigation.navigate("MyWebView", { uri: item.url }) }}>
                            <Image source={{ uri: item.urlToImage }} style={{ width: '100%', height: 220, borderTopLeftRadius: 10, borderTopRightRadius: 10 }} resizeMode={'cover'} />
                            <Text style={{ fontSize: 18, padding: 15, paddingBottom: 10, fontWeight: 'bold', width: '100%', color: Colors.primaryTextColor }}>{item.title}</Text>
                            <Text style={{ paddingLeft: 15, paddingBottom: 5, paddingRight: 15, color: Colors.primaryTextColor }}>{item.description}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: '100%', paddingBottom: 10, flexDirection: 'column', alignItems: 'flex-end' }} onPress={() => { onOptionPress(item.url, item.title, item.description, item.urlToImage) }}>
                            <Image source={Icons.optionIcon} style={{ width: 30, height: 6, marginRight: 15 }} />
                        </TouchableOpacity>
                    </Animated.View>
                )
            }} />
    )
}

export default ShowListResult
