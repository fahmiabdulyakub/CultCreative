import {View} from 'react-native';
import React, {memo} from 'react';
import styles from './styles';
import {PropsType} from './types';
import {TextInput} from 'react-native';
import {Colors} from 'themes';
import {ICSearch} from 'assets';

const Input = ({value, placeholder, onChangeText}: PropsType) => {
  return (
    <View style={styles.container}>
      {<ICSearch />}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor={Colors.dark_gray}
        numberOfLines={5}
      />
    </View>
  );
};

export default memo(Input);
