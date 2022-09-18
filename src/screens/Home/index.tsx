import {FlatList, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import {Card, Input, JobListShimmer} from 'components';
import database from '@react-native-firebase/database';
import {JobListType} from 'types/JobType';

const Home = () => {
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [jobList, setJobList] = useState<JobListType>({});

  useEffect(() => {
    database()
      .ref('/jobs/')
      .on('value', snapshot => {
        const dataSnapshot = snapshot.val();
        if (dataSnapshot) {
          setJobList(dataSnapshot);
          setIsLoading(false);
        }
      });

    return () => {
      database().ref(`jobs/`).off('value');
    };
  }, []);

  return (
    <View style={styles.container}>
      <Input onChangeText={setSearch} placeholder={'Search'} value={search} />
      {isLoading ? (
        <JobListShimmer />
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          data={Object.keys(jobList)}
          renderItem={({item}) => (
            <Card
              title={jobList[item].title}
              city={jobList[item].companyInfo.city}
              country={jobList[item].companyInfo.country}
              applicants={jobList[item].applicants}
              companyName={jobList[item].companyInfo.name}
              typeRole={jobList[item].type}
              image={jobList[item].companyInfo.image}
            />
          )}
        />
      )}
    </View>
  );
};

export default Home;
