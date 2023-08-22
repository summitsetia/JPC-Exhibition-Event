import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';

const Description = ({ route, navigation }) => {
  const { videoId } = route.params;
  //const filepath = `${videoId}a.jpg`;

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.headerText}>Video Description</Text>
        <Text style={styles.descriptionText}>This is the description for {videoId}</Text>
      </View>
      
      <View style={styles.bottomContainer}>
        <View style={styles.outline} />
        <View style={styles.outline} />
      </View>
      
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
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: 'black',
    width: '100%',
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 20,
    position: 'absolute',
    bottom: 70,
    left: 0,
    right: 0,
  },
  outline: {
    borderWidth: 2,
    borderColor: 'black',
    width: '48%',
    height: 100,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  descriptionText: {
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 20,
    marginTop: 10,
  },
});

export default Description;
