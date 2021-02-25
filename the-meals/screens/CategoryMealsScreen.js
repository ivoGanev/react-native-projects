import React from 'react'

import { View, Text, StyleSheet, FlatList } from 'react-native'
import { CATEGORIES, MEALS } from '../data/dummy-data'
import { MealItem } from "../components/categories/MealItem";

const CategoriesMealsScreen = props => {
    const id = props.navigation.getParam('categoryId')

    const meals = MEALS.filter(
        meal => meal.categoryIds.indexOf(id) >= 0
    )

    const onPress = (item) => {
        props.navigation.navigate({
            routeName: 'MealsDetails',
            params: {mealId: item.id}
        })
    }

    return (
        <View>
            <FlatList data={meals} renderItem={(itemData) => (
                <MealItem item={itemData.item} onSelectMeal={onPress.bind(this, itemData.item)} />
            )} style={{width: '100%'}}/>
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
