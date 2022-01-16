import React from 'react';
import { View } from 'react-native';
import { Navbar } from './src/Components/Navbar';

import { app } from './src/AppStyles';

export default function App() {
  return (
    <View style={app.container}>
      <Navbar />
    </View>
  );
}
