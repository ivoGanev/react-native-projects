import React from 'react'

import { View, Text, StyleSheet, FlatList } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/HeaderButton'

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

FiltersScreen.navigationOptions = (navData)=> {
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
