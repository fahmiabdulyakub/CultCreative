import {View} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {Card, Input} from 'components';

const Home = () => {
  const [search, setSearch] = useState('');
  return (
    <View style={styles.container}>
      <Input onChangeText={setSearch} placeholder={'Search'} value={search} />
      <Card
        title="Administrative and Social Media Assistant"
        city="Jakarta"
        country="Indonesia"
        applicants={3}
        companyName={'Venture Lab'}
        typeRole={'Full Time'}
        image={'https://randomuser.me/api/portraits/women/58.jpg'}
      />
    </View>
  );
};

export default Home;
