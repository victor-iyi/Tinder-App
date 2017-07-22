import React, { Component } from 'react';
import { TouchableNativeFeedback, Platform, View, Text } from 'react-native';
import { styles } from '../styles';

class ConversationCard extends Component {

  render() {
    return (
      <TouchableNativeFeedback 
          onPress={this.props.onPress} 
          background={ Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : '' }>
        <View style={styles.convCard}>
          <Text style={styles.convCardText}>{this.props.text}</Text>
        </View>
      </TouchableNativeFeedback>
    );
  }

}

export default ConversationCard;