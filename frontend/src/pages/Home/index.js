import React from 'react';

import Card from '../../components/Card';
import { Container } from './styles';
import illustration from '../../assets/images/falemais.svg';

export default function Home() {
  return (
    <Container>
      <div className="box-left">
        <div className="title">
          <h1>Fale mais</h1>
          <h1>
            Com quem <span>você ama.</span>
          </h1>
        </div>

        <div className="subtitle">
          <p>Com o FaleMais você pode falar de graça até o limite da sua</p>
          <p>franquia e só paga os minutos excedentes</p>
        </div>

        <img className="illustration" src={illustration} alt="falemais" />
      </div>

      <Card />
    </Container>
  );
}
