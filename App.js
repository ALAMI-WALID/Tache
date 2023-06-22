import React from 'react';
import { View, StyleSheet } from 'react-native';
import TaskList from './components/TaskList';
import Title from './components/Title';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Title />
      </View>
      <View style={styles.content}>
        <TaskList />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#fff',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  content: {
    flex: 1,
    backgroundColor: '#D4E6F1',
    padding: 20,
  },
});
