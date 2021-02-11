import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }
  body {
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }
  * {
    font-family: 'Catamaran', sans-serif;
    box-sizing: border-box;
  }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 500px;
    background: #fff;
    border-radius: 10px;
    border: 2px solid #ccc;
    padding: 20px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.10);
    margin-top: 100px
    }
`;