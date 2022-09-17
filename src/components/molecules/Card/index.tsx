import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {memo} from 'react';
import styles from './styles';
import {PropsType} from './types';

const Card = ({
  title,
  image,
  city,
  companyName,
  country,
  applicants,
  typeRole,
}: PropsType) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={{uri: image}} style={styles.image} />
      <View style={styles.containerContent}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.companyName}>{companyName}</Text>
        <Text style={styles.description}>
          {city}, {country}
        </Text>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>{typeRole}</Text>
          <View style={styles.line} />
          <Text style={styles.description}>{applicants} Applicants</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default memo(Card);
