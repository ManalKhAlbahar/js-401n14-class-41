import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function header() {
  return (
    <View style={styles.header}>
      <Text >
        My React Native
      </Text>
    </View>
  )
}


  const styles = StyleSheet.create({
   header: {
      backgroundColor: '#DFF6FF',
      borderColor: 'blue',
      margin: 20,
      borderWidth: 2,
      padding: 15
  
    }
});