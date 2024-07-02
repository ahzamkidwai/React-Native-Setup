import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DashboardScreen from './screens/DashboardScreen';
import SettingScreen from './screens/SettingScreen';

// Dummy screens for demonstration
/* const DashboardScreen = () => (
  <View style={styles.screenContainer}>
    <Text style={styles.screenText}>Dashboard Screen</Text>
  </View>
);

const SettingScreen = () => (
  <View style={styles.screenContainer}>
    <Text style={styles.screenText}>Setting Screen</Text>
  </View>
); */

const Drawer = createDrawerNavigator();

const App = () => (
  <NavigationContainer>
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Dashboard" component={DashboardScreen} />
      <Drawer.Screen name="Setting" component={SettingScreen} />
    </Drawer.Navigator>
  </NavigationContainer>
);

const HomeScreen = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Hello World</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    color: 'red',
  },
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  screenText: {
    fontSize: 24,
  },
});

export default App;
