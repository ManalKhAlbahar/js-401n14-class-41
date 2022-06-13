import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Item(props) {
  return (
    <View style={styles.listItem}>
      <Text onPress={() => props.onDelete(props.title)}>
        {props.title}
      </Text>
    </View>
  )
}


const styles = StyleSheet.create({
  listItem: {
    backgroundColor: '#ccc',
    borderColor: 'blue',
    margin: 20,
    borderWidth: 2,
    padding: 15

  }
});