import React from 'react'
import {  FlatList, StyleSheet } from 'react-native';
import ListElement from './ListElement';

const MemoryFlatList = (props) => {
    return (
        <FlatList
            style={styles.list}
            data={props.items}
            renderItem={
                ({ item }) => <ListElement item={item} onDeleteItem={props.onDeleteItem} />
            }
        />
    )
}

const styles = StyleSheet.create({
    list: {
        margin: 50
    },
})

export default MemoryFlatList