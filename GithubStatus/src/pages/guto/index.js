import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Drawer, Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';
import {parse} from 'himalaya';

import COLORS from '../../constants/colors';
import Topper from '../../components/topper';
import styles from './styles';
import {ScrollView} from 'react-native-gesture-handler';

const Guto = ({navigation}) => {
  const [loadingRefresh, setLoadingRefresh] = useState(false);
  const [data, setData] = useState([]);
  const [lastUpdateDate, setLastUpdateDate] = useState('');

  const goBack = () => {
    navigation.navigate('Initial');
  };

  const getDataFromApi = () => {
    setLoadingRefresh(true);

    fetch('https://www.githubstatus.com')
      .then((response) => response.text())
      .then((html) => setData(parse(html)))
      //.then(console.log(data[2]['children'][1]))
      .then(setLastUpdateDate(moment().format('LLLL')))
      .catch((error) => console.error(error))
      .finally(() => setLoadingRefresh(false));
  };

  return (
    <View style={styles.mainContainer}>
      <Topper
        title={'GitHub Status'}
        subtitle={'Page Made by Tusgavin'}
        goBack={goBack}
      />
      <View style={styles.titleContainer}>
        <View style={styles.titleIconContainer}>
          <Text style={styles.pageTitle}>GitHub Status</Text>
          <Icon name="github-alt" size={25} color={COLORS.white} />
        </View>
        <Text style={styles.pageSubtitle}>
          A simple application to learn Web Scrapping !
        </Text>
      </View>
      <View style={styles.statusCardsContainer}>
        <ScrollView style={styles.scrollViewContainer}>
          <Drawer.Item style={styles.card} icon="star" label="First Item" />
          <Drawer.Item style={styles.card} icon="star" label="Second Item" />
          <Drawer.Item style={styles.card} icon="star" label="Third Item" />
          <Drawer.Item style={styles.card} icon="star" label="Fourth Item" />
          <Drawer.Item style={styles.card} icon="star" label="Fifth Item" />
          <Drawer.Item style={styles.card} icon="star" label="Sixth Item" />
          <Drawer.Item style={styles.card} icon="star" label="Seventh Item" />
          <Drawer.Item style={styles.card} icon="star" label="Eighth Item" />
        </ScrollView>
      </View>
      <View style={styles.footerContainer}>
        <Button
          icon="refresh"
          mode="contained"
          onPress={getDataFromApi}
          loading={loadingRefresh}>
          Refresh
        </Button>
        <Text style={styles.updateText}>
          {'Last Update: ' + lastUpdateDate}
        </Text>
      </View>
    </View>
  );
};

export default Guto;
