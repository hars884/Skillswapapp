import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import NavBar from '../components/NavBar';
import SkillCard from '../components/SkillCard';
import { CATEGORIES } from '../utils/constants';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const nav = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <NavBar />
      <ScrollView contentContainerStyle={s.container}>
        <View style={s.hero}>
          <View style={{ flex: 1 }}>
            <Text style={s.head}>Trade Skills,{"\n"}Build Community</Text>
            <Text style={s.sub}>Connect with others to teach what you know and learn what you love.</Text>
            <View style={{ flexDirection: 'row', marginTop: 12 }}>
              <TouchableOpacity style={s.primary} onPress={() => nav.navigate('StartSwapping')}>
                <Text style={{ color: '#fff' }}>Start Swapping</Text>
              </TouchableOpacity>
              <TouchableOpacity style={s.ghost} onPress={() => nav.navigate('Requests')}>
                <Text>Explore Community</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Image source={require('../../assets/placeholder.png')} style={s.heroImg} />
        </View>

        <View style={s.section}>
          <Text style={s.sectionTitle}>Popular Skill Categories</Text>
          <View style={s.grid}>
            {CATEGORIES.map(c => (
              <SkillCard key={c} category={c} onPress={() => nav.navigate('Requests', { category: c })} />
            ))}
          </View>
        </View>

        <View style={s.section}>
          <Text style={s.sectionTitle}>How it Works</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={s.step}><Text style={s.stepTitle}>Create Profile</Text></View>
            <View style={s.step}><Text style={s.stepTitle}>Find a Match</Text></View>
            <View style={s.step}><Text style={s.stepTitle}>Start Swapping</Text></View>
            <View style={s.step}><Text style={s.stepTitle}>Earn Rewards</Text></View>
          </View>
        </View>

        <View style={[s.section, { alignItems: 'center' }]}>
          <Text style={s.readyTitle}>Ready to Start Your Journey?</Text>
          <Text style={{ textAlign: 'center', color: '#666', marginVertical: 12 }}>Join thousands of learners and teachers building skills together. Your next skill swap is just a click away.</Text>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={s.primary} onPress={() => nav.navigate('SignUp')}>
              <Text style={{ color: '#fff' }}>Create Free Account</Text>
            </TouchableOpacity>
            <TouchableOpacity style={s.ghost} onPress={() => nav.navigate('About')}>
              <Text>Learn More</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ height: 80 }} />
      </ScrollView>
    </View>
  );
}

const s = StyleSheet.create({
  container: { padding: 12, backgroundColor: '#f6f7fb' },
  hero: { flexDirection: 'row', backgroundColor: '#fff', padding: 12, borderRadius: 12, alignItems: 'center' },
  head: { fontSize: 26, fontWeight: '800' },
  sub: { color: '#666', marginTop: 8 },
  heroImg: { width: 140, height: 100, borderRadius: 10, marginLeft: 12 },
  primary: { backgroundColor: '#6c5ce7', padding: 12, borderRadius: 8, marginRight: 8 },
  ghost: { backgroundColor: '#fff', padding: 12, borderRadius: 8, borderWidth: 1, borderColor: '#ddd' },
  section: { marginTop: 18 },
  sectionTitle: { fontSize: 18, fontWeight: '700', marginBottom: 8 },
  grid: { flexDirection: 'row', flexWrap: 'wrap' },
  step: { width: '23%', backgroundColor: '#fff', padding: 10, borderRadius: 8, alignItems: 'center' },
  stepTitle: { fontSize: 12, textAlign: 'center' },
  readyTitle: { fontSize: 20, fontWeight: '700' }
});
