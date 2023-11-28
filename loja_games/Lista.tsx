import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet,Image,Pressable,FlatList, Text, TextInput, View } from 'react-native';
import * as Speech from 'expo-speech';
import { useNavigation } from '@react-navigation/native';

const DATA = [
  {
    id: '1',
    nome: 'The Last of Us 2',
    preco:'249,00',
    promo:'99,00',
    imageUri: 'https://image.api.playstation.com/vulcan/img/rnd/202010/2618/Y02ljdBodKFBiziorYgqftLE.png'
  },
  {
    id: '2',
    preco:'119,00',
    promo:'89,00',
    nome: 'Cyberpunk 2077 ',
    imageUri: 'https://upload.wikimedia.org/wikipedia/pt/f/f7/Cyberpunk_2077_capa.png'
  },
  {
    id: '3',
    nome: 'God of War Ragnarok',
    preco:'149,00',
    promo:'79,00',
    imageUri: 'https://upload.wikimedia.org/wikipedia/pt/a/a5/God_of_War_Ragnar%C3%B6k_capa.jpg'
  },
  {
    id: '4',
    nome: 'Red Dead Redemption 2',
    preco:'149,00',
    promo:'99,00',
    imageUri: 'https://upload.wikimedia.org/wikipedia/pt/e/e7/Red_Dead_Redemption_2.png'
  },
  {
    id: '5',
    nome: 'The Witcher 3',
    preco:'349,00',
    promo:'119,00',
    imageUri: 'https://upload.wikimedia.org/wikipedia/pt/0/06/TW3_Wild_Hunt.png'
  },
  {
    id: '6',
    nome: 'Horizon Forbidden West',
    preco:'99,00',
    promo:'59,00',
    imageUri: 'https://image.api.playstation.com/vulcan/ap/rnd/202107/3100/ki0STHGAkIF06Q4AU8Ow4OkV.png'
  },
  {
    id: '7',
    nome: 'Assassins Creed Valhalla',
    preco:'149,00',
    promo:'99,00',
    imageUri: 'https://ovicio.com.br/wp-content/uploads/2020/08/20200815-81w29-diddl-_sl1500_-696x884-1.jpg'
  },
  {
    id: '8',
    nome: 'Assassins Creed Mirage',
    preco:'199,00',
    promo:'119,00',
    imageUri: 'https://image.api.playstation.com/vulcan/ap/rnd/202208/1718/NFf86jgU4AeVYgJBEoEKBpxW.jpg'
  },

];

export default function Lista() {


  const AcaoDoClique = (item) => {

        Speech.speak('O preço do jogo '+item.nome +'é' +item.promo +'reais',  {language: "pt-BR"});


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