import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function NavBar() {
  const nav = useNavigation();
  return (
    <View style={s.container}>
      <Text style={s.title}>SkillSwap</Text>
      <View style={s.actions}>
        <TouchableOpacity style={s.btn} onPress={() => nav.navigate('SignUp')}>
          <Text style={s.btnText}>Create Account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={s.btn} onPress={() => nav.navigate('Login')}>
          <Text style={s.btnText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={s.btn} onPress={() => nav.navigate('Requests')}>
          <Text style={s.btnText}>Requests</Text>
        </TouchableOpacity>
        <TouchableOpacity style={s.btn} onPress={() => nav.navigate('Profile')}>
          <Text style={s.btnText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  container: { height: 64, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#fff' },
  title: { fontSize: 20, fontWeight: '700' },
  actions: { flexDirection: 'row' },
  btn: { marginLeft: 8, paddingHorizontal: 10, paddingVertical: 6, borderRadius: 6, backgroundColor: '#f2f2f2' },
  btnText: { fontSize: 12 }
});

