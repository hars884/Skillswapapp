import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function RequestCard({ item, onPress }) {
  return (
    <TouchableOpacity style={s.card} onPress={() => onPress(item)}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={s.title}>{item.providingSkill} ↔ {item.requestingSkill}</Text>
        <Text style={s.status}>{item.status}</Text>
      </View>
      <Text numberOfLines={2} style={s.desc}>{item.description}</Text>
      <Text style={s.meta}>Mode: {item.mode} {item.location ? `• ${item.location}` : ''}</Text>
    </TouchableOpacity>
  );
}

const s = StyleSheet.create({
  card: { backgroundColor: '#fff', padding: 12, borderRadius: 10, margin: 8, borderWidth: 1, borderColor: '#eee' },
  title: { fontWeight: '700' },
  desc: { marginTop: 6, color: '#444' },
  meta: { marginTop: 8, fontSize: 12, color: '#666' },
  status: { fontWeight: '700', color: '#0a84ff' }
});

