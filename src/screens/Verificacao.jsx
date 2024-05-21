import React, {useContext} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AuthContext } from '../context/contexto';

export default function Verificacao() {
  const {user} = useContext(AuthContext);

 return (
   <View style={styles.container}>
     <Text style={styles.title}>Página de Verificação</Text>
     <Text style={styles.title}>Nome: {user.nome}</Text>
     <Text style={styles.title}>Email: {user.email}</Text>
     <Text style={styles.title}>Status: {user.status}</Text>
   </View>
  );  
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    marginBottom: 5,
    fontSize: 20,
  }
})