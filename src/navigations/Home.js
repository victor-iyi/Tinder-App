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
      userImg: require('../../img/person.png'),
      user: 'John Doe',
    }
    // bindings
    this.goToConversation = this.goToConversation.bind(this);
  }
  static navigationOptions = {
    title: 'Home page',
  };

  goToConversation() {
    this.props.navigation.navigate('Conversation', { user: this.state.userImg } );
  }

  render() {

    return (
      <View style={styles.container}>
        <View style={styles.homeContainer}>
          <View style={styles.imgContainer}>
            <Image source={this.state.userImg} style={styles.img} />
          </View>
          <View style={styles.buttonContainer}>
            <RoundButton img={this.state.dislike} title='Dislike' onPress={() => { Alert.alert('dislike!'); }} />
            <RoundButton img={this.state.like} title='Like' onPress={this.goToConversation} />
          </View>
          </View>
      </View>
    );

  }

}

export default Home;