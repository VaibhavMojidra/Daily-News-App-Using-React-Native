import React, { useState, useContext } from 'react'
import { SafeAreaView, Text } from 'react-native';
import OptionAlert from '../components/OptionAlert';
import ShowListResult from '../components/ShowListResult'
import MyContext from '../mycontext/MyContext';

const SavedScreen = ({ navigation }) => {

    const { savedList, setArticleSaved, setArticle, Colors } = useContext(MyContext);
    const [optionDialog, setOptionDialog] = useState(false);
    const onOptionPress = (url, title, description, urlToImage) => {
        setArticleSaved(false);
        let art = savedList.find(a => a.url === url);
        let isArtFound = art === undefined ? false : true;
        setArticleSaved(isArtFound);
        setArticle({ url, title, description, urlToImage });
        setOptionDialog(true);
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.primaryColor, justifyContent: 'center', alignItems: 'center' }}>
            <OptionAlert setShowDialog={setOptionDialog} showDialog={optionDialog} fromSaved={true} />
            {savedList.length !== 0 ? <ShowListResult news={savedList} navigation={navigation} onOptionPress={onOptionPress} /> :
                <Text style={{ color: Colors.primaryTextColor, fontSize: 23 }}>No saved articles</Text>}
        </SafeAreaView>
    )
}

export default SavedScreen
