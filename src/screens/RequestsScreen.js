import React, { useEffect, useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import NavBar from '../components/NavBar';
import FilterBar from '../components/FilterBar';
import RequestCard from '../components/RequestCard';
import storage from '../services/storage';

export default function RequestsScreen({ navigation, route }) {
  const [swaps, setSwaps] = useState([]);
  const [filterText, setFilterText] = useState('');
  const [category, setCategory] = useState(route?.params?.category || null);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const s = await storage.getSwaps();
    setSwaps(s);
  }

  function handleSearch(text) {
    setFilterText(text);
  }

  function handleCategory(cat) {
    setCategory(cat);
  }

  function filtered() {
    return swaps.filter(s => {
      // category filter matches either providing or requesting skill
      if (category && !(s.providingSkill === category || s.requestingSkill === category)) return false;
      if (!filterText) return true;
      const q = filterText.toLowerCase();
      return s.providingSkill.toLowerCase().includes(q) || s.requestingSkill.toLowerCase().includes(q) || s.description.toLowerCase().includes(q);
    });
  }

  return (
    <View style={{ flex: 1 }}>
      <NavBar />
      <FilterBar onTextChange={handleSearch} onCategorySelect={handleCategory} />
      <View style={{ padding: 12 }}>
        <Text style={{ fontWeight: '700', marginBottom: 8 }}>{category ? `Showing: ${category}` : 'All Requests'}</Text>
        <FlatList data={filtered()} keyExtractor={i => i.id} renderItem={({ item }) => <RequestCard item={item} onPress={(it) => navigation.navigate('SwapDetail', { swapId: it.id })} />} />
      </View>
    </View>
  );
}
