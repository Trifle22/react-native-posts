import React, {useState} from 'react';
import { StyleSheet, Text, View,  } from 'react-native';
import {AppLoading} from 'expo';
import { bootstrap } from './src/bootstrap';


export default function App() {

  const [isReady, setIsReady] = useState(false);

  if (!isReady) {
    return <AppLoading 
    onFinish={() => setIsReady(true)} 
    onError={(err) => console.log(err)}
    startAsync={bootstrap}/>;
  }

  return (
    <View >
      <Text>hello</Text>
    </View>
  );
}