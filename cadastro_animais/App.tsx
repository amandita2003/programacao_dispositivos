import React, { useEffect } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import ManterCachorro from './src/screens/ManterCachorro';
import { Database } from './src/database/Database';
import ListarCachorros from './src/screens/ListarCachorro';
import { Cachorro } from './src/model/Cachorro';


function ListarScreen({ }) {
  return (
    <ListarCachorros></ListarCachorros>
  );
}
function ManterScreen({ }) {
  return (
   <ManterCachorro></ManterCachorro>
  );
}
const Drawer = createDrawerNavigator();


 
export default function App() {
  useEffect(() => {
    // Database.ReinitDb().then(() => console.log("Banco Iniciado")) 
     Database.initDb().then(() => 
     console.log("Banco Iniciado")
     )
   }, []);
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Manter Cachorro">
        <Drawer.Screen name="Manter Cachorro" component={ManterScreen} 
          initialParams={{ cachorro: new Cachorro() }}/>
        <Drawer.Screen name="Listar Cachorros" component={ListarScreen} />
        
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
