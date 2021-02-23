import React from 'react'
import {  View,  StyleSheet, Text } from 'react-native';

const ListItemText = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.listItem}>
                <Text style={{ fontSize: 20 }}> {props.value}</Text>
            </View>
            <View style={ styles.separator }/>
        </View>
    )
}

const styles = StyleSheet.create({
    listItem: {
        margin: 10,
    },
    separator: {
        borderWidth: 1, 
        borderColor: 'grey'
    }
})


export default ListItemText