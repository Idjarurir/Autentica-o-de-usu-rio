import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {AuthContext} from '../context/contexto';

export default function Home() {
  const navigation = useNavigation();
  const {user} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Página Home</Text>
      <Text style={styles.title}>Bem vindo: {user.nome}</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Verificação')}>
        <Text style={styles.buttonText}>Autenticar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginBottom: 5,
    fontSize: 20,
  },
  button: {
    width: '45%',
    height: 40,
    backgroundColor: 'green',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: '#FFF',
  }
});
