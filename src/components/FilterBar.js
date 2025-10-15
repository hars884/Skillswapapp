import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, ScrollView } from 'react-native';
import { CATEGORIES } from '../utils/constants';

export default function FilterBar({ onTextChange, onCategorySelect }) {
  const [q, setQ] = useState('');
  return (
    <View style={s.wrap}>
      <TextInput placeholder="Search skill (type or press category)" value={q} onChangeText={t => { setQ(t); onTextChange(t); }} style={s.input} />
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={s.catRow}>
        {CATEGORIES.map(c => (
          <TouchableOpacity key={c} style={s.cat} onPress={() => onCategorySelect(c)}>
            <Text style={{ fontSize: 12 }}>{c}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={s.clear} onPress={() => { setQ(''); onTextChange(''); onCategorySelect(null); }}>
          <Text style={{ fontSize: 12 }}>Clear</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const s = StyleSheet.create({
  wrap: { padding: 12, backgroundColor: '#fff' },
  input: { borderWidth: 1, borderColor: '#ddd', borderRadius: 8, padding: 10, marginBottom: 8 },
  catRow: { flexDirection: 'row' },
  cat: { padding: 8, borderRadius: 8, borderWidth: 1, borderColor: '#eee', marginRight: 8 },
  clear: { padding: 8, borderRadius: 8, borderWidth: 1, borderColor: '#f88' }
});

