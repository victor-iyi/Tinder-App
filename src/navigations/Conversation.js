import React, { Component } from 'react';
import { ScrollView, View, Text, Alert } from 'react-native';
import { ConversationCard } from '../components';
import { styles } from '../styles';

class Conversation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: ['PumpkinCat', 'SabreLover09', 'Zarayah'],
    };
    // bindings
    this.startChatting = this.startChatting.bind(this);
    this.renderConversationList = this.renderConversationList.bind(this);
  }

  static navigationOptions = {
    title: 'Conversation Lists',
  };

  startChatting(user) {
    this.props.navigation.navigate('Chat', { user });
  }

  renderConversationList() {
    return (
      <View style={styles.convList}>
        { this.state.users.map( (user, index) => <ConversationCard key={index} text={user} onPress={() => this.startChatting(user)} />) }
      </View>
    );
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.convHeading}>
          Users you have been matched with:
          <Text style={styles.convNo}> {this.state.users.length} </Text>
        </Text>
        {this.renderConversationList()}
      </ScrollView>
    );
  }

}

export default Conversation;