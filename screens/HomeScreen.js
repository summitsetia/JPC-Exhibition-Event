import { View, Text, FlatList, Dimensions } from 'react-native'
import React from 'react'
import VideoComponent from './VideoComponent';

data = [
  {
    id: 1,
    filename: require('../videos/chocolate.mov'),
    title: 'Video 1',
  },
  {
    id: 2,
    filename: require('../videos/mango.mov'),
    title: 'Video 2',
  },
  {
    id: 3,
    filename: require('../videos/pina.mov'),
    title: 'Video 3',
  },
];


const HomeScreen = ({navigation}) => {

  const windowHeight = Dimensions.get('window').height;

  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => <VideoComponent videoId={item.id} videoLink={item.filename} navigation={navigation}/>}
        keyExtractor={(item) => item.id}
        snapToInterval={windowHeight} // Snap each item to the width of the screen
        snapToAlignment="start" // Snap at the start of the screen
        decelerationRate="fast" // Control the scrolling speed
        
      />
    </View>
  );
};

export default HomeScreen