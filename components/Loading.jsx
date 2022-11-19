import React from 'react';
import {ActivityIndicator, Text, View} from "react-native";

export function Loading() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            <ActivityIndicator size='large'/>
            <Text style={{
                marginTop: 15
            }}>Загрузка ...</Text>
        </View>
    );
}