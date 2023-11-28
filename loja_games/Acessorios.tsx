import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet,Image,Pressable,FlatList, Text, TextInput, View } from 'react-native';
import * as Speech from 'expo-speech';
import { useNavigation } from '@react-navigation/native';

const DATA = [
  {
    id: '1',
    nome: 'Headset Gamer Red Dragon',
    preco:'349,00',
    promo:'299,00',
    imageUri: 'https://images.kabum.com.br/produtos/fotos/227818/headset-gamer-redragon-zeus-chroma-mk-ii-rgb-surround-7-1-usb-drivers-53mm-preto-vermelho-h510-rgb_1631555309_original.jpg'
  },
  {
    id: '2',
    preco:'219,00',
    promo:'179,00',
    nome: 'Teclado Gamer Red Dragon',
    imageUri: 'https://m.media-amazon.com/images/I/61gRw-ooKrL._AC_UF894,1000_QL80_.jpg'
  },
  {
    id: '3',
    nome: 'Cadeira Gamer EagleX',
    preco:'649,00',
    promo:'579,00',
    imageUri: 'https://cdn.leroymerlin.com.br/products/cadeira_gamer_de_escritorio_presidente_pro_eaglex_giratoria_r_1567516207_3647_600x600.jpg'
  },
  {
    id: '4',
    nome: 'Controle PS5 Azul',
    preco:'349,00',
    promo:'299,00',
    imageUri: 'https://images.kabum.com.br/produtos/fotos/287649/controle-sem-fio-sony-ps5-dualsense-starlight-blue-3006454_1639496265_original.jpg'
  },
  {
    id: '5',
    nome: 'Monitor Gamer AOC 23 Polegadas',
    preco:'549,00',
    promo:'419,00',
    imageUri: 'https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/2/4/24g2he52312.jpg'
  },
  {
    id: '6',
    nome: 'Water Cooler Rise',
    preco:'199,00',
    promo:'149,00',
    imageUri: 'https://m.media-amazon.com/images/I/61LwRtlj3UL._AC_UF894,1000_QL80_.jpg'
  },
  {
    id: '7',
    nome: 'Mousepad LED',
    preco:'49,00',
    promo:'39,00',
    imageUri: 'https://m.media-amazon.com/images/I/51Y52y3Mb4L._AC_UF894,1000_QL80_.jpg'
  },
  

];

export default function Acessorios() {


  const AcaoDoClique = (item) => {

        Speech.speak('O preço do item '+item.nome +'é' +item.promo +'reais',  {language: "pt-BR"});


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
            <Text style={styles.itemPreco}>R${item.preco}</Text>
            <Text style={styles.itemStyle}>R${item.promo}</Text>
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
   
  },

  itemStyle: {
    fontSize: 16,
    padding: 0,
    marginLeft:50,
    alignItems:'center',
    justifyContent:'center',
    fontWeight:'bold',
  },

  alinhamentoLinha: {
    flexDirection: 'row',
    justifyContent: 'flex-start',    
    padding: 5,
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
  itemPreco: {
    fontSize: 16,
    padding: 0,
    marginLeft:50,
    alignItems:'center',
    justifyContent:'center',
    textDecorationLine:'line-through',
    color: '#e57373'
  },
});