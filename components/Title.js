import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function Title() {
  return <Text style={styles.title }>Liste des tâches</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
