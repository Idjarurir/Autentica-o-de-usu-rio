import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import Verificacao from './src/screens/Verificacao';
import {NavigationContainer} from '@react-navigation/native';
import AuthProvider from './src/context/contexto';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Verificação" component={Verificacao} />
        </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  );
}
export default App;