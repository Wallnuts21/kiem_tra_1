import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FirstPage from './pages/firstPage';
import SecondPage from './pages/secondPage';
import ThirdPage from './pages/thirdPage';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoaiHoa"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f8f9fa',
          },
          headerTintColor: '#333',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="LoaiHoa" 
          component={FirstPage}
          options={{ title: 'Loaihoa' }}
        />
        <Stack.Screen 
          name="Hoa" 
          component={SecondPage}
          options={{ title: 'Hoa' }}
        />
        <Stack.Screen 
          name="CTHoa" 
          component={ThirdPage}
          options={{ title: 'CTHoa' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}