import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button} from 'react-native-paper';

import COLORS from '../../constants/colors';
import Topper from '../../components/topper';
import styles from './styles';

const Initial = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <Topper title="Inicio" subtitle="Pagina inicial" goBack={null} />
      <View style={styles.descriptionContainer}>
        <Text style={styles.initialPageTitle}>GitHub Status App Idea</Text>
        <Icon
          name="angellist"
          size={50}
          color={COLORS.white}
          style={styles.titleIcon}
        />
        <Text style={styles.initialPageDescription}>
          This App was created by Tusgavin and Nutka in order to learn about Web
          Scraping and train React Native Development. This is part of a bigger
          project, a Podcast Library.
        </Text>
        <Text style={styles.initialPageDescription}>
          To checkout our implementations, click on the buttons below ;)
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          mode="contained"
          onPress={() => navigation.navigate('Tusgavin')}
          style={styles.gutoButton}>
          Tusgavin
        </Button>
        <Button
          mode="contained"
          onPress={() => navigation.navigate('Nutka')}
          style={styles.nutkaButton}>
          Nutka
        </Button>
      </View>
    </View>
  );
};

export default Initial;
