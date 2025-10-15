import React from 'react';
import { View, Text } from 'react-native';
import NavBar from '../components/NavBar';

export default function HistoryScreen() {
  return (
    <View style={{ flex: 1 }}>
      <NavBar />
      <View style={{ padding: 12 }}>
        <Text style={{ fontWeight: '700' }}>Swap History (demo)</Text>
        <Text style={{ marginTop: 8 }}>This page would list completed swaps, review links, and media shared during swaps.</Text>
      </View>
    </View>
  );
}
