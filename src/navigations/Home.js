import React, { Component } from 'react';
import { Text, View, Button, Alert } from 'react-native';
import { styles } from '../styles';

class Home extends Component {

  static navigationOptions = {
    title: 'Home page',
  };

  render() {

    return (
      <View style={styles.container}>
        <View style={styles.imgContainer}>

        </View>
        <View style={styles.buttonContainer}>
          <Button title='Like' onPress={() => Alert.alert('hi')} />
          <Button title='Dislike' onPress={() => Alert.alert('hi')} />
        </View>
      </View>
    );

  }

}

export default Home;