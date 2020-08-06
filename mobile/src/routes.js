import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';

import Form from './pages/Form';
import Card from './pages/Card';

const AppStack = createStackNavigator();

export default function Routes() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <NavigationContainer>
        <AppStack.Navigator
          initialRouteName={Form}
          screenOptions={{
            headerTintColor: '#5E72E4',
            headerTitleStyle: {
              fontWeight: 'bold',
              marginLeft: 15,
            },
            headerStyle: {
              height: 80,
            },
          }}
        >
          <AppStack.Screen
            name="Form"
            component={Form}
            options={{
              title: 'saiba o valor da ligação',
            }}
          />
          <AppStack.Screen
            name="Card"
            component={Card}
            options={{
              title: 'Valor da ligação',
            }}
          />
        </AppStack.Navigator>
      </NavigationContainer>
    </>
  );
}
