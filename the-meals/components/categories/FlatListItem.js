import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Platform, TouchableNativeFeedback } from 'react-native'



export const ListItem = props => {
    if (Platform.OS === 'android' && Platform.Version >= 21) {
        return (
            <View  style={styles.gridItem}>
                <TouchableNativeFeedback
                    onPress={
                        props.onPress
                    }
                   style = {{flex:1}}
                    background={TouchableNativeFeedback.Ripple('#FFFFFF', true)}
                >
                    <View style={{ ...styles.container, ...{ backgroundColor: props.itemData.color } }}>
                        <Text style={styles.text} >{props.itemData.title}</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>)
    }

    return (
        <TouchableOpacity onPress={props.onPress} style={styles.gridItem}>
            <View style={{ ...styles.container, ...{ backgroundColor: props.itemData.color } }}>
                <Text style={styles.text} >{props.itemData.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        elevation: 3,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 2 },
    },

    container: {
        flex: 1,
        height: 150,
        borderRadius: 10,
        padding: 10,
        justifyContent: 'flex-end',
        alignContent: 'flex-end',
        flexDirection: 'column',
    },

    text: {
        textAlign: 'right',
        fontFamily: 'open-sans-bold',
    }
})
