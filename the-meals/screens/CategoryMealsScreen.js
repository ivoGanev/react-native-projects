import React from 'react'

import { View, Text, StyleSheet } from 'react-native'
import { CATEGORIES } from '../data/dummy-data'

const CategoriesMealsScreen = props => {
    const id = props.navigation.getParam('categoryId')
    const category = CATEGORIES.find((item) => item.id === id)

    return (
        <View>
            <Text>Categories Meals Screen</Text>
        </View>
    )
}

CategoriesMealsScreen.navigationOptions = navigationData => {
    const id = navigationData.navigation.getParam('categoryId')
    const category = CATEGORIES.find((item) => item.id === id)
    return {
        headerTitle: category.title
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default CategoriesMealsScreen
