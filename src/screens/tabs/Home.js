import {View, Text} from 'react-native';
import React from 'react';
import Header from '../../common/Header';

const Home = () => {
  return (
    <View>
      <Text>Home</Text>
      <Header
        leftIcon={require('../../images/app.png')}
        rightIcon={require('../../images/shoppingcart.png')}
        title={'Grocery App'}
      />
    </View>
  );
};

export default Home;
