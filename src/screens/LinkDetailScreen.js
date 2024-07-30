import React, { useCallback } from "react";
import { Header } from '../components/Header/Header';
import { View } from "react-native";
import { Spacer } from "../components/Spacer";
import { useNavigation, useRoute } from "@react-navigation/native";
import WebView from "react-native-webview";


export const LinkDetailScreen = () => {

    const routes = useRoute();
    
    const naviagation = useNavigation();

    const onPressBack = useCallback(() => {
            naviagation.goBack();
    },[])
    
    return (
        <View style = {{flex:1}}>
            <Header>
                <Header.Group>
                        <Header.Icon  iconName='arrow-back' onPress={onPressBack}/>
                        <Spacer space={12} horizintal/>
                        <Header.Title title = 'LINK DETAIL'></Header.Title>
                </Header.Group>
            </Header>

            <WebView
                style={{flex:1}}
                source = {{uri:routes.params.item.link}}
            />

        </View>
    )
}