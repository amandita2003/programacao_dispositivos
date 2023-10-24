import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, Pressable, FlatList, TextInput } from 'react-native';
import * as Speech from 'expo-speech';
import { useNavigation } from '@react-navigation/native';

const DATA = [
  {
    id: '1',
    nome: 'Ifsul',
    imageUri: 'https://www.jornalminuano.com.br/archive/uploads/imagens/2020/03/13/g/30515647_1764468380240189_1793382393516654592_n_1356.jpg'
  },
  {
    id: '2',
    nome: 'Unipampa',
    imageUri: 'https://sites.unipampa.edu.br/planetario/files/2017/09/novo-perfil-1080x1080-1.jpg'
  },
  {
    id: '3',
    nome: 'Ideau',
    imageUri: 'https://www.bage.ideau.com.br/wp-content/uploads/2021/10/DSC07650.jpg'
  },
];

export default function Flat() {

  const navigation = useNavigation()

  const AcaoDoClique = (item) => {
    
    if (item.id=='1'){
        Speech.speak('Você clicou no Ifsul', {language: "pt-BR"});
        navigation.navigate("Ifsul")
    }else 
      if (item.id=='2'){
        Speech.speak('Você clicou na Unipampa', {language: "pt-BR"});
        navigation.navigate("Unipampa")
      }else{
        Speech.speak('Você clicou na Ideau', {language: "pt-BR"});
        navigation.navigate("Ideau")
      }
      
  }

  const renderItemNovo = ({ item }) => {
    return <View style={styles.item} key={item.id}>
      <Pressable
        style={({ pressed }) => [{ backgroundColor: pressed ? '#f1f1f1' : 'transparent' }, styles.title]}
        onPress={() => { AcaoDoClique(item) }}
      >
        <View style={styles.alinhamentoLinha}>
          <Image style={styles.image} source={{ uri: item.imageUri }} />
          <View style={styles.alinhamentoColuna}>
            <Text style={styles.itemStyle}>{item.nome} </Text>
          </View>
        </View>
      </Pressable>
    </View>
  }

  return (
    <View style={styles.container}>
      
    

      <FlatList
          data={DATA}
          keyExtractor={item => item.id}
          renderItem={renderItemNovo}
        />
    
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:100,
  },

  itemStyle: {
    fontSize: 16,
    padding: 5,
    marginLeft:50,
    alignItems:'center',
    justifyContent:'center',
    fontWeight:'bold',
  },

  alinhamentoLinha: {
    flexDirection: 'row',
    justifyContent: 'flex-start',    
  },

  alinhamentoColuna: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    
  },

  image: {
    height: 50,
    width: 50,
    alignSelf: 'center'
  },
});