import React, { useEffect, useState } from 'react';
import { View, TextInput, Button, FlatList, Text } from 'react-native';
import NavBar from '../components/NavBar';
import storage from '../services/storage';
import { useRoute } from '@react-navigation/native';

export default function InboxScreen() {
  const route = useRoute();
  const { chatId } = route.params || {};
  const [chat, setChat] = useState(null);
  const [text, setText] = useState('');

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const chats = await storage.getChats();
    const c = chats.find(x => x.id === chatId);
    setChat(c || { messages: [] });
  }

  async function send() {
    if (!text.trim()) return;
    const msg = { sender_id: 'demo', text, media: null, voice: null, timestamp: new Date().toISOString() };
    await storage.addMessage(chatId, msg);
    setText('');
    load();
  }

  return (
    <View style={{ flex: 1 }}>
      <NavBar />
      <View style={{ flex: 1, padding: 12 }}>
        <FlatList data={chat?.messages || []} keyExtractor={(i, idx) => idx.toString()} renderItem={({ item }) => <View style={{ marginVertical: 6, backgroundColor: '#fff', padding: 8, borderRadius: 8 }}><Text style={{ fontWeight: '700' }}>{item.sender_id}</Text><Text>{item.text}</Text><Text style={{ fontSize: 10, color: '#666' }}>{new Date(item.timestamp).toLocaleString()}</Text></View>} />
      </View>
      <View style={{ padding: 12, flexDirection: 'row' }}>
        <TextInput value={text} onChangeText={setText} placeholder="Message" style={{ flex: 1, borderWidth: 1, borderColor: '#ddd', borderRadius: 8, padding: 8 }} />
        <Button title="Send" onPress={send} />
      </View>
    </View>
  );
}
