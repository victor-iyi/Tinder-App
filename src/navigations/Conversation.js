import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles';

class Conversation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: this.props.navigation.state.params.users,
    };
    // bindings
    this.goToChat = this.goToChat.bind(this);
  }

  goToChat(user) {
    this.props.navigation.navigate('Chat', { user: user});
  }

  static navigationOptions = {
    title: 'Conversation Lists',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.convHeading}>
          User(s) you have been matched with 
          <Text style={styles.convNo}> [{this.state.users}]</Text>
        </Text>
      </View>
    );
  }

}

export default Conversation;