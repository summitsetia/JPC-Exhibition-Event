import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, FlatList, SafeAreaView } from 'react-native';
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
    <SafeAreaView style={styles.container}>
      <FlatList
        data={comments}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.commentContainer}>
            <Text style={styles.commentText}>{item.comment_text}</Text>
          </View>
        )}
      />

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
    </SafeAreaView>
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
    fontFamily: 'AmericanTypewriter-Bold'
  },

  buttonContainer: {
    position: 'absolute',
    bottom: 25,
    left: 20,
  },

  commentContainer: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    padding: 10,
  },

  commentText: {
    fontSize: 16,
  },

  container: {
    flex: 1,
    justifyContent: 'flex-end', 
    alignItems: 'center',
    paddingBottom: '10'
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 3,
    padding: 10,
  }
});

export default Comment;
