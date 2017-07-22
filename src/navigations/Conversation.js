import React, { Component } from 'react';
import { View, Text, Alert } from 'react-native';
import ConversationCard from '../components/ConversationCard';
import { styles } from '../styles';

class Conversation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: this.props.navigation.state.params.users,
    };
    // bindings
    this.goToChat = this.goToChat.bind(this);
    this.renderConversationList = this.renderConversationList.bind(this);
  }

  static navigationOptions = {
    title: 'Conversation Lists',
  };

  renderUser(user, index) {
    console.log('Index', index);
    return <ConversationCard key={index} text={user} onPress={() => Alert.alert(`User: ${user}`) } />
  }

  renderConversationList() {
    const users = ['John Doe', 'Jane Doe', 'Janie Doe', 'Jimmy Doe', 'John Smit'];
    return (
      <View style={styles.convList}>
        {users.map(this.renderUser)}
      </View>
    )
  }

  goToChat(user) {
    this.props.navigation.navigate('Chat', { user: user});
  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.convHeading}>
          User(s) you have been matched with 
          <Text style={styles.convNo}> [{this.state.users}]</Text>
        </Text>
          {this.renderConversationList()}
      </View>
    );
  }

}

export default Conversation;