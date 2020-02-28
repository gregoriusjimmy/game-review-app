import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import Card from '../shared/card';
import { globalStyles, images } from '../styles/global';

const ReviewDetails = ({ navigation }) => {
  const rating = navigation.getParam('rating');

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>{navigation.getParam('title')}</Text>
        <Text>{navigation.getParam('body')}</Text>
        <View style={style.rating}>
          <Text>GameZone rating:</Text>
          <Image source={images.ratings[rating]} />
        </View>
      </Card>
    </View>
  );
};

const style = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
});

export default ReviewDetails;
