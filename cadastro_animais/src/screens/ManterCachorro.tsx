import { useNavigation, useRoute } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Cachorro } from '../model/Cachorro'
import { CachorroService } from '../servico/CachorroService'

const ManterCachorro = () => {
  const [formCachorro, setFormCachorro] = useState<Partial<Cachorro>>({})

  const route = useRoute();
  const { cachorro } = route.params

  const navigation = useNavigation()

  useEffect(() => {
    buscaCachorro(cachorro)
  }, [cachorro])


  const buscaCachorro = (cachorro: Cachorro) => {
    setFormCachorro(cachorro);
  };

  const salvar = async () => {
    if (formCachorro.id) {
      const cachorro = new Cachorro(formCachorro)
      console.log(cachorro)
      const result = await CachorroService.update(cachorro)
      alert('Registro atualizado!');
      limparFormulario();
    } else {
      const cachorro = new Cachorro(formCachorro)
      const result = await CachorroService.create(cachorro)
      alert('Registro Adicionado!');
      limparFormulario();
    }
  }

  const limparFormulario = () => {
    setFormCachorro({})
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Titulo"
          value={formCachorro.nome}
          onChangeText={nome => setFormCachorro({
            ...formCachorro,
            nome: nome
          })}
          style={styles.input}
        />
        <TextInput
          placeholder="Raça"
          value={formCachorro.raca}
          onChangeText={raca => setFormCachorro({
            ...formCachorro,
            raça: raca
          })}
          style={styles.input}
        />
        <TextInput
          placeholder="Data de nascimento"
          value={formCachorro.data_nascimento}
          onChangeText={data_nascimento => setFormCachorro({
            ...formCachorro,
            data_nascimento: data_nascimento
          })}
          style={styles.input}
        />
        
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={salvar}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Registrar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={limparFormulario}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

export default ManterCachorro

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  inputContainer: {
    width: '80%'
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#0782F9',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#0782F9',
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutlineText: {
    color: '#0782F9',
    fontWeight: '700',
    fontSize: 16,
  },
})