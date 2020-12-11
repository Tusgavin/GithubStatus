import React from 'react';
//import {View, Text} from 'react-native';

import Topper from '../../components/topper';

const Guto = ({navigation}) => {
  const goBack = () => {
    navigation.navigate('Initial');
  };

  return <Topper title={'Guto'} subtitle={'Pagina do guto'} goBack={goBack} />;
};

export default Guto;
