import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import * as Speech from 'expo-speech';
import Ifsul from './Ifsul';
import Unipampa from './Unipampa';
import Ideau from './Ideau';
import Flatlist from './Flatlist';
import Todos from './Todos';

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
function Lista() {
  return (
    <Flatlist></Flatlist>
  );
}
function TodosMap() {
  return (
    <Todos></Todos>
  );
}


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Ifsul" component={Localif} />
        <Drawer.Screen name="Unipampa" component={Localunipampa} />
        <Drawer.Screen name="Ideau" component={Localideau} />
        <Drawer.Screen name="Flatlist" component={Lista} />
        <Drawer.Screen name="Todos" component={Todos} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}