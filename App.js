import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "./screens/Home";
import Description from "./screens/Description";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
  screenOptions={{
    headerShown: false
  }}
>
        <Stack.Screen name="HomeScreen" component={Home}/>
        <Stack.Screen name="InfoScreen" component={Description}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
