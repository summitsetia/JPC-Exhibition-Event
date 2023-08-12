import { View, Text, FlatList, Dimensions } from 'react-native'
import React from 'react'
import VideoComponent from './VideoComponent';

data = [
  {
      id: 1,
      filename: require('../videos/background.mp4'),
      title: 'Video 1',
  },
  {
      id: 2,
      filename: require('../videos/background2.mp4'),
      title: 'Video 1',
  },

]

const HomeScreen = () => {

  const windowHeight = Dimensions.get('window').height;

  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => <VideoComponent videoId={item.id} videoLink={item.filename} />}
        keyExtractor={(item) => item.id}
        snapToInterval={windowHeight} // Snap each item to the width of the screen
        snapToAlignment="start" // Snap at the start of the screen
        decelerationRate="fast" // Control the scrolling speed
      />
    </View>
  );
};

export default HomeScreen