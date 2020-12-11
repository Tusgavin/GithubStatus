import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const {Screen, Stack } = createStackNavigator();

export default () => {
  return (
    <Stack>
      <Screen></Screen>
      <Screen></Screen>
    </Stack>
  );
};
