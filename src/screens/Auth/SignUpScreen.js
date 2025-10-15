import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, ScrollView } from 'react-native';
import NavBar from '../../components/NavBar';
import storage from '../../services/storage';
import { CATEGORIES } from '../../utils/constants';

export default function SignUpScreen({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [skillsOffered, setSkillsOffered] = useState([]);
  const [skillsWanted, setSkillsWanted] = useState([]);

  function toggle(arr, v, setter) {
    if (arr.includes(v)) setter(arr.filter(x => x !== v));
    else setter([...arr, v]);
  }

  async function onCreate() {
    if (!email || !password || !name) return alert('Enter basic info');
    const exists = await storage.findUserByEmail(email);
    if (exists) return alert('Email already used (demo)');
    const user = { id: Date.now().toString(), name, email, password, bio: '', profilePic: null, skillsOffered, skillsWanted, score: 0, badges: [], feedbacks: [], posts: [], swapHistory: [] };
    await storage.saveUser(user);
    alert('Account created (demo). Please log in.');
    navigation.navigate('Login');
  }

  return (
    <View style={{ flex: 1 }}>
      <NavBar />
      <ScrollView style={{ padding: 12 }}>
        <Text style={{ fontWeight: '700', fontSize: 18 }}>Create Account</Text>
        <TextInput placeholder="Full name" value={name} onChangeText={setName} style={s.input} />
        <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={s.input} keyboardType="email-address" />
        <TextInput placeholder="Password" value={password} onChangeText={setPassword} style={s.input} secureTextEntry />
        <Text style={{ marginTop: 8, fontWeight: '600' }}>Skills you can offer</Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {CATEGORIES.map(c => (
            <Text key={c} onPress={() => toggle(skillsOffered, c, setSkillsOffered)} style={[s.tag, skillsOffered.includes(c) && s.tagActive]}>{c}</Text>
          ))}
        </View>
        <Text style={{ marginTop: 8, fontWeight: '600' }}>Skills you want</Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {CATEGORIES.map(c => (
            <Text key={c} onPress={() => toggle(skillsWanted, c, setSkillsWanted)} style={[s.tag, skillsWanted.includes(c) && s.tagActive]}>{c}</Text>
          ))}
        </View>

        <Button title="Create Account" onPress={onCreate} />
      </ScrollView>
    </View>
  );
}

const s = StyleSheet.create({
  input: { borderWidth: 1, borderColor: '#ddd', borderRadius: 8, padding: 10, marginTop: 10 },
  tag: { padding: 8, borderRadius: 8, borderWidth: 1, borderColor: '#eee', margin: 6 },
  tagActive: { backgroundColor: '#6c5ce7', color: '#fff' }
});

