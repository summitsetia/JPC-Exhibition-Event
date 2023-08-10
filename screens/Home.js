import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, Pressable, FlatList } from 'react-native';
import { Video } from 'expo-av';
import { supabase } from '../supabase';

const Home = ({ navigation }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);

  const fetchLikeCount = async () => {
    console.log("fetchlikecount function is called")
    const { data, error } = await supabase
      .from('posts')
      .select('likes_count')
      .eq('id', 1)
      .single();
    setLikesCount(data.likes_count)
  };

  useEffect(() => {
    fetchLikeCount();
  }, [])

  const incrementLikeCount = async () => {
    const newLikesCount = likesCount + 1
    
    const { data, error } = await supabase
      .from('posts')
      .upsert([{ id: 1, likes_count: newLikesCount }]); 

    if (!error) {
      setLikesCount(newLikesCount);
      
    }
  };

  const onLikePress = async () => {
    await incrementLikeCount();
    setIsLiked(true);

    setTimeout(() => {
      setIsLiked(false); 
    }, 3000); 
  };


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
          <Pressable onPress={onLikePress} style={styles.likeContainer}>
            <Image
              style={[styles.verticalBarIcon, isLiked && styles.heartIconLiked]}
              source={require('../Images/heart.png')}
            />
          </Pressable>
          <Text style={styles.iconText}>{likesCount}</Text>
        </View>
        <View style={styles.verticalBarItem}>
          <TouchableOpacity onPress={() => { navigation.navigate("Comment") }} style={styles.likeContainer}>
            <Image style={styles.verticalBarIcon} source={require('../Images/comments.png')} />
          </TouchableOpacity>
          <Text style={styles.iconText}>0</Text>
        </View>
        <View style={styles.verticalBarItem}>
          <TouchableOpacity  style={styles.likeContainer}> 
            <Image style={styles.verticalBarIcon} source={require('../Images/reply.png')} />
          </TouchableOpacity>
          <Text style={styles.iconText}>0</Text>
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
    bottom: 45,
  },
  verticalBarItem: {
    marginBottom: 24,
    alignItems: 'center',
  },
  verticalBarIcon: {
    width: 48,
    height: 48,
  },
  heartIconLiked: {
    tintColor: 'red', 
  },
  iconText: {
    color: 'white',
    marginTop: 4,
  },
  likeContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
  },
});

export default Home;
