import React from 'react';
import {Appbar} from 'react-native-paper';

const Topper = (props) => {
  return (
    <Appbar.Header>
      {props.goBack !== null && <Appbar.BackAction onPress={props.goBack} />}
      <Appbar.Content title={props.title} subtitle={props.subtitle} />
    </Appbar.Header>
  );
};

export default Topper;
