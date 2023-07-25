import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, TouchableOpacity, } from 'react-native';
import { Video, ResizeMode } from 'expo-av';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
        
        <View style={styles.videoContainer}>
          <Video
            source={require('../videos/background.mp4')}
            style={styles.backgroundVideo}
            resizeMode={ResizeMode.COVER}
            shouldPlay
            isLooping 
          />
        </View>
        <View style={styles.header}>
          <Text style={styles.headerText}>JPC EXHIBITION EVENT</Text>
        </View>
        <TouchableOpacity
        onPress={() => {navigation.navigate("InfoScreen")}}
        >
            <Text>Go to description</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'dodgerblue',
      alignItems: 'center',
      justifyContent: 'center', 
    },
    header: {
      backgroundColor: 'white',
      padding: 15,
      flexDirection: 'row',
      alignItems: 'flex-start',
      borderRadius: 100,
      overflow: 'hidden',
      position: 'absolute',
      top: 50, 
      zIndex: 1, 
    },
    headerText: {
      fontSize: 20,
    },
    videoContainer: {
      flex: 1,
      width: '100%',
      height: '100%',
      position: 'relative',
      zIndex: 0, 
    },
    backgroundVideo: {
      flex: 1,
      width: '100%',
      height: '100%',
    },
  
    
  });

export default Home