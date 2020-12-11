import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Initial from '../pages/initial';
import Guto from '../pages/guto';
import Nutka from '../pages/nutka';

const {Screen, Navigator} = createStackNavigator();

export default () => {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="Initial" component={Initial} />
      <Screen name="Guto" component={Guto} />
      <Screen name="Nutka" component={Nutka} />
    </Navigator>
  );
};
