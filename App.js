import React, { useState } from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from 'react-native';

import { app } from './src/AppStyles.js';
import { TaskComponent } from './src/TaskComponent.js';

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  };

  const complateTask = (index) => {
    let itemCopy = [...taskItems];
    itemCopy.splice(index, 1);
    setTaskItems(itemCopy);
  };

  return (
    <View style={app.container}>
      {/* Today's Tasks */}
      <View style={app.tasksWrapper}>
        <Text style={app.sectionTitle}>Today's Tasks</Text>
        <View style={app.item}>
          {/* ITEM */}
          {taskItems?.map((item, idx) => {
            return (
              <TouchableOpacity key={idx} onPress={() => complateTask(idx)}>
                <TaskComponent text={item} />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      {/* Weiter a task */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={app.writeText}
      >
        <TextInput
          style={app.input}
          placeholder='Написать заметку!'
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <TouchableOpacity onPress={handleAddTask}>
          <View style={app.addWrapper}>
            <Text style={app.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}
