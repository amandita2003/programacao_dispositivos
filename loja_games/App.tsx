import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Speech from 'expo-speech';
import Icon from 'react-native-vector-icons/Ionicons'
import loja from './Loja';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Localização" component={loja} 
        options={{
          tabBarIcon: () => (<Icon name="desktop-outline" size={30} color="black" />)
      }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
