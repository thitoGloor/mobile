import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Inicio, Text, View } from 'react-native';
import inicio from './src/components/inicio';

export default function App() {
  return (
    <View style={styles.container}>
     <Inicio nome="Thito" data = "21/05/1986"/>
     {/* <StatusBar style = "auto"/> o prof retirou essa linha*/ }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
