import React from 'react';
import { View, Text } from 'react-native';
import NavBar from '../components/NavBar';

export default function AboutScreen() {
  return (
    <View style={{ flex: 1 }}>
      <NavBar />
      <View style={{ padding: 12 }}>
        <Text style={{ fontWeight: '700', fontSize: 18 }}>About SkillSwap</Text>
        <Text style={{ marginTop: 8 }}>SkillSwap is a community-driven platform to exchange skills between learners and teachers. This demo shows local functionality — integrate a backend for persistence, auth, and media storage.</Text>
      </View>
    </View>
  );
}
