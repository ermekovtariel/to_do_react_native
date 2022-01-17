import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { task } from './AppStyles.js';

export const TaskComponent = (props) => {
  const { text } = props;
  return (
    <View style={task.item}>
      <View style={task.itemLeft}>
        <TouchableOpacity style={task.square}></TouchableOpacity>
        <Text style={task.itemText}>{text}</Text>
      </View>
      <View style={task.circular}></View>
    </View>
  );
};
