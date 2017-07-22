import React, { Component } from 'react';
import { View, Text, Image, TouchableNativeFeedback, Platform } from 'react-native';
import { styles } from '../styles';

class RoundButton extends Component {
  render() {
    return (
      <View>
        <TouchableNativeFeedback
            onPress={this.props.onPress}
            background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : '' }>
          <View style={styles.roundButton}>
            <Image style={styles.roundButtonImg} source={this.props.img} />
          </View>
        </TouchableNativeFeedback>
        <Text style={styles.roundButtonTitle}>{this.props.title}</Text>
      </View>
    );
  }
}

export default RoundButton;