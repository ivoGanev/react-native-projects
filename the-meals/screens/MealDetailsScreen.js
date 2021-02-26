import React from 'react'

import { View, Text, StyleSheet, FlatList } from 'react-native'
import { MEALS } from '../data/dummy-data'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/HeaderButton'


const MealDetailsScreen = props => {
    const mealId = props.navigation.getParam('mealId')
    const meal = MEALS.filter(meal => meal.id === mealId)

    return (
        <View>
            <Text>Hello</Text>
        </View>
    )
}

MealDetailsScreen.navigationOptions = navigationData => {
    const mealId = navigationData.navigation.getParam('mealId')
    const meal = MEALS.find(meal => meal.id === mealId)

    return {
        headerTitle: meal.title,
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                    title='Favorite'
                    iconName='star'
                    onPress={() => { console.log("Marked as favorite") }} />
            </HeaderButtons>
        )
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
