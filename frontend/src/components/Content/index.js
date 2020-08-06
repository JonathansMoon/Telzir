import React from 'react';
import arrow from '../../assets/images/arrow-left.svg';
import tag from '../../assets/images/tag-dark.svg';
import { Title, Card } from './styles';

const Content = (props) => {
  function refreshPage() {
    window.location.reload();
  }
  // eslint-disable-next-line react/destructuring-assignment
  const { comPlano, semPlano } = props.ligacao;
  return (
    <div>
      <Title>
        <button type="button" onClick={refreshPage}>
          <img src={arrow} alt="" />
        </button>
        <h2>Valor da ligação</h2>
      </Title>
      <Card cardColor="#ff4f5b">
        <div>
          <img src={tag} alt="icon" />
        </div>
        <div>
          <h3>Com Promoção</h3>
          <ul>
            <li>
              Valor da Ligação: <span>{comPlano} reais</span>
            </li>
            <li>
              Taxa cobrada de <span>1.7% + 10% do valor</span>
            </li>
          </ul>
        </div>
      </Card>

      <Card cardColor="#000">
        <div>
          <img src={tag} alt="icon" />
        </div>
        <div>
          <h3>Sem Promoção</h3>
          <ul>
            <li>
              Valor da Ligação: <span>{semPlano} reais</span>
            </li>
            <li>
              Taxa cobrada de <span>1.7%</span>
            </li>
          </ul>
        </div>
      </Card>
    </div>
  );
};

export default Content;
