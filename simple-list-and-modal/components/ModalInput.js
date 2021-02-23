import React from 'react'
import { StyleSheet, Modal, View, TextInput } from 'react-native'
import ModalButton from './ModalButton'

const ModalInput = (props) => {
    return (<Modal
        transparent={true}
        animationType='slide'
        visible={props.visible}
    >
        <View style={styles.modalView}>
            <TextInput
                textAlign="center"
                style={styles.textInput}
                onChangeText={props.onChangeText}
                placeholder={"Enter Your Memories."} />

            <View style={styles.buttonParent} >
                <ModalButton onPress={props.onPressAdd} title="Add" />
                <ModalButton onPress={props.onPressClose} title="Close" color='red' />
            </View>

        </View>
    </Modal>)
}

const styles = StyleSheet.create({
    buttonParent: {
        flexDirection: 'row',
        width: '80%',
        justifyContent: 'space-between',
        marginTop: 15,
    },

    modalView: {
        height: 400,
        margin: 30,
        flex: 0,
        borderRadius: 14,
        elevation: 20,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center'
    },

    textInput: {
        justifyContent: 'center',
        alignContent: 'center',
        flexDirection: 'row',
        width: '80%',
        padding: 10,
        borderBottomWidth: 1,
        fontSize: 22,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    },
})

export default ModalInput