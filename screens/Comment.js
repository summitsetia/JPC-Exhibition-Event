import React, { useState, useEffect } from 'react'; 
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { supabase } from '../supabase';

const Comment = ({ route, navigation }) => {
  const { videoId } = route.params;

  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    const { data, error } = await supabase
      .from('comments')
      .select('comment_text')
      .eq('post_id', videoId);

    if (!error) {
      setComments(data);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []); 

  const submitComment = async () => {
    if (commentText.trim() === '') {
      return;
    }

    const { data, error } = await supabase
      .from('comments')
      .upsert([
        {
          post_id: videoId,
          comment_text: commentText, 
        },
      ]);

    if (!error) {
      setCommentText('');
      fetchComments();
    }
  };

  return (
    <View style={styles.container}>
      {console.log(videoId)}
      <TextInput
        style={styles.input}
        placeholder="Add a comment..."
        value={commentText}
        onChangeText={(text) => setCommentText(text)}
        onSubmitEditing={submitComment}
      />
      
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
  
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
});

export default Comment;
