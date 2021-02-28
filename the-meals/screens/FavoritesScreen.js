import React from 'react'

import { View, Text, StyleSheet, Button, FlatList } from 'react-native'
import   { MealItem }  from "../components/categories/MealItem";
import {  MEALS } from '../data/dummy-data'

const FavoritesScreen = props => {
    const mealId = 'm1'
    const meal = MEALS.filter(meal => meal.id === mealId)

    return (
        <View>
            <Text>Favorites Screen</Text>
            <FlatList data={meal} renderItem={(itemData) => (
                <MealItem item={itemData.item}  />
            )} style={{ width: '100%' }} />
        </View>
    )
}

FavoritesScreen.navigationOptions = {
    headerTitle: "Favorites"
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default FavoritesScreen
