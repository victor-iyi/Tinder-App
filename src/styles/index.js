import { StyleSheet } from 'react-native';

const home = require('./_partials/_home');
const conversation = require('./_partials/_conversation');
const chat = require('./_partials/_chat');
const color = require('./_partials/_vars/_colors');

export const styles = StyleSheet.create({
  // General Styling
  wrapper: {
    flex: 1,
    paddingTop: 23,
  },
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: color.white,
  },
  ...home, // contains home styling
  ...conversation, // contains conversation styling
  ...chat, // contains chat styling
});