import * as React from 'react';
import { useState } from "react";
import { Platform, StyleSheet, Text, View, Button, Alert, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

function Separator() {
  return <View style={styles.separator} />;
}

export default function HomeScreen({ navigation }) {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);
  return (
    <View style={styles.container}>
      <Text style={styles.getStartedText}>PAGE TURNER</Text>
      <Text style={styles.instructions}>Start building your reading habit today!</Text>
      {/* <Button title="LOG IN" onPress={() => Alert.alert('Logging you in...')}
        color="#f194ff"></Button> */}
      <View style={styles.separator}></View>
      <Separator />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Details')}
      >
        <Text style={styles.touchOpText}>LOG IN</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#BB86FC',
    fontSize: 18,
    marginBottom: 40,
  },
  getStartedText: {
    alignItems: 'center',
    color: 'rgba(0,0,0,0.4)',
    color: '#BB86FC',
    fontSize: 62,
    marginHorizontal: 50,
    lineHeight: 73,
    textAlign: 'center',
    letterSpacing: 2.4
  },
  separator: {
    marginVertical: 8,
    borderColor: '#BB86FC',
  },
  button: {
    alignItems: "center",
    width: '30',
    borderColor: '#DDDDDD',
    borderWidth: 1,
    padding: 10,
  },
  touchOpText: {
    textAlign: 'center',
    color: '#BB86FC',
    fontSize: 18,
  }
});
