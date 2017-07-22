import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles';

class Chat extends Component {
  
  static navigationOptions = ({navigation}) => ({
    title: `Chatting with ${navigation.state.params.user}`,
  });

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.navigation.state.params.user}</Text>
      </View>
    );
  }
}

export default Chat;