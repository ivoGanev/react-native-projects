import React from 'react'

import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import { MEALS } from '../data/dummy-data'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/HeaderButton'
import { ScrollView } from 'react-native-gesture-handler'


const MealDetailsScreen = props => {
    const mealId = props.navigation.getParam('mealId')
    const meal = MEALS.find(meal => meal.id === mealId)

    return (
        <ScrollView>
            <Image source={{ uri: meal.imageUrl }} style={styles.image} />
            <View style={styles.details}>
                <Text >{meal.duration}</Text>
                <Text >{meal.complexity.toUpperCase()}</Text>
                <Text >{meal.affordability.toUpperCase()}</Text>
            </View>
            <Text style={styles.title}>Ingredients</Text>
            {
                meal.ingredients.map(item => <Text style={styles.listItem} key={item}>{item}</Text>)
            }
            <Text style={styles.title}>Steps</Text>
                {
                    meal.steps.map(step => <Text style = {styles.listItem} key={step}>{step}</Text>)
                }
        </ScrollView>
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
    image: {
        width: '100%',
        height: 200
    },

    details: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around',
    },

    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: 'center',
    },

    listItem: {
        marginBottom: 15,
        padding: 5,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 4,
        borderColor: '#ccc',
        borderWidth: 1,
    }
})

export default MealDetailsScreen
