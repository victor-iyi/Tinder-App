import { StackNavigator } from 'react-navigation';
import Home from './Home';
import Conversation from './Conversation';

export default StackNavigator({
  Home: {
    screen: Home,
  },
  Conversation: {
    screen: Conversation,
  },
});
