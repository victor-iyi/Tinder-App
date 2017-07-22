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
      user: { name: 'PumpkinCat', 
              img:require('../../img/person.png') },
    }
    // bindings
    this.goToConversation = this.goToConversation.bind(this);
    this.nextUser = this.nextUser.bind(this);

  }

  static navigationOptions = {
    title: 'Home page',
  };

  goToConversation() {
    this.props.navigation.navigate('Conversation', { users: this.state.user.name } );
  }

  nextUser() {
    Alert.alert('Next user please??!!');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.homeContainer}>
          <View style={styles.imgContainer}>
            <Image source={this.state.user.img} style={styles.img} />
          </View>

          <View style={styles.buttonContainer}>
            <RoundButton img={this.state.dislike} title='Dislike' onPress={this.nextUser} />
            <RoundButton img={this.state.like} title='Like' onPress={this.goToConversation} />
          </View>
        </View>
      </View>
    );
  }

}

export default Home;