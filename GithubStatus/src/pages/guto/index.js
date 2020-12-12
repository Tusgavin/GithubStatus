import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Drawer, Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

import COLORS from '../../constants/colors';
import Topper from '../../components/topper';
import styles from './styles';
import {ScrollView} from 'react-native-gesture-handler';

const Guto = ({navigation}) => {
  const [loadingRefresh, setLoadingRefresh] = useState(false);
  const [data, setData] = useState([]);

  const goBack = () => {
    navigation.navigate('Initial');
  };

  const getDataFromApi = () => {
    setLoadingRefresh(true);

    fetch('https://www.githubstatus.com')
      .then((response) => response.text())
      .then((json) => console.log(json))
      .catch((error) => console.error(error))
      .finally(() => setLoadingRefresh(false));

    console.log(data);
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
          <Drawer.Item style={styles.card} icon="star" label="Sixth Item" />
          <Drawer.Item style={styles.card} icon="star" label="Sixth Item" />
          <Drawer.Item style={styles.card} icon="star" label="Sixth Item" />
          <Drawer.Item style={styles.card} icon="star" label="Sixth Item" />
          <Drawer.Item style={styles.card} icon="star" label="Sixth Item" />
          <Drawer.Item style={styles.card} icon="star" label="Sixth Item" />
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
        <Text style={styles.updateText}>Last updated</Text>
      </View>
    </View>
  );
};

export default Guto;
