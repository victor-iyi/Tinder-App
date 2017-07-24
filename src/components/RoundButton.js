import React from 'react';
import { View, Text, Image, TouchableNativeFeedback, Platform } from 'react-native';
import { styles } from '../styles';

const RoundButton = (props) => {
  return (
    <View>
      <TouchableNativeFeedback
          onPress={props.onPress}
          background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : '' }>
        <View style={styles.roundButton}>
          <Image style={styles.roundButtonImg} source={props.img} />
        </View>
      </TouchableNativeFeedback>
      <Text style={styles.roundButtonTitle}>{props.title}</Text>
    </View>
  );
};

export default RoundButton;
