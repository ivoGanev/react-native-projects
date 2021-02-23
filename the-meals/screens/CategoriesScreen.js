import React from 'react'

import { View, Text, StyleSheet, Button, FlatList } from 'react-native'

import { CATEGORIES } from "../data/dummy-data";

const renderGridItem = itemData => {
    return (
        <View>
            <Text>{itemData.item.title}</Text>
        </View>
    )
}

const CategoriesScreen = props => {
    console.log(CATEGORIES)
    return (
        <View>
            <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default CategoriesScreen
