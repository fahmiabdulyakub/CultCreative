import {View} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {Input} from 'components';

const Home = () => {
  const [search, setSearch] = useState('');
  return (
    <View style={styles.container}>
      <Input onChangeText={setSearch} placeholder={'Search'} value={search} />
    </View>
  );
};

export default Home;
