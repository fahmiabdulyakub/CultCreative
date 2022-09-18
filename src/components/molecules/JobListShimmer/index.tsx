import {ScrollView, View} from 'react-native';
import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import styles from './styles';

const JobListShimmer = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.containerCard}>
        <SkeletonPlaceholder speed={1000}>
          <View style={styles.content}>
            <View style={styles.image} />
            <View style={styles.containerContent}>
              <View style={styles.title} />
              <View style={styles.companyName} />
              <View style={styles.description} />
              <View style={styles.role} />
            </View>
          </View>
        </SkeletonPlaceholder>
      </View>
      <View style={styles.containerCard}>
        <SkeletonPlaceholder speed={1000}>
          <View style={styles.content}>
            <View style={styles.image} />
            <View style={styles.containerContent}>
              <View style={styles.title} />
              <View style={styles.companyName} />
              <View style={styles.description} />
              <View style={styles.role} />
            </View>
          </View>
        </SkeletonPlaceholder>
      </View>
      <View style={styles.containerCard}>
        <SkeletonPlaceholder speed={1000}>
          <View style={styles.content}>
            <View style={styles.image} />
            <View style={styles.containerContent}>
              <View style={styles.title} />
              <View style={styles.companyName} />
              <View style={styles.description} />
              <View style={styles.role} />
            </View>
          </View>
        </SkeletonPlaceholder>
      </View>
      <View style={styles.containerCard}>
        <SkeletonPlaceholder speed={1000}>
          <View style={styles.content}>
            <View style={styles.image} />
            <View style={styles.containerContent}>
              <View style={styles.title} />
              <View style={styles.companyName} />
              <View style={styles.description} />
              <View style={styles.role} />
            </View>
          </View>
        </SkeletonPlaceholder>
      </View>
      <View style={styles.containerCard}>
        <SkeletonPlaceholder speed={1000}>
          <View style={styles.content}>
            <View style={styles.image} />
            <View style={styles.containerContent}>
              <View style={styles.title} />
              <View style={styles.companyName} />
              <View style={styles.description} />
              <View style={styles.role} />
            </View>
          </View>
        </SkeletonPlaceholder>
      </View>
    </ScrollView>
  );
};

export default JobListShimmer;
