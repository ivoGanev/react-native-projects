import React from 'react'

import { View, Text, StyleSheet, FlatList } from 'react-native'

const FiltersScreen = props => {
    return (
        <View>
           <Text>Hello</Text>
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

FiltersScreen.navigationOptions = {
    headerTitle: "Filters"
}


export default FiltersScreen
