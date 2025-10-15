import React from 'react';
import { View, Text, Button } from 'react-native';
import NavBar from '../components/NavBar';

export default function FeedbackScreen() {
  return (
    <View style={{ flex: 1 }}>
      <NavBar />
      <View style={{ padding: 12 }}>
        <Text style={{ fontWeight: '700' }}>Feedback (demo)</Text>
        <Text style={{ marginTop: 8 }}>Here other users can leave feedback on profiles. In production this lists feedback for a profile and allows posting new feedback tied to a swap.</Text>
      </View>
    </View>
  );
}
