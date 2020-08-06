import React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Entypo';
import { styles } from './styles';

const Stack = createStackNavigator();

function Form(route) {
  const { comPlano, semPlano } = route.route.params.ligacao;
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.titulo}>
          <Icon name="price-tag" size={20} color="white" />
          <Text style={styles.tituloText}>Com a Promoção</Text>
        </View>
        <View style={styles.body}>
          <Text style={styles.bodyText}>
            Valor da Ligação:{' '}
            <Text style={styles.textBold}>{comPlano} reais</Text>
          </Text>
          <Text style={styles.bodyText}>
            Taxa cobrada de{' '}
            <Text style={styles.textBold}>1.7% + 10% do valor</Text>
          </Text>
        </View>
      </View>
      <View style={styles.cardBlack}>
        <View style={styles.titulo}>
          <Icon name="price-tag" size={20} color="white" />
          <Text style={styles.tituloText}>Sem a Promoção</Text>
        </View>
        <View style={styles.body}>
          <Text style={styles.bodyText}>
            Valor da Ligação:{' '}
            <Text style={styles.textBold}>{semPlano} reais</Text>
          </Text>
          <Text style={styles.bodyText}>
            Taxa cobrada de <Text style={styles.textBold}>1.7%</Text>
          </Text>
        </View>
      </View>
    </View>
  );
}

export default function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Form}
        options={{
          title: 'My home',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  );
}
