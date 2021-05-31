import React, { useContext } from 'react'
import { View, ScrollView } from 'react-native'
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import MyContext from '../mycontext/MyContext';
import { Dimensions } from 'react-native';

const NewsLoader = () => {
  const temp = [1, 2, 3, 4, 5];
  const { Colors } = useContext(MyContext);
  return (
    <ScrollView>
      {temp.map((item) => {
        return (
          <View
            key={item}
            style={{
              backgroundColor: Colors.primaryColor,
              width: Dimensions.get('window').width - 20,
              height: 380,
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
            }}>
            <SkeletonPlaceholder highlightColor={Colors.loaderHighlightColor} backgroundColor={Colors.loaderBackgroundColor}>
              <View style={{ flexDirection: "column", justifyContent: 'center' }}>
                <View style={{ width: Dimensions.get('window').width - 20, height: 220, borderTopRightRadius: 10, borderTopLeftRadius: 10, }} />
                <View style={{ width: Dimensions.get('window').width - 50, height: 16, margin: 15, marginBottom: 0 }} />
                <View style={{ width: Dimensions.get('window').width - 50, height: 16, marginLeft: 15, marginTop: 5 }} />
                <View style={{ width: Dimensions.get('window').width - 80, height: 16, marginLeft: 15, marginTop: 5 }} />
                <View style={{ width: Dimensions.get('window').width - 50, height: 10, marginLeft: 15, marginTop: 15 }} />
                <View style={{ width: Dimensions.get('window').width - 50, height: 10, marginLeft: 15, marginTop: 5 }} />
                <View style={{ width: Dimensions.get('window').width - 50, height: 10, marginLeft: 15, marginTop: 5 }} />
                <View style={{ width: Dimensions.get('window').width - 50, height: 10, marginLeft: 15, marginTop: 5 }} />
              </View>
            </SkeletonPlaceholder>
          </View>
        )
      })}

    </ScrollView>
  )
}

export default NewsLoader
