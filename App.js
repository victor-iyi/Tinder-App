import React from 'react';
import { AppRegistry, View } from 'react-native';
import AppNavigator from './src/navigations';
import { styles } from './src/styles';

class App extends React.Component {

  render() {
    return (
      <View style={styles.wrapper}>
        <AppNavigator ref={nav => { this.navigation = nav; }} />
      </View>
    );
  }

}

AppRegistry.registerComponent('Tinder App', () => App);

export default App;
