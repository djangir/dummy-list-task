import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

const Items = () => {
  const dataValue = useSelector((state) => state.value);

  const Data = dataValue.map((item, index) => {
    return (
      <View>
        <Text>{'{'}</Text>
        <Text>Name: {'"' + item.item + '",'}</Text>
        <Text>Price: {'"' + item.data + '",'}</Text>
        <Text>},</Text>
      </View>
    );
  });
  return (
    <View style={{ flex: 1, backgroundColor: 'white', padding:20, marginVertical:30, backgroundColor:'lightgray' }}>
      <Text>[</Text>
      {Data}
      <Text>]</Text>
    </View>
  );
};

export default Items;
