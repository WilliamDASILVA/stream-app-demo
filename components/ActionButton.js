import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

export default class ActionButton extends React.Component {
  pressed() {
  }
  
  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this.pressed}>
        <Text style={styles.text}>Button</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    padding: 8,
  },
  text: {
    color: 'white',
  }
});
