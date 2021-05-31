import React from 'react';
import MyStack from './src/components/MyStack';
import {MyContextProvider} from './src/mycontext/MyContext';
import { NavigationContainer } from '@react-navigation/native';
const App= () => { 
  
  return (
    <MyContextProvider>
      <NavigationContainer>
      <MyStack/>
      </NavigationContainer>
    </MyContextProvider>
  );
};

export default App;
