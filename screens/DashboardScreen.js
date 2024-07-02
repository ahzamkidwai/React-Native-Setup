import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';

const DashboardScreen = () => {
  const [name, setName] = useState('Ahzam');
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Dashboard Screen</Text>
      <Text> Welcom , {name}</Text>
    </View>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});
