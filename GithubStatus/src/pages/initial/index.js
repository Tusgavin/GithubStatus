import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {View, Text} from 'react-native';

import {Button} from 'react-native-paper';

import Topper from '../../components/topper';

const Initial = ({navigation}) => {
  return (
    <>
      <Topper title="Initial" subtitle="Pagina inicial" />
      <View>
        <Text>Initial</Text>
        <Button mode="contained" onPress={() => navigation.navigate('Guto')}>
          Guto
        </Button>
        <Button mode="contained" onPress={() => navigation.navigate('Nutka')}>
          Nutka
        </Button>
      </View>
    </>
  );
};

export default Initial;
