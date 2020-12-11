import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const {Screen, Navigator} = createStackNavigator();

import Guto from '../pages/guto';
import Nutka from '../pages/nutka';

export default () => {
  return (
    <Navigator>
      <Screen name="Guto" component={Guto} />
      <Screen name="Nutka" component={Nutka} />
    </Navigator>
  );
};
