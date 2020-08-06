import styled from 'styled-components';
import 'typeface-montserrat';

export const Container = styled.div`
  background: #ffffff;
  box-sizing: border-box;
  box-shadow: 0px 4px 80px rgba(166, 166, 166, 0.25);
  width: 350px;
  height: 450px;
  padding: 30px 0 0 20px;
  position: fixed;
  right: 100px;
  bottom: 70px;

  @media (max-width: 1200px) {
    width: 320px;
    .myButton {
      margin-left: 10px;
    }
  }
  @media (max-width: 1100px) {
    width: 350px;
    position: static;
    .myButton {
      margin-left: 25px;
    }
  }
`;
