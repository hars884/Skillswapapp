import AsyncStorage from '@react-native-async-storage/async-storage';
import { v4 as uuidv4 } from 'uuid';

const KEYS = {
  USERS: 'ss_users',
  SWAPS: 'ss_swaps',
  CHATS: 'ss_chats',
  FEEDBACKS: 'ss_feedbacks',
  POSTS: 'ss_posts',
  REWARDS: 'ss_rewards'
};

async function read(key) {
  const raw = await AsyncStorage.getItem(key);
  return raw ? JSON.parse(raw) : [];
}
async function write(key, data) {
  await AsyncStorage.setItem(key, JSON.stringify(data));
}

// seed initial data
export async function seedIfEmpty() {
  const users = await read(KEYS.USERS);
  if (users.length === 0) {
    const u1 = { id: uuidv4(), name: "Alice", email: "alice@demo.com", password: "password", bio: "Frontend dev & guitar teacher", profilePic: null, skillsOffered: ["Coding","Music"], skillsWanted: ["Cooking"], score: 4.8, badges: [], feedbacks: [], posts: [], swapHistory: [] };
    const u2 = { id: uuidv4(), name: "Bob", email: "bob@demo.com", password: "password", bio: "Chef and photographer", profilePic: null, skillsOffered: ["Cooking","Photography"], skillsWanted: ["Coding"], score: 4.7, badges: [], feedbacks: [], posts: [], swapHistory: [] };
    await write(KEYS.USERS, [u1,u2]);

    const swap1 = { id: uuidv4(), createdBy: u1.id, providingSkill: "Coding", requestingSkill: "Cooking", description: "Teach web basics for a home-cooking lesson", deadline: null, mode: "Online", location: null, status: "Open", matchedUser: null, chat_id: null, media: [] };
    const swap2 = { id: uuidv4(), createdBy: u2.id, providingSkill: "Cooking", requestingSkill: "Photography", description: "Share baking tips in exchange for a portrait shoot lesson", deadline: null, mode: "Offline", location: "City Cafe", status: "Open", matchedUser: null, chat_id: null, media: [] };
    await write(KEYS.SWAPS, [swap1, swap2]);

    await write(KEYS.CHATS, []);
    await write(KEYS.FEEDBACKS, []);
    await write(KEYS.POSTS, []);
    await write(KEYS.REWARDS, [
      { id: uuidv4(), name: "First Swap", criteria: "Complete first swap", icon: null },
      { id: uuidv4(), name: "Quick Learner", criteria: "Complete 5 swaps", icon: null }
    ]);
  }
}

// User helpers
export async function getUsers() { return read(KEYS.USERS); }
export async function saveUser(user) {
  const users = await read(KEYS.USERS);
  users.push(user);
  await write(KEYS.USERS, users);
  return user;
}
export async function updateUser(updated) {
  const users = await read(KEYS.USERS);
  const idx = users.findIndex(u => u.id === updated.id);
  if (idx >= 0) users[idx] = updated;
  await write(KEYS.USERS, users);
  return updated;
}
export async function findUserByEmail(email) {
  const users = await read(KEYS.USERS);
  return users.find(u => u.email.toLowerCase() === email.toLowerCase());
}
export async function findUserById(id) {
  const users = await read(KEYS.USERS);
  return users.find(u => u.id === id);
}

// Swap helpers
export async function getSwaps() { return read(KEYS.SWAPS); }
export async function createSwap(payload) {
  const swaps = await read(KEYS.SWAPS);
  const swap = { id: uuidv4(), ...payload };
  swaps.unshift(swap);
  await write(KEYS.SWAPS, swaps);
  return swap;
}
export async function updateSwap(updated) {
  const swaps = await read(KEYS.SWAPS);
  const idx = swaps.findIndex(s => s.id === updated.id);
  if (idx >= 0) swaps[idx] = updated;
  await write(KEYS.SWAPS, swaps);
  return updated;
}
export async function findSwapById(id) {
  const swaps = await read(KEYS.SWAPS);
  return swaps.find(s => s.id === id);
}

// Chat helpers
export async function getChats() { return read(KEYS.CHATS); }
export async function createChat(participants = [], swap_id = null) {
  const chats = await read(KEYS.CHATS);
  const chat = { id: uuidv4(), participants, swap_id, messages: [] };
  chats.push(chat);
  await write(KEYS.CHATS, chats);
  return chat;
}
export async function addMessage(chatId, message) {
  const chats = await read(KEYS.CHATS);
  const c = chats.find(ch => ch.id === chatId);
  if (!c) throw new Error("Chat not found");
  c.messages.push(message);
  await write(KEYS.CHATS, chats);
  return c;
}
export async function findChatBySwapId(swap_id) {
  const chats = await read(KEYS.CHATS);
  return chats.find(c => c.swap_id === swap_id);
}

// Feedbacks
export async function createFeedback(feedback) {
  const fs = await read(KEYS.FEEDBACKS);
  const f = { id: uuidv4(), ...feedback };
  fs.push(f);
  await write(KEYS.FEEDBACKS, fs);
  return f;
}

// Posts
export async function createPost(post) {
  const posts = await read(KEYS.POSTS);
  const p = { id: uuidv4(), ...post };
  posts.unshift(p);
  await write(KEYS.POSTS, posts);
  return p;
}

export default {
  seedIfEmpty, getUsers, saveUser, updateUser, findUserByEmail, findUserById,
  getSwaps, createSwap, updateSwap, findSwapById,
  getChats, createChat, addMessage, findChatBySwapId,
  createFeedback, createPost
};
