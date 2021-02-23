import React from 'react'
import { View, StyleSheet, Text } from 'react-native';

const EmptyListView = (props) => {
    return (
        <View style={{ alignItems: 'center' }}>
        <Text style={{ fontSize: 22 }}>
          No memories found. Click 'Add' button to create a new entry.
        </Text>
      </View>
    )
}

const styles = StyleSheet.create({

})


export default EmptyListView