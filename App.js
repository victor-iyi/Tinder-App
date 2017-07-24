import React, { Component } from 'react'; 
import { AppRegistry, StatusBar, View } from 'react-native'; 
import AppNavigator from './src/navigators';
import { styles } from './src/styles';

class App extends Component {

  render() {
    return (
      <View style={styles.wrapper}>
        <StatusBar barStyle="default" hidden={false} />
        <AppNavigator ref={nav => { this.navigation = nav; }} />
      </View>
    );
  }

}

AppRegistry.registerComponent('Tinder App', () => App);

export default App;