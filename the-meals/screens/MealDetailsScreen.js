import React from 'react'

import { View, Text, StyleSheet } from 'react-native'
import { MEALS } from '../data/dummy-data'

const MealDetailsScreen = props => {
    const mealId = props.navigation.getParam('mealId')
    const meal = MEALS.find(meal=> meal.id===mealId)
    console.log(meal)
    return (
        <View>
            <Text>Meal Details Screen</Text>
        </View>
    )
}

MealDetailsScreen.navigationOptions = navigationData => {
    const mealId = navigationData.navigation.getParam('mealId')
    const meal = MEALS.find(meal=> meal.id===mealId)

    return {
        headerTitle: meal.title
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default MealDetailsScreen
