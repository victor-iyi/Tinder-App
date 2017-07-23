import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from '../styles';

class Chat extends Component {

  constructor(props) {
    super(props);

    this.state = {
      msg: '',
    };
    // bindings
  }

  static navigationOptions = ({navigation}) => ({
    title: `Chatting with ${navigation.state.params.user}`,
  });

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.chatContainer}>

        <View style={styles.chatArea}>
            <Text style={styles.isTyping}>{this.props.navigation.state.params.user} is typing...</Text>
          </View>

          <View style={styles.chatInputContainer}>
            <TextInput style={styles.chatInput}
                       onChangeText={msg => this.setState({msg})} 
                       placeholder="Type a message" 
                       underlineColorAndroid="transparent"
                       autoCapitalize="sentences" 
            />
          </View>

          </View>
      </View>
    );
  }
}

export default Chat;