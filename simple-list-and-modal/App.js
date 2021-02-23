import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import ModalInput from './components/ModalInput';
import MemoryFlatList from './components/MemoryFlatList';
import EmptyListView from './components/EmptyListView';

export default function App() {
  const [textInput, setTextInput] = useState('')
  const [modalIsOpen, setModalOpen] = useState(false)
  const [memoryItems, setMemoryItems] = useState([])

  const onChangeTextHandler = (text) => setTextInput(text)
  const onAddMemoryDialogOpenHandler = () => setModalOpen(true)
  const onCloseMemoryDialogHandler = () => setModalOpen(false)

  const onDeleteHandler = (memoryKey) => {
    let listAfterDelete = memoryItems.filter((elem) => elem.key != memoryKey)
    setMemoryItems(listAfterDelete)
  }

  const onAddMemoryItem = () => {
    setMemoryItems((currentItem) => [...currentItem, {
      key: textInput + Math.random().toString(),
      value: textInput
    }])
    setModalOpen(false)
  }

  const onRemoveAllMemory = () => {
    setMemoryItems([])
  }

  return (
    <View style={styles.container} >
      {
        memoryItems.length === 0 &&
        <EmptyListView/>
      }

      { 
        memoryItems.length > 0 &&
        <MemoryFlatList items={memoryItems} onDeleteItem={onDeleteHandler} />
      }

      <ModalInput
        visible={modalIsOpen}
        onChangeText={onChangeTextHandler}
        onPressAdd={onAddMemoryItem}
        onPressClose={onCloseMemoryDialogHandler} />

      <View>
        <Button
          title="Add Memories"
          onPress={onAddMemoryDialogOpenHandler} />
      </View>

      {
        memoryItems.length > 0 &&
        <Button
          color='red'
          title="Clear Memories"
          onPress={onRemoveAllMemory} />
      }

    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    flexDirection: 'column',
    marginTop: 50,
  },
});
