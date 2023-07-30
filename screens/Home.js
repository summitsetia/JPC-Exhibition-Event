import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
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
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => { navigation.navigate("InfoScreen") }}>
          <Text style={styles.button}>Description</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.verticalBar}>
        <View style={styles.verticalBarItem}>
          <TouchableOpacity onPress={() => { /* Handle heart icon press */ }}>
            <Image style={styles.verticalBarIcon} source={require('../Images/heart.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.verticalBarItem}>
          <TouchableOpacity onPress={() => { navigation.navigate("Comment") }}>
            <Image style={styles.verticalBarIcon} source={require('../Images/comments.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.verticalBarItem}>
          <TouchableOpacity onPress={() => { /* Handle heart icon press */ }}>
            <Image style={styles.verticalBarIcon} source={require('../Images/reply.png')} />
          </TouchableOpacity>
        </View>
      </View>
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
  buttonContainer1: {
    position: 'absolute', 
    bottom: 25, 
    right: 20,
  },
  verticalBar: {
    position: 'absolute',
    right: 8,
    bottom: 100,
  },
  verticalBarItem: {
    marginBottom: 24,
    alignItems: 'center',
  },
  verticalBarIcon: {
    width: 32,
    height: 32,
  },
});

export default Home;
