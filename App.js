import React from 'react';
import {
    Alert,
    Button,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Welcome to Inner Con 2017!</Text>
          <Button
          title="Let's get this party started!"
          onPress={this.onPress}
          />
      </View>
    );
  }

  onPress = () => {
      // Works on both iOS and Android
      Alert.alert(
          'Alert Title',
          'My Alert Msg',
          [
              {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
              {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
              {text: 'OK', onPress: () => console.log('OK Pressed')},
          ],
          { cancelable: false }
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    paddingBottom: 12,
    fontSize: 22,
  }

});
