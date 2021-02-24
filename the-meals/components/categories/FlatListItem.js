import React from 'react'
import { View, Text, } from 'react-native'

export const ListItem =itemData => {
    return (
        <View>
            <Text>{itemData.item.title}</Text>
        </View>
    )
}