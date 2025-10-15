import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import NavBar from '../components/NavBar';
import storage from '../services/storage';
import { useRoute } from '@react-navigation/native';

export default function SwapDetailScreen({ navigation }) {
  const route = useRoute();
  const { swapId } = route.params || {};
  const [swap, setSwap] = useState(null);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const s = await storage.findSwapById(swapId);
    setSwap(s);
  }

  async function openChat() {
    // if chat exists, open, else create and link
    let chat = await storage.findChatBySwapId(swapId);
    if (!chat) {
      chat = await storage.createChat([swap.createdBy], swapId);
      swap.chat_id = chat.id;
      await storage.updateSwap(swap);
    }
    navigation.navigate('Inbox', { chatId: chat.id, swapId });
  }

  if (!swap) return (<View style={{ flex:1 }}><NavBar /><Text style={{padding:12}}>Loading...</Text></View>);
  return (
    <View style={{ flex: 1 }}>
      <NavBar />
      <View style={{ padding: 12 }}>
        <Text style={{ fontWeight: '700', fontSize: 18 }}>{swap.providingSkill} ↔ {swap.requestingSkill}</Text>
        <Text style={{ marginTop: 8 }}>{swap.description}</Text>
        <Text style={{ marginTop: 8, color: '#666' }}>Mode: {swap.mode} {swap.location ? `• ${swap.location}` : ''}</Text>
        <View style={{ marginTop: 16 }}>
          <Button title="Open Chat / Inbox" onPress={openChat} />
          <View style={{ height: 8 }} />
          <Button title="Mark In Progress" onPress={async () => { swap.status = 'In Progress'; await storage.updateSwap(swap); alert('Marked In Progress (demo)'); load(); }} />
        </View>
      </View>
    </View>
  );
}
