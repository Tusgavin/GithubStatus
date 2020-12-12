import React from 'react';
import {View, Text} from 'react-native';

import Topper from '../../components/topper';
import styles from './styles';

const Guto = ({navigation}) => {
  const goBack = () => {
    navigation.navigate('Initial');
  };

  return (
    <View style={styles.mainContainer}>
      <Topper
        title={'GitHub Status'}
        subtitle={'Made by Tusgavin'}
        goBack={goBack}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.pageTitle}>GitHub Status</Text>
        <Text style={styles.pageSubtitle}>
          A simple application to learn Web Scrapping !
        </Text>
      </View>
      <View style={styles.statusCardsContainer}>
        <Text>View 2</Text>
      </View>
    </View>
  );
};

export default Guto;
