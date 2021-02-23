import React from 'react'
import { View, Button, StyleSheet } from 'react-native'

const ModalButton = (props) => {
    return (
        <View style={styles.button} >
            <Button
                title={props.title}
                onPress={props.onPress}
                color={props.color} />
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        width: '40%'
    }
})

export default ModalButton