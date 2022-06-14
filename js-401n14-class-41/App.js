import { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput, FlatList } from 'react-native';
import Item from './components/Item';
import Header from './components/header';
import Footer from './components/footer';


export default function App() {
  const [newItem, setNewItem] = useState('');
  const [items, setItems] = useState([]);

  const textHandler = (enteredText) => {
    setNewItem(enteredText);
  };

  const addItemHandler = () => {
    setItems([...items, newItem]);
    console.log('item added!');
  };

  const removeItemHandler = (itemToRemove) => {
    const newItems = items.filter(item => item !== itemToRemove);
    setItems(newItems);
  }

  return (
    <View style={styles.screen}> 
      <Header />
      <View style={styles.inputContainer}>
     
        <TextInput
          style={styles.input}
          placeholder='Add item'
          onChangeText={textHandler}
        />
        <Button title='Add Item' onPress={addItemHandler} />
      </View>
      <FlatList
        data={items}
        renderItem={
          itemData => (
            <Item title={itemData.item} onDelete={removeItemHandler} />
          )
        }
      />
 <View> <Footer /></View>   
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 25
  },
  inputContainer: {
    flexDirection: 'row',
    margin: 20,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    borderWidth: 1,
    borderColor: 'blue',
    width: '90%'
  }
});