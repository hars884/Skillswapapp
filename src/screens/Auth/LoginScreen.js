import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import NavBar from '../../components/NavBar';
import storage from '../../services/storage';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function onLogin() {
    if (!email || !password) return alert('Enter email and password');
    const u = await storage.findUserByEmail(email);
    if (!u) return alert('No user found (demo)');
    if (u.password !== password) return alert('Incorrect password (demo)');
    // for demo, we'll pass user id via navigation params
    navigation.navigate('Home', { userId: u.id });
    alert('Logged in (demo). Many features use local demo data.');
  }

  return (
    <View style={{ flex: 1 }}>
      <NavBar />
      <View style={{ padding: 12 }}>
        <Text style={{ fontSize: 18, fontWeight: '700' }}>Welcome Back</Text>
        <TextInput placeholder="Email" style={s.input} value={email} onChangeText={setEmail} keyboardType="email-address"/>
        <TextInput placeholder="Password" style={s.input} secureTextEntry value={password} onChangeText={setPassword}/>
        <Button title="Log In" onPress={onLogin}/>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  input: { borderWidth: 1, borderColor: '#ddd', borderRadius: 8, padding: 10, marginTop: 10 }
});
