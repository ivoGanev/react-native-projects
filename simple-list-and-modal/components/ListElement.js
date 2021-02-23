import React from 'react'
import { View, StyleSheet, Button } from 'react-native';
import ListItemText from './ListItemText';

const ListElement = (props) => {
    return (
        <View style={styles.listItem}>
            <ListItemText value={props.item.value} />
            <Button title="Delete" onPress={() => { props.onDeleteItem(props.item.key) }} />
        </View>
    )
}

const styles = StyleSheet.create({
    listItem: {
        flexDirection: 'row',
        flex: 1,
    }
})


export default ListElement