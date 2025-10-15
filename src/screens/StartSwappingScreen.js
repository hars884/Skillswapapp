import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import NavBar from '../components/NavBar';

export default function StartSwappingScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <NavBar />
      <View style={{ padding: 12 }}>
        <Text style={{ fontWeight: '700', fontSize: 18 }}>Start Swapping</Text>
        <TouchableOpacity style={s.option} onPress={() => navigation.navigate('CreateSwap')}>
          <Text style={{ fontSize: 16 }}>Create a Swap</Text>
          <Text style={{ color: '#666', marginTop: 6 }}>Post what you offer & what you want.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={s.option} onPress={() => navigation.navigate('Requests')}>
          <Text style={{ fontSize: 16 }}>View Existing Requests</Text>
          <Text style={{ color: '#666', marginTop: 6 }}>Browse open swap requests</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  option: { padding: 12, marginTop: 12, borderRadius: 8, backgroundColor: '#fff', borderWidth: 1, borderColor: '#eee' }
});
