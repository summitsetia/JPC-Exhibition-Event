import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { supabase } from '../supabase';

const Comment = ({ navigation, videoId }) => {
    return (
        <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => { navigation.navigate("HomeScreen") }}>
          <Text style={styles.button}>Home</Text>
        </TouchableOpacity>
      </View>
        </View>
    );
  }

  const styles = StyleSheet.create({
    button: {
      backgroundColor: '#1167b1',
      color: 'white',
      fontSize: 18,
      paddingVertical: 12,
      paddingHorizontal: 22,
      borderRadius: 8,
    },
  
    buttonContainer: {
      position: 'absolute', 
      bottom: 25, 
      left: 20,
    },
  
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  export default Comment;