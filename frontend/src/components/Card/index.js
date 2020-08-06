import React, { useState } from 'react';
import Form from '../Form';
import Content from '../Content';
import { Container } from './styles';
import api from '../../services/api';

const Card = () => {
  const [ligacao, setLigacao] = useState([]);

  const handleData = async (consulta) => {
    const resLigacao = await api.get(`/ligacoes?${consulta}`);
    setLigacao(resLigacao.data);
  };
  return (
    <Container>
      {!ligacao.semPlano && <Form sendData={handleData} errors={ligacao} />}
      {ligacao.semPlano && <Content ligacao={ligacao} />}
    </Container>
  );
};

export default Card;
