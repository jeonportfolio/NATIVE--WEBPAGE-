import React, { useCallback } from "react";
import { Header } from '../components/Header/Header';
import { View } from "react-native";
import { Spacer } from "../components/Spacer";
import { useNavigation } from "@react-navigation/native";


export const LinkDetailScreen = () => {
    
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
        </View>
    )
}