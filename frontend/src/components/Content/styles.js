import styled from 'styled-components';
import 'typeface-montserrat';

export const Title = styled.div`
  font-weight: normal;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  button {
    background: none;
    border: none;
    cursor: pointer;
  }
  h2 {
    margin-left: 10px;
  }
`;

export const Card = styled.div`
  width: 90%;
  height: 150px;
  color: white;
  background: ${(props) => props.cardColor};
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
  display: flex;
  padding: 30px;
  box-sizing: border-box;

  & {
    margin-bottom: 20px;
  }
  img {
    margin-right: 15px;
  }
  ul {
    margin-top: 5px;
    list-style-type: none;
    li {
      line-height: 25px;
      span {
        font-weight: bold;
      }
    }
  }
`;
