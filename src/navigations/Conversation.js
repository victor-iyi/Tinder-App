import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles';

class Conversation extends Component {

  static navigationOptions = {
    title: 'Conversation Lists',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.convHeading}>
          User(s) you have been matched with 
          <Text style={styles.convNo}> [{this.props.navigation.state.params.user}]</Text>
        </Text>
      </View>
    );
  }

}

export default Conversation;