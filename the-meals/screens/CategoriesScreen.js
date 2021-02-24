import React from 'react'

import { View, Text, StyleSheet, FlatList } from 'react-native'
import { Color } from '../constants/colors';
import { Styles } from '../constants/styles'
import { CATEGORIES } from "../data/dummy-data";
import { ListItem } from '../components/categories/FlatListItem'

const CategoriesScreen = props => {
    return (
        <View  styles= { Styles.screen }>
            <FlatList data={CATEGORIES} renderItem={ ListItem } numColumns={2} />
        </View>
    )
}

CategoriesScreen.navigationOptions = {
    headerTitle: 'Meal Categories',
    headerTintColor: '#fff',
    headerStyle: {
        backgroundColor: Color.background
    },
}

const styles = StyleSheet.create({
})

export default CategoriesScreen
