import React from 'react';
//import {View, Text} from 'react-native';

import Topper from '../../components/topper';

const Nutka = ({navigation}) => {
  const goBack = () => {
    navigation.navigate('Initial');
  };

  return (
    <Topper title={'Nutka'} subtitle={'Pagina do nutka'} goBack={goBack} />
  );
};

export default Nutka;
