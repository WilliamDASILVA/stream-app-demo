import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import io from 'socket.io-client';

// socket.on('event', function(data){});
// socket.on('disconnect', function(){});

const socket = io('http://localhost:3000');

socket.on('connect', () => {
  console.log('ok');
});

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  
  emit1() {
    socket.emit('test1');
  }
  emit2() {
    socket.emit('test2');
  }

  
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={this.emit1}>
          <Text style={styles.text}>Emit test1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={this.emit2}>
          <Text style={styles.text}>Emit test2</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'blue',
    padding: 8,
  },
  text: {
    color: 'white',
  }
});
