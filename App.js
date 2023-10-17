import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Speech from 'expo-speech';
import Ifsul from './Ifsul';
import Unipampa from './Unipampa';
import Ideau from './Ideau';
import Icon from 'react-native-vector-icons/Ionicons'

function Localif() {
  return (
    <Ifsul></Ifsul>
  );
}

function Localunipampa() {
  return (
   <Unipampa></Unipampa>
  );
}
function Localideau() {
  return (
    <Ideau></Ideau>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Ifsul" component={Localif} 
        options={{
          tabBarIcon: () => (<Icon name="desktop-outline" size={30} color="black" />)
      }}/>
        <Tab.Screen name="Unipampa" component={Localunipampa} 
         options={{
          tabBarIcon: () => (<Icon name="earth" size={30} color="black" />)
        }}/>
        <Tab.Screen name="Ideau" component={Localideau}
        options={{
          tabBarIcon: () => (<Icon name="flask" size={30} color="black" />)
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
