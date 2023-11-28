import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Speech from 'expo-speech';
import Icon from 'react-native-vector-icons/Ionicons'
import Loja from './Loja';
import Lista from './Lista';
import Acessorios from './Acessorios';

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text
      style={styles.texto}
      >Bem-vindo a CyberQuest Games!</Text>
      <ImageBackground 
      style={styles.background}
      source={require('./assets/jogo.jpg')}>
      </ImageBackground>
      
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} 
        options={{
          tabBarIcon: () => (<Icon name="home" size={30} color="black" />)
      }}/>
        <Tab.Screen name="Localização" component={Loja} 
        options={{
          tabBarIcon: () => (<Icon name="location" size={30} color="black" />)
      }}/>
      <Tab.Screen name="Jogos" component={Lista} 
        options={{
          tabBarIcon: () => (<Icon name="game-controller" size={30} color="black" />)
      }}/>
      <Tab.Screen name="Acessórios" component={Acessorios} 
        options={{
          tabBarIcon: () => (<Icon name="headset" size={30} color="black" />)
      }}/>
      
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  background:{
    width: '100%',
    height: '100%',
    flex: 1,
  },
  texto:{
    fontStyle: 'normal',
    fontSize: 20,
    fontWeight: 'bold',
  }
});
