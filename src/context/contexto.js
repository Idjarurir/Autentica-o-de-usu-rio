import React, {useState, createContext} from 'react';
import {useNavigation} from '@react-navigation/native';

export const AuthContext = createContext({});

function AuthProvider({children}) {
  const [user, setUser] = useState({});
  const navigation = useNavigation();

  function signIn(nome, email, password) {
    if (email !== '' && password !== '' && nome !== '') {
      setUser({
        nome: nome,
        email: email,
        status: 'Logado',
      });
      navigation.navigate('Home');
    }
  }

  return (
    <AuthContext.Provider value={{signIn, user}}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
