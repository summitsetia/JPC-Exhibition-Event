import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Video } from 'expo-av';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.videoContainer}>
        <Video
          source={require('../videos/background.mp4')}
          style={styles.backgroundVideo}
          resizeMode="cover"
          shouldPlay
          isLooping
        />
      </View>
      {/* Button Container */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => { navigation.navigate("InfoScreen") }}>
          <Text style={styles.button}>Description</Text>
        </TouchableOpacity>
      </View>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>JPC EXHIBITION EVENT</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoContainer: {
    position: 'absolute', 
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1, 
  },
  backgroundVideo: {
    flex: 1,
  },
  header: {
    marginTop: -765,
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  buttonContainer: {
    position: 'absolute', 
    bottom: 25, 
    left: 20,
  },
  button: {
    backgroundColor: '#1167b1',
    color: 'white',
    fontSize: 18,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
});

export default Home;
