import styled from 'styled-components';
import 'typeface-montserrat';

export const FormContainer = styled.div`
  .box-right {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    .icon {
      width: 35px;
    }

    .formBox {
      display: flex;
      flex-direction: column;
      margin: 0 0 15px 20px;
      .alert {
        color: #721c24;
        background-color: #f8d7da;
        font-weight: bold;
        width: 80%;
        text-align: center;
      }
      .error {
        color: #721c24;
        font-weight: bold;
        height: 20px;
      }
      h2 {
        margin: 5px 0 25px 0;
      }

      input,
      select {
        display: block;
        font-weight: bold;
        width: 218px;
        height: 38px;
        background: white;
        border: 1px solid #c4c4c4;
        box-sizing: border-box;
        padding-left: 5px;
      }

      input {
        padding-left: 10px;
      }

      select {
        color: #5c5c5c;
        &:focus {
          color: black;
        }
        &:checked {
          color: black;
        }
        option:first-child {
          display: none;
        }
      }

      option small {
        margin-top: 20px;
        color: #5c5c5c;
      }
    }
  }

  .myButton {
    background: #ff4f5b;
    color: white;
    font-family: Montserrat;
    font-weight: bold;
    text-transform: none;
    width: 250px;
    height: 60px;
    transition: 0.5s background-color;
    margin-left: 25px;
    border: none;

    &:hover {
      background: #e83f4a;
    }
  }

  @media (max-width: 1200px) {
    .myButton {
      margin-left: 10px;
    }
  }
  @media (max-width: 1100px) {
    .myButton {
      margin-left: 25px;
    }
  }
`;
