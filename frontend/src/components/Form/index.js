import React, { useState, useEffect } from 'react';
import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import icon from '../../assets/images/icon-group.svg';
import api from '../../services/api';
import { FormContainer } from './styles';

const Form = (props, { handleSubmit }) => {
  const [codigo, setCodigo] = useState([]);
  const [plano, setPlano] = useState([]);
  const { errors } = props;
  useEffect(() => {
    const fetchData = async () => {
      const resCodigo = await api.get('/codigo');
      setCodigo(resCodigo.data);
      const resPlano = await api.get('/plano');
      setPlano(resPlano.data);
    };
    fetchData();
  }, []);

  const validation = yup.object().shape({
    codigo_origem: yup.number().required('Informe a origem'),
    codigo_destino: yup.number().required('Informe o destino'),
    plano: yup.number().required('Informe o plano'),
    minutos: yup.number().required('Informe os minutos'),
  });

  return (
    <FormContainer>
      <Formik
        handleSubmit={handleSubmit}
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
          props.sendData(consulta);
        }}
      >
        <FormikForm>
          <div>
            <div className="box-right">
              <img src={icon} alt="icon" className="icon" />
              <div className="formBox">
                <h2>Saiba o valor</h2>
                {errors.errors && <div className="alert">{errors.errors}</div>}
                <div className="form">
                  <Field as="select" id="origem" name="codigo_origem">
                    <option value="">DDD de Origem</option>
                    {codigo.map((codigos) => (
                      <option key={codigos.id} value={codigos.id}>
                        {codigos.codigo}
                      </option>
                    ))}
                  </Field>
                  <div className="error">
                    <ErrorMessage className="error" name="codigo_origem" />
                  </div>

                  <Field as="select" id="destino" name="codigo_destino">
                    <option value="">DDD de Destino</option>
                    {codigo.map((codigos) => (
                      <option key={codigos.id} value={codigos.id}>
                        {codigos.codigo}
                      </option>
                    ))}
                  </Field>
                  <div className="error">
                    <ErrorMessage name="codigo_destino" />
                  </div>

                  <Field as="select" id="plano" name="plano">
                    <option value="">Seu Plano</option>
                    {plano.map((planos) => (
                      <option key={planos.id} value={planos.id}>
                        {planos.plano}
                      </option>
                    ))}
                  </Field>
                  <div className="error">
                    <ErrorMessage className="error" name="plano" />
                  </div>

                  <Field
                    type="number"
                    id="minutos"
                    label="Minutos Falados"
                    placeholder="minutos a falar"
                    name="minutos"
                  />
                  <div className="error">
                    <ErrorMessage className="error" name="minutos" />
                  </div>
                </div>
                <small>Digite o DDD com 3 digitos apenas</small>
              </div>
            </div>
            <button type="submit" className="myButton">
              Enviar consulta
            </button>
          </div>
        </FormikForm>
      </Formik>
    </FormContainer>
  );
};

export default Form;
