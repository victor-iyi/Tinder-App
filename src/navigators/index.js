import { StackNavigator } from 'react-navigation';
import Home from './Home';
import Conversation from './Conversation';
import Chat from './Chat';

export default StackNavigator({
  Home: {
    screen: Home,
  },
  Conversation: {
    screen: Conversation,
  },
  Chat: {
    screen: Chat,
  },
});
