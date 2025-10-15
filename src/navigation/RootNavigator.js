import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/Auth/LoginScreen';
import SignUpScreen from '../screens/Auth/SignUpScreen';
import RequestsScreen from '../screens/RequestsScreen';
import CreateSwapScreen from '../screens/CreateSwapScreen';
import SwapDetailScreen from '../screens/SwapDetailScreen';
import ProfileScreen from '../screens/ProfileScreen';
import StartSwappingScreen from '../screens/StartSwappingScreen';
import InboxScreen from '../screens/InboxScreen';
import HistoryScreen from '../screens/HistoryScreen';
import FeedbackScreen from '../screens/FeedbackScreen';
import AchievementsScreen from '../screens/AchievementsScreen';
import HighlyRatedScreen from '../screens/HighlyRatedScreen';
import AboutScreen from '../screens/AboutScreen';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="StartSwapping" component={StartSwappingScreen} />
      <Stack.Screen name="Requests" component={RequestsScreen} />
      <Stack.Screen name="CreateSwap" component={CreateSwapScreen} />
      <Stack.Screen name="SwapDetail" component={SwapDetailScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Inbox" component={InboxScreen} />
      <Stack.Screen name="History" component={HistoryScreen} />
      <Stack.Screen name="Feedback" component={FeedbackScreen} />
      <Stack.Screen name="Achievements" component={AchievementsScreen} />
      <Stack.Screen name="HighlyRated" component={HighlyRatedScreen} />
      <Stack.Screen name="About" component={AboutScreen} />
    </Stack.Navigator>
  );
}
