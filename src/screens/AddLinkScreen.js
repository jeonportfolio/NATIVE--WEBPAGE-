import React, { useCallback } from "react";
import { View } from "react-native";
import { Header } from '../components/Header/Header';
import { useNavigation } from "@react-navigation/native";


export const AddLinkScreen = () => {

    const navigation = useNavigation();

    const onPressClose = useCallback(() => {
            navigation.goBack();
    },[])

    return(
        <View>
            <Header>
                <Header.Group>
                        <Header.Title title='ADDLINK'></Header.Title>
                </Header.Group>

                <Header.Icon iconName = 'close' onPress = {onPressClose}/>
            </Header>
        </View>
    ) 
}