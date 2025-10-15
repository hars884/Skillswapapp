import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import NavBar from '../components/NavBar';
import storage from '../services/storage';

export default function ProfileScreen({ navigation }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    // demo: pick first user
    const users = await storage.getUsers();
    setUser(users[0] || null);
  }

  if (!user) return (<View style={{ flex:1 }}><NavBar /><Text style={{padding:12}}>No profile yet (demo).</Text></View>);
  return (
    <View style={{ flex: 1 }}>
      <NavBar />
      <View style={{ padding: 12 }}>
        <Text style={{ fontSize: 20, fontWeight: '700' }}>{user.name}</Text>
        <Text style={{ color: '#666', marginTop: 6 }}>{user.bio}</Text>
        <Text style={{ marginTop: 8 }}>Skills Offered: {user.skillsOffered.join(', ')}</Text>
        <Text>Skills Wanted: {user.skillsWanted.join(', ')}</Text>
        <Text style={{ marginTop: 8 }}>Score: {user.score}</Text>

        <View style={{ marginTop: 12 }}>
          <Button title="View Feedback" onPress={() => navigation.navigate('Feedback', { userId: user.id })} />
          <View style={{ height: 8 }} />
          <Button title="History" onPress={() => navigation.navigate('History', { userId: user.id })} />
          <View style={{ height: 8 }} />
          <Button title="Achievements" onPress={() => navigation.navigate('Achievements')} />
        </View>
      </View>
    </View>
  );
}
