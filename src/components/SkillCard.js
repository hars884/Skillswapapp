import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

export default function SkillCard({ category, onPress }) {
  return (
    <TouchableOpacity style={s.card} onPress={() => onPress(category)}>
      <Text style={s.text}>{category}</Text>
    </TouchableOpacity>
  );
}
const s = StyleSheet.create({
  card: { padding: 16, borderRadius: 10, borderWidth: 1, borderColor: '#eee', margin: 8, minWidth: 140, alignItems: 'center' },
  text: { fontWeight: '600' }
});

