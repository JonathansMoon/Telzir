import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Keyboard,
} from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/Entypo';
import { styles, pickerSelectStyles, formStyles } from './styles';
import api from '../../services/api';

export default function Form({ navigation: { navigate } }) {
  const [codigo, setCodigo] = useState([]);
  const [plano, setPlano] = useState([]);
  const [ligacao, setLigacao] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resCodigo = await api.get('/codigo');
      setCodigo(resCodigo.data);
      const resPlano = await api.get('/plano');
      setPlano(resPlano.data);
    };
    fetchData();
  }, []);

  const sendData = async (consulta) => {
    const resLigacao = await api.get(`/ligacoes?${consulta}`);
    setLigacao(resLigacao.data);
    navigate('Card', {
      screen: 'Home',
      params: { ligacao },
    });
    Keyboard.dismiss();
  };

  const validation = yup.object().shape({
    codigo_origem: yup
      .number()
      .typeError('Informe a origem')
      .required('Informe a origem'),
    codigo_destino: yup
      .number()
      .typeError('Informe a destino')
      .required('Informe o destino'),
    plano: yup
      .number()
      .typeError('Informe a plano')
      .required('Informe o plano'),
    minutos: yup
      .number()
      .typeError('Informe a minutos')
      .required('Informe os minutos'),
  });

  // Corpo do Dropdow
  const codigoItem = codigo.map((item) => ({
    label: item.codigo,
    value: item.id,
    key: item.id,
  }));

  const planoItem = plano.map((item) => ({
    label: item.plano,
    value: item.id,
    key: item.id,
  }));

  return (
    <View>
      <Formik
        initialValues={{
          codigo_origem: '',
          codigo_destino: '',
          plano: '',
          minutos: '',
        }}
        validationSchema={validation}
        onSubmit={(event) => {
          const consulta = JSON.stringify(event)
            .replace(/"/g, '')
            .replace(/:/g, '=')
            .replace(/{/g, '')
            .replace(/}/g, '')
            .replace(/,/g, '&');
          sendData(consulta);
        }}
      >
        {({
          handleBlur,
          handleChange,
          values,
          errors,
          touched,
          setFieldValue,
          handleSubmit,
        }) => (
          <View style={styles.container}>
            <RNPickerSelect
              placeholder={{
                label: 'DDD de origem',
                color: '#c7c7c7',
                value: null,
              }}
              useNativeAndroidPickerStyle={false}
              style={pickerSelectStyles}
              onBlur={handleBlur('codigo_origem')}
              onValueChange={(value) => setFieldValue('codigo_origem', value)}
              selectedValue={values.codigo_origem}
              items={codigoItem}
              Icon={() => {
                return <Icon name="chevron-down" size={20} color="#c1c1c1" />;
              }}
            />
            <View style={formStyles.errors}>
              {errors.codigo_origem && (
                <Text style={formStyles.errorsText}>
                  {errors.codigo_origem}
                </Text>
              )}
            </View>

            <RNPickerSelect
              placeholder={{
                label: 'DDD de destino',
                color: '#c7c7c7',
                value: null,
              }}
              useNativeAndroidPickerStyle={false}
              style={pickerSelectStyles}
              onBlur={handleBlur('codigo_destino')}
              onValueChange={(value) => setFieldValue('codigo_destino', value)}
              selectedValue={values.codigo_destino}
              items={codigoItem}
              Icon={() => {
                return <Icon name="chevron-down" size={20} color="#c1c1c1" />;
              }}
            />
            <View style={formStyles.errors}>
              {errors.codigo_destino && (
                <Text style={formStyles.errorsText}>
                  {errors.codigo_destino}
                </Text>
              )}
            </View>

            <RNPickerSelect
              placeholder={{
                label: 'plano',
                color: '#c7c7c7',
                value: null,
              }}
              useNativeAndroidPickerStyle={false}
              style={pickerSelectStyles}
              onBlur={handleBlur('plano')}
              onValueChange={(value) => setFieldValue('plano', value)}
              selectedValue={values.plano}
              items={planoItem}
              Icon={() => {
                return <Icon name="chevron-down" size={20} color="#c1c1c1" />;
              }}
            />
            <View style={formStyles.errors}>
              {errors.plano && (
                <Text style={formStyles.errorsText}>{errors.plano}</Text>
              )}
            </View>

            <TextInput
              placeholder="Minutos"
              style={formStyles.textInput}
              keyboardType="numeric"
              onBlur={handleBlur('minutos')}
              onChangeText={handleChange('minutos')}
              value={values.minutos}
            />
            <View style={formStyles.errors}>
              {errors.minutos && touched.minutos && (
                <Text style={formStyles.errorsText}>{errors.minutos}</Text>
              )}
            </View>

            <TouchableHighlight onPress={handleSubmit} underlayColor="white">
              <View style={formStyles.button}>
                <Text style={formStyles.buttonText}>consultar</Text>
              </View>
            </TouchableHighlight>
            <Text style={formStyles.small}>
              App por Telzir Telecomunicaçẽs.
            </Text>
          </View>
        )}
      </Formik>
    </View>
  );
}
