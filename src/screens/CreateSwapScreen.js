import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Picker, TouchableOpacity } from 'react-native';
import NavBar from '../components/NavBar';
import { CATEGORIES } from '../utils/constants';
import storage from '../services/storage';

export default function CreateSwapScreen({ navigation }) {
  const [providing, setProviding] = useState(CATEGORIES[0]);
  const [requesting, setRequesting] = useState(CATEGORIES[1] || CATEGORIES[0]);
  const [desc, setDesc] = useState('');
  const [mode, setMode] = useState('Online');
  const [location, setLocation] = useState('');
  const [deadline, setDeadline] = useState('');

  async function onCreate() {
    if (!providing || !requesting) return alert('Choose skills');
    const payload = { createdBy: 'demo', providingSkill: providing, requestingSkill: requesting, description: desc, deadline: deadline || null, mode, location: mode === 'Offline' ? location : null, status: 'Open', matchedUser: null, chat_id: null, media: [] };
    const swap = await storage.createSwap(payload);
    alert('Swap created (demo)');
    navigation.navigate('Requests');
  }

  return (
    <View style={{ flex: 1 }}>
      <NavBar />
      <View style={{ padding: 12 }}>
        <Text style={{ fontSize: 18, fontWeight: '700' }}>Create Swap</Text>
        <Text style={{ marginTop: 8 }}>Providing</Text>
        <Picker selectedValue={providing} onValueChange={(v) => setProviding(v)}>{CATEGORIES.map(c => <Picker.Item key={c} label={c} value={c} />)}</Picker>
        <Text>Requesting</Text>
        <Picker selectedValue={requesting} onValueChange={(v) => setRequesting(v)}>{CATEGORIES.map(c => <Picker.Item key={c} label={c} value={c} />)}</Picker>

        <Text>Description</Text>
        <TextInput style={s.input} value={desc} onChangeText={setDesc} placeholder="What will you teach / expect?" multiline />
        <Text>Mode</Text>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={[s.mode, mode === 'Online' && s.modeActive]} onPress={() => setMode('Online')}><Text>Online</Text></TouchableOpacity>
          <TouchableOpacity style={[s.mode, mode === 'Offline' && s.modeActive]} onPress={() => setMode('Offline')}><Text>Offline</Text></TouchableOpacity>
        </View>
        {mode === 'Offline' && <TextInput placeholder="Location" style={s.input} value={location} onChangeText={setLocation} />}
        <TextInput placeholder="Deadline (leave empty for forever)" style={s.input} value={deadline} onChangeText={setDeadline} />

        <Button title="Create Swap" onPress={onCreate} />
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  input: { borderWidth: 1, borderColor: '#ddd', borderRadius: 8, padding: 8, marginTop: 8 },
  mode: { padding: 8, borderRadius: 8, borderWidth: 1, borderColor: '#eee', marginRight: 8 },
  modeActive: { backgroundColor: '#dfe4ff' }
});
