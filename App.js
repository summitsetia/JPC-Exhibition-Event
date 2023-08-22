import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from "./screens/HomeScreen";
import Description from "./screens/Description";
import Comment from "./screens/Comment";

const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
  screenOptions={{
    headerShown: false
  }}
>
        <Stack.Screen name="HomeScreen" component={HomeScreen}/>
        <Stack.Screen name="Description" component={Description}/>
        <Stack.Screen name="Comment" component={Comment}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

