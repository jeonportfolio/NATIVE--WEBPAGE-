import React, { useCallback } from "react";
import { View } from "react-native";
import { Header } from '../components/Header/Header';
import { Typography } from "../components/Typography";
import { Button } from "../components/Button"
import { useNavigation } from "@react-navigation/native";
import { Spacer } from "../components/Spacer";

export const LinkListScreen = () => {

    const navigation = useNavigation();

    const onPressButton = useCallback (() => {
        navigation.navigate('LinkDetail')
    },[])

    const onPressAddButton = useCallback(() => {
        navigation.navigate('AddLink') 
    },[])

    return(
        <View style = {{ flex:1}}>
                <Header>
                    <Header.Group>
                        <Header.Title title = 'LINK LIST'/>
                    </Header.Group>
                </Header>

                <View style = {{flex:1}}>
                    <Button onPress={onPressButton}>
                        <Typography> LINK DETAIL로 이동 하기</Typography>
                    </Button>

                    <Spacer space={12}/>

                    <Button onPress={onPressAddButton}>
                        <Typography fontSize={15}>링크 등록하기로 이동</Typography>
                    </Button>

                </View>
        </View>
    )
}