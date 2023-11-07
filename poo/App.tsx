import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import * as Speech from 'expo-speech';
import { Cachorro } from './model/Cachorro';
import { useState } from 'react';

export default function App() {
  const [formCachorro, setFormCachorro] =
    useState<Partial<Cachorro>>({})
  const instanciar =()=>{
    const cachorro = new Cachorro(formCachorro)
    cachorro.latir()
    alert('Cachorro instanciado')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Cadastro de Pets</Text>
      <TextInput 
      style={styles.input}
      placeholder='Digite o ID'
       value={formCachorro.id?.toString()}
       onChangeText={
        (val)=>setFormCachorro({...
        formCachorro, id: val})
       }
       >

      </TextInput>
      <TextInput 
      style={styles.input}
      placeholder='Digite o nome'
       value={formCachorro.nome?.toString()}
       onChangeText={
        (val)=>setFormCachorro({...
        formCachorro, nome: val})
       }
       >

      </TextInput>
      <TextInput 
      style={styles.input}
      placeholder='Digite a raça'
       value={formCachorro.raca?.toString()}
       onChangeText={
        (val)=>setFormCachorro({...
        formCachorro, raca: val})
       }
       >

      </TextInput>
      <TextInput 
      style={styles.input}
      placeholder='Digite a data de nascimento'
       value={formCachorro.data_nascimento?.toString()}
       onChangeText={
        (val)=>setFormCachorro({...
        formCachorro, data_nascimento: val})
       }
       >

      </TextInput>
      <Button 
      title='Instanciar Objeto'
      onPress={instanciar}>

      </Button>
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
  input:{
    backgroundColor: '#f06292',
    paddingVertical: 1,
    paddingHorizontal: 1,
    marginTop: 2,
    height: 40,
    borderRadius: 8,
    minWidth: 300,
  },
  texto:{
    color: '#f8bbd0',
  }
});
