import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function footer() {
  return (
    <View style={styles.footer}>
      <Text >
      &Copy; Manal Kh Albahar
      </Text>
    </View>
  )
}


const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#DFF6FF',
    borderColor: 'blue',
    margin: 20,
    borderWidth: 2,
    padding: 15

  }
});