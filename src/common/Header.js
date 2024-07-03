import React from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

const {height, width} = Dimensions.get('window');

const Header = ({
  title,
  leftIcon,
  rightIcon,
  onClickLeftIcon,
  onClickRightIcon,
}) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.btn}>
        <Image source={leftIcon} style={styles.icon}></Image>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Image
          source={rightIcon}
          style={[styles.icon, {width: 40, height: 40}]}></Image>
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    width: width,

    height: 65,
    backgroundColor: '#0786DAFD',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
  },
  btn: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 30,
    color: '#fff',
  },
  title: {
    color: '#fff',
    fontSize: 20,
  },
});
