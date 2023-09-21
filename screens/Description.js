import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView } from 'react-native';

const Description = ({ route, navigation }) => {
  const { videoId } = route.params;

  let headerText = "";
  let descriptionText = "";
  
  let imageA=null;
  let imageB=null;


  if (videoId === 1) {
    headerText = "Chocolate Raspberry Jam";
    descriptionText = "Indulge your senses in a symphony of flavours with my exquisite Chocolate Raspberry Jam with Chocolate Mousse Multi-Layered Dessert. Handcrafted with the finest ingredients, my dessert is a celebration of contrasts. Experience the harmonious dance of rich, velvety chocolate mousse and luscious raspberry jam as they intertwine to create a culinary masterpiece that will transport you to a realm of pure decadence.";
    imageA = require("../Images/1a.jpg");
    imageB = require("../Images/1b.jpg");
  } else if (videoId === 2) {
    headerText = "Mango Lassi";
    descriptionText = "Indulge in the perfect harmony of flavours and textures with my Mango Lassi Multilayer Dessert. Immerse yourself in the tropical delight of juicy mango compote, exquisitely layered over a light and fluffy sponge cake base. The velvety richness of whipped yogurt complements the vibrant sweetness of the mango, creating a symphony of taste that dances on your palate. Each spoonful is a journey through layers of culinary artistry, blending the timeless appeal of traditional mango lassi with a modern twist. Elevate your dessert experience with this masterpiece that captures the essence of summer in every bite.";
    imageA = require("../Images/2a.jpg");
    imageB = require("../Images/2b.jpg");
  
  } else if (videoId === 3) {
    headerText = "Pina Colado";
    descriptionText = "Indulge in tropical paradise with the exquisite Pina Colada-inspired multilayered dessert. A coconut base, with a tangy pineapple compote, inside a cloud-like coconut mouse. Topped with a chocolate coconut shell to let this essence of summer dance on your palate. Each bite is a getaway to the tropics, an Escape to the serenity of sipping a pina colada.";
    imageA = require("../Images/3a.jpg");
    imageB = require("../Images/3b.jpg");


  
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.headerText}>{headerText}</Text>
        <Text style={styles.descriptionText}>{descriptionText}</Text>
      </View>
      
      <View style={styles.bottomContainer}>
        {/* {videoId === 1 && (
          <>
            <Image source={require("../Images/1a.jpg")} style={styles.outlineLarge} />
            <Image source={require("../Images/1b.jpg")} style={styles.outlineLarge} />
          </>
        )}

        {videoId === 2 && (
          <>
            <Image source={require("../Images/2a.jpg")} style={styles.outlineLarge} />
            <Image source={require("../Images/2b.jpg")} style={styles.outlineLarge} />
          </>
        )}

        {videoId === 3 && (
          <>
            <Image source={require("../Images/3a.jpg")} style={styles.outlineLarge} />
            <Image source={require("../Images/3b.jpg")} style={styles.outlineLarge} />
          </>
        )} */}

          <Image source={imageA} style={styles.outlineLarge} />
          <Image source={imageB} style={styles.outlineLarge} />
       
      </View>

      <TouchableOpacity onPress={() => { navigation.navigate("HomeScreen") }}>
        <Text style={styles.button}>Home</Text>
      </TouchableOpacity>
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
    paddingBottom: '70%',
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
  outlineLarge: {
    borderWidth: 2,
    borderColor: 'black',
    width: '48%',
    height: 200, 
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
