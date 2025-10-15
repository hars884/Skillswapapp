import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import NavBar from '../components/NavBar';
import storage from '../services/storage';

export default function HighlyRatedScreen({ navigation }) {
  const [users, setUsers] = useState([]);
  useEffect(() => { load(); }, []);
  async function load() {
    const u = await storage.getUsers();
    setUsers(u.sort((a,b)=> (b.score||0) - (a.score||0)));
  }
  return (
    <View style={{ flex: 1 }}>
      <NavBar />
      <View style={{ padding: 12 }}>
        <Text style={{ fontWeight: '700' }}>Highly Rated Profiles</Text>
        <FlatList data={users} keyExtractor={i=>i.id} renderItem={({item}) => <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={{padding:12, backgroundColor:'#fff', marginTop:8, borderRadius:8}}><Text style={{fontWeight:'700'}}>{item.name} • {item.score}</Text><Text>{item.skillsOffered.join(', ')}</Text></TouchableOpacity>} />
      </View>
    </View>
  );
}
