import React from 'react';
import { View, Text } from 'react-native';
import NavBar from '../components/NavBar';

export default function AchievementsScreen() {
  return (
    <View style={{ flex: 1 }}>
      <NavBar />
      <View style={{ padding: 12 }}>
        <Text style={{ fontWeight: '700' }}>Achievements</Text>
        <Text style={{ marginTop: 8 }}>Badges & rewards the user has earned will appear here.</Text>
      </View>
    </View>
  );
}
