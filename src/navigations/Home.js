import React, { Component } from 'react';
import { Text, View, Button, Image, Alert } from 'react-native';
import { RoundButton } from '../components';
import { styles } from '../styles';


class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      like: require('../../img/like.png'),
      dislike: require('../../img/dislike.png'),
      personImg: require('../../img/person.png'),
    }
  }
  static navigationOptions = {
    title: 'Home page',
  };

  render() {

    return (
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image source={this.state.personImg} style={styles.img} />
        </View>
        <View style={styles.buttonContainer}>
          <RoundButton img={this.state.dislike} title='Dislike' onPress={() => { Alert.alert('dislike!'); }} />
          <RoundButton img={this.state.like} title='Like' onPress={() => { Alert.alert('like!'); }} />
        </View>
      </View>
    );

  }

}

export default Home;