import React, { useState } from 'react';
import { View, FlatList, TouchableOpacity, Text, TextInput, StyleSheet } from 'react-native';

export default function TaskList() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Tâche 1', completed: false },
    { id: 2, title: 'Tâche 2', completed: false },
    { id: 3, title: 'Tâche 3', completed: false },
  ]);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  const handleTaskCompletion = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: true } : task
      )
    );
  };

  const handleDeleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const renderTaskItem = ({ item }) => (
    <View style={styles.taskItem}>
      <Text style={[styles.taskTitle, item.completed && styles.completedTask]}>
        {item.title}
      </Text>
      {!item.completed ? (
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.completeButton}
            onPress={() => handleTaskCompletion(item.id)}
          >
            <Text style={styles.buttonText}>Terminer</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => handleDeleteTask(item.id)}
          >
            <Text style={styles.buttonText}>Supprimer</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <Text style={styles.completedText}>(Terminée)</Text>
      )}
    </View>
  );

  const handleAddTask = () => {
    if (newTaskTitle.trim() === '') return;

    const newTask = {
      id: Date.now(),
      title: newTaskTitle,
      completed: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
    setNewTaskTitle('');
  };

  return (
    <View style={styles.taskListContainer}>
      <FlatList
        data={tasks}
        renderItem={renderTaskItem}
        keyExtractor={(item) => item.id.toString()}
        style={styles.taskList}
      />
      <View style={styles.addTaskContainer}>
        <TextInput
          style={styles.input}
          placeholder="Ajouter une tâche"
          value={newTaskTitle}
          onChangeText={setNewTaskTitle}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
          <Text style={styles.buttonText}>Ajouter</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  taskListContainer: {
    flex: 1,
    paddingBottom: 20,
  },
  taskList: {
    flex: 1,
  },
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  taskTitle: {
    fontSize: 18,
  },
  completedTask: {
    textDecorationLine: 'line-through',
    color: '#aaa',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  completeButton: {
    backgroundColor: '#ccc',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  deleteButton: {
    backgroundColor: 'red',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  completedText: {
    color: '#aaa',
  },
  addTaskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingTop: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  addButton: {
    backgroundColor: 'green',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});
