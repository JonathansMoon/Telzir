import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .box-left {
    margin-left: 200px;
    margin-top: 50px;
    .title {
      h1 {
        font-size: 60px;
        font-weight: 800;
        color: #2f2f31;

        &:nth-of-type(1) {
          margin-top: 40px;
        }
        span {
          color: #ff4f5b;
        }
      }
    }

    .subtitle {
      margin-top: 20px;

      p:nth-of-type(2) {
        margin-top: 5px;
      }
    }

    img {
      margin-top: 50px;
    }
  }

  @media (max-width: 1400px) {
    .box-left {
      margin: 0 0 0 100px;
      img {
        width: 350px;
      }
      .title {
        h1 {
          font-size: 50px;
          font-weight: 800;
          color: #2f2f31;
        }
      }
    }
  }
  @media (max-width: 1100px) {
    flex-direction: column;
    .box-left {
      margin: 0;
      .illustration {
        display: none;
      }
      .title {
        text-align: center;
      }
      .subtitle {
        text-align: center;
        margin-bottom: 50px;
      }
    }
  }
`;
