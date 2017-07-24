import React from 'react';
import { TouchableNativeFeedback, Platform, View, Text } from 'react-native';
import { styles } from '../styles';

const ConversationCard = (props) => {
  return (
    <TouchableNativeFeedback
        onPress={props.onPress}
        background={ Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : '' }>
      <View style={styles.convCard}>
        <Text style={styles.convCardText}>{props.text}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

export default ConversationCard;
