import React, { useContext } from 'react'
import { View, Share, Modal, TouchableOpacity, Image } from 'react-native'
import MyContext from '../mycontext/MyContext';
import { Shadow, Neomorph } from 'react-native-neomorph-shadows';
import AsyncStorage from '@react-native-async-storage/async-storage';
const OptionAlert = ({ showDialog, setShowDialog, fromSaved = false }) => {
    const { Colors, Icons, articleSaved, setArticleSaved, savedList, article, setSavedList } = useContext(MyContext);

    const toggleSaveArticle = async () => {
        if (articleSaved) {
            let newSavedList = savedList.filter(a => a.url !== article.url);
            setSavedList(newSavedList);
            await AsyncStorage.setItem('saved', JSON.stringify(newSavedList));
            setArticleSaved(false);
        } else {
            let newSavedList = savedList;
            newSavedList.push(article);
            setSavedList(newSavedList);
            await AsyncStorage.setItem('saved', JSON.stringify(newSavedList));
            setArticleSaved(true);
        }
        if (fromSaved) {
            setShowDialog(false);
        }
    }
    const onShare = async () => {
        try {
            const result = await Share.share({
                message:
                    'Check out this news article from Daily News App by Vaibhav Mojidra: ' + article.url,
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                } else {
                }
            } else if (result.action === Share.dismissedAction) {
            }
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        < Modal transparent={true} visible={showDialog} >
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "#646464CC" }}>
                <Shadow
                    useArt
                    style={{
                        shadowOffset: { width: 10, height: 10 },
                        shadowOpacity: 1,
                        shadowColor: "grey",
                        shadowRadius: 10,
                        borderRadius: 20,
                        backgroundColor: Colors.primaryColor,
                        width: 300,
                        height: 150,
                    }}
                >
                    <Neomorph
                        inner
                        swapShadows
                        style={{
                            shadowRadius: 5,
                            borderRadius: 200,
                            backgroundColor: Colors.primaryColor,
                            width: 40,
                            height: 40,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginLeft: 10,
                            marginTop: 10
                        }}
                    >
                        <TouchableOpacity onPress={() => setShowDialog(false)}>
                            <Image source={Icons.cancelIcon} style={{ width: 30, height: 30 }} />
                        </TouchableOpacity>
                    </Neomorph>
                    <View style={{ flex: 1, alignItems: 'center', paddingBottom: 30, flexDirection: 'row', justifyContent: 'center' }}>

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
                                marginTop: 5,
                                marginHorizontal: 5
                            }}
                        >
                            <TouchableOpacity style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }} onPress={toggleSaveArticle}>
                                <Image source={articleSaved ? Icons.saveIcon : Icons.unsaveIcon} style={{ width: 30, height: 30 }} />
                            </TouchableOpacity>
                        </Neomorph>
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
                                marginTop: 5,
                                marginHorizontal: 10
                            }}
                        >
                            <TouchableOpacity style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }} onPress={onShare}>
                                <Image source={Icons.shareIcon} style={{ width: 30, height: 30 }} />
                            </TouchableOpacity>
                        </Neomorph>

                    </View>
                </Shadow>
            </View>
        </Modal >
    )
}

export default OptionAlert
