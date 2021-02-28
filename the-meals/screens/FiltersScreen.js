import React from 'react'
import { useState } from 'react'

import { View, Text, StyleSheet, FlatList } from 'react-native'
import { Switch } from 'react-native-gesture-handler'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/HeaderButton'
import { Color } from '../constants/colors'

const FilterSwitch = props => {
    return (
        <View style={styles.filterContainer}>
            <Text>{props.label}</Text>
            <Switch
                trackColor={{ true: Color.background, false: '#ccc' }}
                thumbColor={Color.background}
                value={props.state}
                onValueChange={props.onChange} />
        </View>
    )
}

const FiltersScreen = props => {
    const [isGlutenFree, setIsGlutenFree] = useState(false)
    const [isLactoseFree, setIsLactoseFree] = useState(false)
    const [isVegan, setIsVegan] = useState(false)
    const [isVegetarian, setIsVegetarian] = useState(false)

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Available Filters / Restrictions</Text>
            <FilterSwitch
                state={isGlutenFree}
                label="Gluten-free"
                onChange={newValue => setIsGlutenFree(newValue)} />
            <FilterSwitch
                state={isLactoseFree}
                label="Lactose-free"
                onChange={newValue => setIsLactoseFree(newValue)} />
            <FilterSwitch
                state={isVegan}
                label="Vegan"
                onChange={newValue => setIsVegan(newValue)} />
            <FilterSwitch
                state={isVegetarian}
                label="Vegetarian"
                onChange={newValue => setIsVegetarian(newValue)} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },

    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: 'center',
        margin: 20,
    },

    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%'
    }
})

FiltersScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'Filters',
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                    title='Drawer'
                    iconName='ios-menu'
                    onPress={() => { navData.navigation.toggleDrawer() }} />
            </HeaderButtons>
        )
    }
}

export default FiltersScreen
