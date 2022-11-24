import styled from 'styled-components';

export const ItemContainer = styled.div`
  width: 80%;
  h3 {
    color: #FAFAFA;
    font-size: 32px;
  }
  p {
    font-size:16px;
    color: #FAFAFA60;
    margin-bottom:20px;
  }
  a, button {
    background-color: transparent;
    border-radius: 5px;
    font-size: 14px;
    font-weight: normal;
    padding: 5px;
  }
  a {
    border: 1px solid #ffff00;
    color:#ffff00;
    text-decoration: none;
  }
  .remover {
    border: 1px solid #ff0000;
    color: #f44336;
    margin-top:20px;
    cursor: pointer;
  }
  hr {
    color: #FAFAFA60;
    margin: 20px 0;
  }
`