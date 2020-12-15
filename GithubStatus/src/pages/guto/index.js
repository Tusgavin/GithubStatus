import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {Button, Card} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';
import {ScrollView} from 'react-native-gesture-handler';
import {scrapGhStatus} from '../../modules/api';

import COLORS from '../../constants/colors';
import Topper from '../../components/topper';
import styles from './styles';

const Tusgavin = ({navigation}) => {
  const [loadingRefresh, setLoadingRefresh] = useState(false);
  const [data, setData] = useState([]);
  const [lastUpdateDate, setLastUpdateDate] = useState('');

  const goBack = () => {
    navigation.navigate('Initial');
  };

  const getDataFromApi = async () => {
    try {
      setLoadingRefresh(true);
      const resp = await scrapGhStatus();
      resp.map((item) => {
        if (item.name === 'Visit www.githubstatus.com for more information') {
          item.name = 'GitHub Status Page';
        }
      });
      setData(resp);
      setLastUpdateDate(moment().format('LLLL'));
      setLoadingRefresh(false);
    } catch (err) {
      console.log(err);
      setLoadingRefresh(false);
    }
  };

  const setStatusIcons = (item) => {
    if (item.status === 'operational') {
      return <Icon name="check" size={25} color={COLORS.green} />;
    } else if (item.status === 'under_maintenance') {
      return <Icon name="wrench" size={25} color={COLORS.orange} />;
    } else {
      return <Icon name="question" size={25} color={COLORS.red} />;
    }
  };

  useEffect(() => {
    getDataFromApi();
  }, []);

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
          A simple application to learn Web Scraping !
        </Text>
      </View>
      <View style={styles.statusCardsContainer}>
        <ScrollView style={styles.scrollViewContainer}>
          {data &&
            data.map((item, id) => {
              return (
                <Card.Title
                  style={styles.card}
                  key={id}
                  title={item.name}
                  subtitle={item.status}
                  right={() => setStatusIcons(item)}
                />
              );
            })}
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

export default Tusgavin;
