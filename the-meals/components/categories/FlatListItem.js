import React from 'react'
import { View, Text, TouchableHighlight, ProgressViewIOSComponent } from 'react-native'

export const ListItem = props => {
    return (
        <TouchableHighlight onPress={ props.onPress }>
            <View>
                <Text>{props.itemData.title}</Text>
            </View>
        </TouchableHighlight>
    )
}