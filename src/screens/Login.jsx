import React, {useState, useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, StyleSheet, TextInput, TouchableOpacity,} from 'react-native';
import {AuthContext} from '../context/contexto';

export default function Login() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {signIn} = useContext(AuthContext);
  const navigation = useNavigation();

  function handleLogin() {
    signIn(nome, email, password);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem vindo!</Text>

      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={text => setNome(text)}
        placeholder="Digite seu nome"
      />

      <TextInput
        style={styles.input}
        value={email}
        onChangeText={text => setEmail(text)}
        placeholder="Digite seu email"
      />

      <TextInput
        style={styles.input}
        value={password}
        onChangeText={text => setPassword(text)}
        placeholder="Digite sua senha"
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Acessar</Text>
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
    marginBottom: 50,
    fontSize: 40,
  },
  input: {
    width: '90%',
    height: 45,
    backgroundColor: '#A7A7A7',
    borderRadius: 4,
    marginBottom: 14,
    padding: 8,
  },
  button: {
    width: '90%',
    height: 45,
    backgroundColor: 'purple',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: '#FFF',
  }
});
